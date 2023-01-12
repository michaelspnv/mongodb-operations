import { createSlice } from "@reduxjs/toolkit"

export const authErrorsSlice = createSlice({
  name: "authErrors",
  initialState: {
    validationError: null,
    authError: null,
  },
  reducers: {
    initiateNewError: (state, action) => {
      switch (action.payload.errorType) {
        case "validationError":
          state.validationError = action.payload.message
          break
        case "authError":
          state.authError = action.payload.message
      }
    },
  },
})

export const { initiateNewError } = authErrorsSlice.actions

export default authErrorsSlice.reducer
