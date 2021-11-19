export const MOVIES_SEARCH_REQUEST = "MOVIES_SEARCH_REQUEST";
export const MOVIES_SEARCH_DEFAULT = "MOVIES_SEARCH_DEFAULT";
export const GET_MOVIES_SEARCH = "GET_MOVIES_SEARCH";
export const SET_SORT = "SET_SORT";
export const FILTER_RELEASE = "FILTER_RELEASE";
export const FILTER_ADD_GENRES = "FILTER_ADD_GENRES";
export const FILTER_REMOVE_GENRES = "FILTER_REMOVE_GENRES";
export const FILTER_ADD_AGE = "FILTER_ADD_AGE";
export const FILTER_REMOVE_AGE = "FILTER_REMOVE_AGE";
export const FILTER_SORT_AGES = "FILTER_SORT_AGES";

export const moviesSearchRequestAction = (
  sort,
  release,
  genres,
  certification
) => ({ type: MOVIES_SEARCH_REQUEST, sort, release, genres, certification });
export const moviesSearchDefaultAction = () => ({
  type: MOVIES_SEARCH_DEFAULT,
});
export const getMoviesSearchAction = (payload) => ({
  type: GET_MOVIES_SEARCH,
  payload,
});
export const setSortAction = (payload) => ({ type: SET_SORT, payload });
export const filterReleaseAction = (payload) => ({
  type: FILTER_RELEASE,
  payload,
});
export const addGenresFilterAction = (payload) => ({
  type: FILTER_ADD_GENRES,
  payload,
});
export const removeGenresFilterAction = (payload) => ({
  type: FILTER_REMOVE_GENRES,
  payload,
});
export const addAgeFilterAction = (payload) => ({
  type: FILTER_ADD_AGE,
  payload,
});
export const removeAgeFilterAction = (payload) => ({
  type: FILTER_REMOVE_AGE,
  payload,
});
export const sortAgesFilterAction = () => ({ type: FILTER_SORT_AGES });
