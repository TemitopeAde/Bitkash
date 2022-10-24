import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import {recoverReducer} from "./recoverPasswordReducer";
import { transactionReducer } from "./transactionReducer";

const reducers = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  recover: recoverReducer,
  transactions: transactionReducer,
});

export default reducers;
