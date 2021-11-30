export const SINGLE_SEARCH_REQUEST = 'SINGLE_SEARCH_REQUEST';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SINGLE_SEARCH_SUCCESS_MOVIES = 'SINGLE_SEARCH_SUCCESS_MOVIES';
export const SINGLE_SEARCH_SUCCESS_SERIALS = 'SINGLE_SEARCH_SUCCESS_SERIALS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const singleSearchRequestAction = (searchQuery, page) => ({
  type: SINGLE_SEARCH_REQUEST,
  searchQuery,
  page,
});
export const setSearchQueryAction = (payload) => ({
  type: SET_SEARCH_QUERY,
  payload,
});
export const singleSearchSuccessMoviesAction = (payload) => ({
  type: SINGLE_SEARCH_SUCCESS_MOVIES,
  payload,
});
export const singleSearchSuccessSerialsAction = (payload) => ({
  type: SINGLE_SEARCH_SUCCESS_SERIALS,
  payload,
});
export const nextPageAction = (payload) => ({type: NEXT_PAGE, payload});
export const prevPageAction = (payload) => ({type: PREV_PAGE, payload});
