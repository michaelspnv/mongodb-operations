import { configureStore } from "@reduxjs/toolkit"
import currentUserReducer from "./features/currentUserSlice"
import authErrorsReducer from "./features/authErrorsSlice"

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    authErrors: authErrorsReducer,
  },
})
