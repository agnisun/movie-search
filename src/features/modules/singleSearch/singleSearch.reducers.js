import {
  SET_SEARCH_QUERY,
  SINGLE_SEARCH_REQUEST,
  SINGLE_SEARCH_SUCCESS_MOVIES,
  SINGLE_SEARCH_SUCCESS_SERIALS,
} from './singleSearch.actions';

const initialState = {
  searchQuery: '',
  searchMovies: {},
  searchSerials: {},
  loading: false
};

export const singleSearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SINGLE_SEARCH_REQUEST:
    return {...state, loading: true};
  case SET_SEARCH_QUERY:
    return {...state, searchQuery: action.payload};
  case SINGLE_SEARCH_SUCCESS_MOVIES:
    return {...state, searchMovies: action.payload, loading: false};
  case SINGLE_SEARCH_SUCCESS_SERIALS:
    return {...state, searchSerials: action.payload, loading: false};

  default:
    return state;
  }
};
