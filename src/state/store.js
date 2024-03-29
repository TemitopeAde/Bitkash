import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import {persistStore} from 'redux-persist';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  // persistedReducer,
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const Persistor = persistStore(store);

export {Persistor}




