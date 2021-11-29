import React, { useMemo } from "react";
import { useSharedHelper } from "../sharedHelper";
import {
  TABLE_BLOCK_INNER_RENDER,
  TABLE_BLOCK_RENDER,
  PREVIEW_BLOCK_RENDER,
  INPUT_BLOCK_RENDER,
  BUTTON_BLOCK_RENDER,
} from "../constants";

export const InputBlock: React.FC = () => {
  console.log(INPUT_BLOCK_RENDER);

  const {
    handleLocalStateInput,
    localStateInputValue,
    handleStoreStateInput,
    storeStateInputValue,
  } = useSharedHelper();

  return (
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
  );
};

export const PreviewBlock: React.FC = () => {
  console.log(PREVIEW_BLOCK_RENDER);

  const { localStateInputValue, storeStateInputValue } = useSharedHelper();

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

export const ButtonBlock: React.FC = () => {
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

export const TableBlock: React.FC = () => {
  console.log(TABLE_BLOCK_RENDER);

  const { table } = useSharedHelper();

  return useMemo(() => {
    console.log(TABLE_BLOCK_INNER_RENDER);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.length]);
};
