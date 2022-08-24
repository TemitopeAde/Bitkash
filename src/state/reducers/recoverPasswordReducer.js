import {
  RECOVER_PASSWORD,
  RECOVER_PASSWORD_FAILED,
} from "../action-creators/types";

const initialState = {
  recovered: false,
};

export const recoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECOVER_PASSWORD:
      return {
        ...state,
        recovered: true,
      };

    case RECOVER_PASSWORD_FAILED:
      return {
        ...state,
        recovered: false,
      };

    default:
      return state;
  }
};

