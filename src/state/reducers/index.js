import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import {recoverReducer} from "./recoverPasswordReducer"

const reducers = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  recover: recoverReducer
});

export default reducers;
