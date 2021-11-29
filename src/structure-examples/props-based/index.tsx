import React, { Profiler } from "react";
import { PropsBasedStructure } from "./propsBased.structure";
import { PROPS_BASED } from "../constants";

export const PropsBased: React.FC = () => {
  return (
    <Profiler
      id={PROPS_BASED}
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.log(
          `${id} ${phase} | eff time: [${Math.round(
            actualDuration
          )}ms] | no memo estimated time: [${Math.round(baseDuration)}ms]`
        );
      }}
    >
      <PropsBasedStructure />
    </Profiler>
  );
};
