import {
  FILTER_RELEASE,
  GET_MOVIES_SEARCH,
  MOVIES_SEARCH_REQUEST, SET_SORT,
} from "./searchMovies.actions";
import {currentDate} from "../../../core/currentDate";

const initialState = {
  movies: {},
  sort: "popularity.desc",
  genres: [],
  age: [],
  release: ["", currentDate(1)],
  isLoading: false,
  error: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SEARCH_REQUEST:
      return {...state, isLoading: true}
    case GET_MOVIES_SEARCH:
      return {...state, movies: action.payload}
    case SET_SORT:
      return {...state, sort: action.payload}
    case FILTER_RELEASE:
      return {...state, release: action.payload}

    default:
      return state;
  }
};
