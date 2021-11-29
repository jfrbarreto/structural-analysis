import React from "react";
import {
  ButtonBlock,
  InputBlock,
  PreviewBlock,
  TableBlock,
} from "./hookBased.components";
import { STRUCTURE_RENDER } from "../constants";

export const HookBasedStructure: React.FC = () => {
  console.log(STRUCTURE_RENDER);
  return (
    <>
      <div className={"row center"}>
        <InputBlock />
        <PreviewBlock />
        <ButtonBlock />
      </div>
      <TableBlock />
    </>
  );
};
