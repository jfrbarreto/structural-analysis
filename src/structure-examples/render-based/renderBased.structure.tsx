import React from "react";
import { useSharedHelper } from "../sharedHelper";

export const RenderBasedStructure: React.FC = () => {
  const {
    table,
    handleLocalStateInput,
    handleStoreStateInput,
    localStateInputValue,
    storeStateInputValue,
  } = useSharedHelper();

  return (
    <>
      <div className={"row center"}>
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

        <div>
          <div className={"margin16"}>
            <button>Local state search</button>
          </div>
          <div className={"margin16"}>
            <button>Store state search</button>
          </div>
        </div>
      </div>
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
    </>
  );
};
