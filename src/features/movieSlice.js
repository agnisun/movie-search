import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    dataSerials: [],
    genres: [],
    config: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload.genres;
    },
    setConfig: (state, action) => {
      state.config = action.payload;
    },
    setDataSerials: (state, action) => {
      state.dataSerials = action.payload;
    },
  },
});

export const { setData, setGenres, setConfig, setDataSerials } =
  movieSlice.actions;
export default movieSlice.reducer;
