import React, { Profiler } from "react";
import { HybridBasedStructure } from "./hybridBased.structure";
import { HYBRID_BASED } from "../constants";

export const HybridBased: React.FC = () => {
  return (
    <Profiler
      id={HYBRID_BASED}
      onRender={(id, phase, actualDuration, baseDuration) => {
        console.log(
          `${id} ${phase} | eff time: [${Math.round(
            actualDuration
          )}ms] | no memo estimated time: [${Math.round(baseDuration)}ms]`
        );
      }}
    >
      <HybridBasedStructure />
    </Profiler>
  );
};
