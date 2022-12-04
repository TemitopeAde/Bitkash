import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import {recoverReducer} from "./recoverPasswordReducer";
import { transactionReducer } from "./transactionReducer";


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
    "transactionsHistory",
    "userNotifications",
  ],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  loader: loaderReducer,
  recover: recoverReducer,
  transactions: transactionReducer,
});

export default reducers;
