import React, { Profiler } from "react";
import { HookBasedStructure } from "./hookBased.structure";
import { HOOK_BASED } from "../constants";

export const HookBased: React.FC = () => {
  return (
    <Profiler
      id={HOOK_BASED}
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.log(
          `${id} ${phase} | eff time: [${Math.round(
            actualDuration
          )}ms] | no memo estimated time: [${Math.round(baseDuration)}ms]`
        );
      }}
    >
      <HookBasedStructure />
    </Profiler>
  );
};
