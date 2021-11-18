export const MOVIES_SEARCH_REQUEST = "MOVIES_SEARCH_REQUEST";
export const GET_MOVIES_SEARCH = "GET_MOVIES_SEARCH";
export const SET_SORT = "SET_SORT";

export const moviesSearchRequestAction = (sort) => ({ type: MOVIES_SEARCH_REQUEST, sort });
export const getMoviesSearchAction = (payload) => ({ type: GET_MOVIES_SEARCH, payload });
export const setSortAction = (payload) => ({ type: SET_SORT, payload });

