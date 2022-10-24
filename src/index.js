import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, Persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);



