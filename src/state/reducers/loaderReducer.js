import {
  HIDE_LOADER,
  TOGGLE_LOAD,
  TOGGLE_LOAD_FALSE,
} from "../action-creators/types";
import { SHOW_LOADER } from "../action-creators/types";

const initialState = {
  loading: false,
  loaded: false,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER:
      console.log("hide");
      return {
        ...state,
        loading: false,
      };

    case SHOW_LOADER:
      console.log("Show");
      return {
        ...state,
        loading: true,
      };

    case TOGGLE_LOAD:
      return {
        ...state,
        loaded: true,
      };
    
      case TOGGLE_LOAD_FALSE:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
};
