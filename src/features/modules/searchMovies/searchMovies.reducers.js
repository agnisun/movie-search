import {
  FILTER_ADD_AGE,
  FILTER_ADD_GENRES,
  FILTER_RELEASE,
  FILTER_REMOVE_AGE,
  FILTER_REMOVE_GENRES,
  FILTER_SORT_AGES,
  GET_MOVIES_SEARCH,
  MOVIES_SEARCH_DEFAULT,
  MOVIES_SEARCH_REQUEST,
  NEXT_PAGE,
  PREV_PAGE,
  SET_SORT,
} from "./searchMovies.actions";
import { currentDate } from "../../../core/currentDate";

const initialState = {
  movies: {},
  sort: "popularity.desc",
  genres: [],
  certification: [],
  release: ["", currentDate(1)],
  isLoading: false,
  error: false,
};

export const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SEARCH_REQUEST:
      return { ...state, isLoading: true };
    case MOVIES_SEARCH_DEFAULT:
      return initialState;
    case GET_MOVIES_SEARCH:
      return { ...state, movies: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case FILTER_RELEASE:
      return { ...state, release: action.payload };
    case FILTER_ADD_GENRES:
      return {
        ...state,
        genres: [...state.genres, action.payload],
      };
    case FILTER_REMOVE_GENRES:
      return {
        ...state,
        genres: state.genres.filter((el) => el !== action.payload),
      };
    case FILTER_ADD_AGE:
      return {
        ...state,
        certification: [...state.certification, action.payload],
      };
    case FILTER_REMOVE_AGE:
      return {
        ...state,
        certification: state.certification.filter(
          (el) => el.value !== action.payload
        ),
      };
    case FILTER_SORT_AGES:
      return {
        ...state,
        certification: state.certification.sort((a, b) => a.order - b.order),
      };
    case NEXT_PAGE:
      return {
        ...state,
        movies: {
          ...state.movies,
          page: action.payload,
        },
      };
    case PREV_PAGE:
      return {
        ...state,
        movies: {
          ...state.movies,
          page: action.payload,
        },
      };

    default:
      return state;
  }
};
