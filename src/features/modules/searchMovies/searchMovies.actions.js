export const MOVIES_SEARCH_REQUEST = "MOVIES_SEARCH_REQUEST";
export const GET_MOVIES_SEARCH = "GET_MOVIES_SEARCH";
export const SET_SORT = "SET_SORT";
export const FILTER_RELEASE = "FILTER_RELEASE";

export const moviesSearchRequestAction = (sort, release) => ({ type: MOVIES_SEARCH_REQUEST, sort, release });
export const getMoviesSearchAction = (payload) => ({ type: GET_MOVIES_SEARCH, payload });
export const setSortAction = (payload) => ({ type: SET_SORT, payload });
export const filterReleaseAction = (payload) => ({ type: FILTER_RELEASE, payload });

