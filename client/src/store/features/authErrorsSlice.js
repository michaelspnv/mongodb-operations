import { createSlice } from "@reduxjs/toolkit"

export const authErrorsSlice = createSlice({
  name: "authErrors",
  initialState: {
    validationError: {
      message: null,
      location: null,
    },
    authError: {
      message: null,
      location: null,
    },
  },
  reducers: {
    initiateNewError: (state, action) => {
      switch (action.payload.errorType) {
        case "validationError":
          state.authError = {}
          state.validationError.message = action.payload.message
          state.validationError.location = action.payload.location
          break
        case "authError":
          state.validationError = {}
          state.authError.message = action.payload.message
          state.authError.location = action.payload.location
      }
    },
  },
})

export const { initiateNewError } = authErrorsSlice.actions

export const authErrorsReducer = authErrorsSlice.reducer
