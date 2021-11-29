import React, { ChangeEvent, memo } from "react";
import { Row } from "../sharedHelper";
import {
  PREVIEW_BLOCK_RENDER,
  INPUT_BLOCK_RENDER,
  TABLE_BLOCK_RENDER,
  BUTTON_BLOCK_RENDER,
} from "../constants";

interface InputBlockProps {
  handleLocalStateInput(e: ChangeEvent<HTMLInputElement>): void;
  localStateInputValue: string;
  handleStoreStateInput(e: ChangeEvent<HTMLInputElement>): void;
  storeStateInputValue: string;
}

export const InputBlock: React.FC<InputBlockProps> = (props) => {
  const {
    handleLocalStateInput,
    localStateInputValue,
    handleStoreStateInput,
    storeStateInputValue,
  } = props;
  console.log(INPUT_BLOCK_RENDER);
  return (
    <>
      <div>
        <div className={"margin16"}>
          <label>Local state input</label>
          <input
            onChange={handleLocalStateInput}
            value={localStateInputValue}
            type={"text"}
          />
        </div>
        <div className={"margin16"}>
          <label>Store state input</label>
          <input
            onChange={handleStoreStateInput}
            value={storeStateInputValue}
            type={"text"}
          />
        </div>
      </div>
    </>
  );
};

interface PreviewBlockProps {
  localStateInputValue: string;
  storeStateInputValue: string;
}

export const PreviewBlock: React.FC<PreviewBlockProps> = (props) => {
  const { localStateInputValue, storeStateInputValue } = props;
  console.log(PREVIEW_BLOCK_RENDER);
  return (
    <div className={"grow"}>
      <div className={"margin16 row"}>
        <label>Preview local state search:</label>
        <div>{localStateInputValue}</div>
      </div>
      <div className={"margin16 row"}>
        <label>Preview store state search: </label>
        <div>{storeStateInputValue}</div>
      </div>
    </div>
  );
};

export const ButtonBlock: React.FC = (props) => {
  console.log(BUTTON_BLOCK_RENDER);
  return (
    <div>
      <div className={"margin16"}>
        <button>Local state search</button>
      </div>
      <div className={"margin16"}>
        <button>Store state search</button>
      </div>
    </div>
  );
};

interface TableProps {
  table: Row[];
}

export const TableBlock: React.FC<TableProps> = memo(
  (props) => {
    console.log(TABLE_BLOCK_RENDER);
    const { table } = props;
    return (
      <table className={"margin16 stretch"}>
        {table.map((row, index) => (
          <tbody key={index}>
            <tr>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.eyeColor}</td>
              <td>{row.email}</td>
              <td>{row.favoriteFruit}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  },
  (prevProps, nextProps) => prevProps.table.length === nextProps.table.length
);

// isEqual(prevProps, nextProps)
