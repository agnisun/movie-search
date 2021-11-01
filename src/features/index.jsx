import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "./modules/dataSlice";
import movieReducer from "./modules/movieSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    movie: movieReducer,
  },
});
