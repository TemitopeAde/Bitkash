import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { loaderReducer } from "./loaderReducer";

const reducers = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
});

export default reducers;
