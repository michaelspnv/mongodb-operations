import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFilms = createAsyncThunk(
  "loadedFilms/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3001/api", {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.status !== 200) {
        throw new Error("Server Error.")
      }

      return res.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const loadedFilmsSlice = createSlice({
  name: "loadedFilms",
  initialState: {
    films: [],
    error: null,
  },
  reducers: {
    sortFilms: (state, action) => {
      const sortingData = state.films.slice()

      const { sortFilter } = action.payload

      switch (sortFilter) {
        case "rating":
          sortingData.sort((a, b) => Number(b.rating) - Number(a.rating))

          state.films = sortingData

          break
        case "popularity":
          sortingData.sort((a, b) => b.ratingVoteCount - a.ratingVoteCount)

          state.films = sortingData

          break
        case "release date":
          sortingData.sort((a, b) => Number(b.year) - Number(a.year))

          state.films = sortingData
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload

      state.error = null
    })
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export const { sortFilms } = loadedFilmsSlice.actions

export const loadedFilmsReducer = loadedFilmsSlice.reducer
