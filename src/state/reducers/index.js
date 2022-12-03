import { combineReducers } from "redux";
<<<<<<< HEAD
=======
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

>>>>>>> master
import authReducer from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import {recoverReducer} from "./recoverPasswordReducer";
import { transactionReducer } from "./transactionReducer";

<<<<<<< HEAD
const reducers = combineReducers({
  auth: authReducer,
=======

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: [
    "isAuthenticated",
    "userDetails",
    "emailVerificationSent",
    "phoneAndEmailVerified",
    "userBanks",
    "token",
    // "showModal",
  ],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
>>>>>>> master
  loader: loaderReducer,
  recover: recoverReducer,
  transactions: transactionReducer,
});

export default reducers;
