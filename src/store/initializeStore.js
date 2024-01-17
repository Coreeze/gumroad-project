import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { PERSIST } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import mainReducer from "./mainReducer";

export function initializeStore() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const reducer = combineReducers({
    main: mainReducer,
  });

  const persistedReducer = persistReducer(persistConfig, reducer);

  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [PERSIST],
        },
      }),
  });
}
