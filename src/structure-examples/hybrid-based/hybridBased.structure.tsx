import React, { useMemo } from "react";
import { useSharedHelper } from "../sharedHelper";
import {
  ButtonBlock,
  LocalStateBlock,
  StoreBlock,
  TableBlock,
} from "./hybridBased.components";
import { STRUCTURE_RENDER } from "../constants";

export const HybridBasedStructure: React.FC = () => {
  const { handleLocalStateInput, localStateInputValue } = useSharedHelper();

  console.log(STRUCTURE_RENDER);

  return useMemo(
    () => (
      <>
        <div className={"row center"}>
          <LocalStateBlock
            handleLocalStateInput={handleLocalStateInput}
            localStateInputValue={localStateInputValue}
          />
          <StoreBlock />
          <ButtonBlock />
        </div>
        <TableBlock />
      </>
    ),
    [localStateInputValue, handleLocalStateInput]
  );
};
