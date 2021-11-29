import React from "react";
import { useSharedHelper } from "../sharedHelper";
import {
  ButtonBlock,
  InputBlock,
  PreviewBlock,
  TableBlock,
} from "./propsBased.components";
import { STRUCTURE_RENDER } from "../constants";

export const PropsBasedStructure: React.FC = () => {
  const {
    table,
    handleLocalStateInput,
    handleStoreStateInput,
    localStateInputValue,
    storeStateInputValue,
  } = useSharedHelper();

  console.log(STRUCTURE_RENDER);

  return (
    <>
      <div className={"row center"}>
        <InputBlock
          handleLocalStateInput={handleLocalStateInput}
          handleStoreStateInput={handleStoreStateInput}
          localStateInputValue={localStateInputValue}
          storeStateInputValue={storeStateInputValue}
        />
        <PreviewBlock
          localStateInputValue={localStateInputValue}
          storeStateInputValue={storeStateInputValue}
        />
        <ButtonBlock />
      </div>
      <TableBlock table={table} />
    </>
  );
};
