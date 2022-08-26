import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: 'main-root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const Persistor = persistStore(store);

export {Persistor}




