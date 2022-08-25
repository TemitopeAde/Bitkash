import { HIDE_LOADER } from "../action-creators/types";
import { SHOW_LOADER } from "../action-creators/types";

const initialState = {
  loading: false,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER:
      // console.log("hide")
      return {
        ...state,
        loading: false,
      };

    case SHOW_LOADER:
      console.log("show")
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
