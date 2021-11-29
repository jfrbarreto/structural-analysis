import { combineReducers } from "redux";

export enum Actions {
  ChangeInput = "SET_INPUT_VALUE",
}

const initialState = {
  inputValue: "",
};

export function mainReducer(state = initialState, action: any) {
  switch (action.type) {
    case Actions.ChangeInput: {
      return {
        ...state,
        inputValue: action.payload,
      };
    }

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  mainReducer,
});
