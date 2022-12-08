import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "favorites",
  storage: AsyncStorage,
};

const favoritesPersistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: { favorites: favoritesPersistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
