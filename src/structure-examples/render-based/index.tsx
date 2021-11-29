import React, { Profiler } from "react";
import { RenderBasedStructure } from "./renderBased.structure";
import { RENDER_BASED } from "../constants";

export const RenderBased: React.FC = () => {
  return (
    <Profiler
      id={RENDER_BASED}
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.log(
          `${id} ${phase} | eff time: [${Math.round(
            actualDuration
          )}ms] | no memo estimated time: [${Math.round(baseDuration)}ms]`
        );
      }}
    >
      <RenderBasedStructure />
    </Profiler>
  );
};
