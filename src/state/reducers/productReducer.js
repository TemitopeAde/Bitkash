import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILED } from "../action-creators/types";


const initialState = {
  cart : []
}


export const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        cart: action.payload.pageItems,
      };

    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        cart : action.payload
      }

    default:
      return state;
  }
}