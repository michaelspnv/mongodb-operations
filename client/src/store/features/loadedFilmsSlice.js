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
    films: {
      fetched: [],
      filtered: [],
    },
    error: null,
  },
  reducers: {
    sortFilms: (state, action) => {
      const sortingData = state.films.filtered.slice()

      const { sortFilter } = action.payload

      switch (sortFilter) {
        case "rating":
          sortingData.sort((a, b) => Number(b.rating) - Number(a.rating))

          state.films.filtered = sortingData

          break
        case "popularity":
          sortingData.sort((a, b) => b.ratingVoteCount - a.ratingVoteCount)

          state.films.filtered = sortingData

          break
        case "release date":
          sortingData.sort((a, b) => Number(b.year) - Number(a.year))

          state.films.filtered = sortingData
      }
    },
    findFilms: (state, action) => {
      const sortingData = state.films.fetched.slice()

      const { searchFilter } = action.payload

      const result = sortingData.filter((film) =>
        film.nameRu.toLowerCase().includes(searchFilter.trim().toLowerCase())
      )

      state.films.filtered = result
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films.fetched = action.payload
      state.films.filtered = state.films.fetched
      state.error = null
    })
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export const { sortFilms, findFilms } = loadedFilmsSlice.actions

export const loadedFilmsReducer = loadedFilmsSlice.reducer
