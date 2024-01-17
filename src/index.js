import React from "react";
import ReactDOM from "react-dom/client";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "./scss/index.scss";
import App from "./App";

import { initializeStore } from "./store/initializeStore";

// initialize the store with all their slices.
const store = initializeStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
