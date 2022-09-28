import { TRANSACTION_HISTORY_SUCCESS, TRANSACTION_HISTORY_FAILED } from "../action-creators/types"


const initialState = {
  history : []
}

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_HISTORY_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        history: action.payload
      }
    
    case TRANSACTION_HISTORY_FAILED:
      console.log("failed")
      return {
        ...state,
        history: []
      }

    default:
      return state
  }
}