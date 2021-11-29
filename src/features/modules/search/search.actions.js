export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_DEFAULT = 'SEARCH_DEFAULT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_SORT = 'SET_SORT';
export const FILTER_RELEASE = 'FILTER_RELEASE';
export const FILTER_ADD_GENRES = 'FILTER_ADD_GENRES';
export const FILTER_REMOVE_GENRES = 'FILTER_REMOVE_GENRES';
export const FILTER_ADD_AGE = 'FILTER_ADD_AGE';
export const FILTER_REMOVE_AGE = 'FILTER_REMOVE_AGE';
export const FILTER_SORT_AGES = 'FILTER_SORT_AGES';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const searchRequestAction = (
  product,
  sort,
  release,
  genres,
  certification,
  page,
) => ({
  type: SEARCH_REQUEST,
  product,
  sort,
  release,
  genres,
  certification,
  page,
});
export const searchDefaultAction = (product, page) => ({
  type: SEARCH_DEFAULT,
  product,
  page,
});
export const getProductsAction = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
export const setSortAction = (payload) => ({type: SET_SORT, payload});
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
export const sortAgesFilterAction = () => ({type: FILTER_SORT_AGES});
export const nextPageAction = (payload) => ({type: NEXT_PAGE, payload});
export const prevPageAction = (payload) => ({type: PREV_PAGE, payload});
