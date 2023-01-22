import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import currentUserReducer from "./features/currentUserSlice"
import authErrorsReducer from "./features/authErrorsSlice"

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  authErrors: authErrorsReducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
