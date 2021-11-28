import {GET_SEARCH_MOVIES, GET_SEARCH_SERIALS, SET_SEARCH_QUERY, SINGLE_SEARCH_REQUEST,} from "./singleSearch.actions";

const initialState = {
  searchQuery: "",
  searchMovies: {},
  searchSerials: {},
};

export const singleSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_SEARCH_REQUEST:
      return { ...state };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case GET_SEARCH_MOVIES:
      return { ...state, searchMovies: action.payload };
    case GET_SEARCH_SERIALS:
      return { ...state, searchSerials: action.payload };

    default:
      return state;
  }
};
