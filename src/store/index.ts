import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApiSlice } from "./users/users-api-slice";
import favoritesReducer from "./favorites/favorites-slice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const reducers = {
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  favorites: favoritesReducer,
};

const combinedReducers = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const persistedCombinedReducers = persistReducer(
  persistConfig,
  combinedReducers
);

export const store = configureStore({
  reducer: persistedCombinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApiSlice.middleware),
});

export const persistedStore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
