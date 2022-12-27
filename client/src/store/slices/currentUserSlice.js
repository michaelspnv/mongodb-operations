import { createSlice } from "@reduxjs/toolkit"

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    username: null,
    token: null,
  },
  reducers: {
    createUser: (state, action) => {
      state.username = action.payload.username
    },
  },
})

export const { createUser } = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer
