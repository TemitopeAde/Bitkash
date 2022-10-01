import {
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILED,
} from "../action-creators/types";

const initialState = {
  history: [
    {
      _id: "",
      createdAt: "",
      payment_type: "",
      crypto_amount: "",
      fiat_amount: "",
      receipt_wallet: "",
    },
  ],
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload.data,
      };

    case TRANSACTION_HISTORY_FAILED:
      return {
        ...state,
        history: [],
      };

    default:
      return state;
  }
};
