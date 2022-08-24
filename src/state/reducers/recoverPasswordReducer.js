import {
  RECOVER_PASSWORD,
  RECOVER_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_FAILED,
  SUBMIT_NEW_PASSWORD_SUCCESS,
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

    case SUBMIT_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        recovered: true,
      };

    case SUBMIT_NEW_PASSWORD_FAILED:
      return {
        ...state,
        recovered: false,
      };

    default:
      return state;
  }
};
