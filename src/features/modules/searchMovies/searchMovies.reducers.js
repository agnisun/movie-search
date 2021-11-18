import {
  GET_MOVIES_SEARCH,
  MOVIES_SEARCH_REQUEST, SET_SORT,
} from "./searchMovies.actions";

const initialState = {
  movies: [],
  sort: "popularity.desc",
  genres: [],
  age: [],
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

    default:
      return state;
  }
};
