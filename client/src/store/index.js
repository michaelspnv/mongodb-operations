import { configureStore } from "@reduxjs/toolkit"
import currentUserReducer from "./slices/currentUserSlice"
import authErrorsReducer from "./slices/authErrorsSlice"

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    authErrors: authErrorsReducer,
  },
})
