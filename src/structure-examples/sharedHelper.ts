import { ChangeEvent, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as jsonTable from "../tables/table_5000.json";
import { Actions } from "../redux-store/reducer";

interface HookOutput {
  table: Row[];
  handleLocalStateInput(e: ChangeEvent<HTMLInputElement>): void;
  handleStoreStateInput(e: ChangeEvent<HTMLInputElement>): void;
  localStateInputValue: string;
  storeStateInputValue: string;
}

export interface Row {
  name: string;
  age: string;
  gender: string;
  eyeColor: string;
  email: string;
  favoriteFruit: string;
}

export const useSharedHelper = (): HookOutput => {
  const table = useMemo(() => {
    return JSON.parse(JSON.stringify(jsonTable)).default;
  }, []);
  const dispatch = useDispatch();

  const [localStateInputValue, setLocalStateInputValue] = useState<string>("");
  const storeStateInputValue = useSelector((state: any) => {
    return state.mainReducer.inputValue;
  }, shallowEqual);

  const handleLocalStateInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLocalStateInputValue(e.target.value);
    },
    []
  );

  const handleStoreStateInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: Actions.ChangeInput, payload: e.target.value });
    },
    [dispatch]
  );

  return {
    table,
    handleLocalStateInput,
    handleStoreStateInput,
    localStateInputValue,
    storeStateInputValue,
  };
};
