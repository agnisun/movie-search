export const SINGLE_SEARCH_REQUEST = 'SINGLE_SEARCH_REQUEST';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES';
export const GET_SEARCH_SERIALS = 'GET_SEARCH_SERIALS';
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
export const getSearchMoviesAction = (payload) => ({
  type: GET_SEARCH_MOVIES,
  payload,
});
export const getSearchSerialsAction = (payload) => ({
  type: GET_SEARCH_SERIALS,
  payload,
});
export const nextPageAction = (payload) => ({type: NEXT_PAGE, payload});
export const prevPageAction = (payload) => ({type: PREV_PAGE, payload});
