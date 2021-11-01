import {createSlice} from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    sort: "PopularityDescending",
    genres: [],
  },
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    genresFilter: (state, action) => {
      state.genres.push(action.payload);
    },
  },
});

export const { setSort, genresFilter } = movieSlice.actions;
export default movieSlice.reducer;
