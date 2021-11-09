import {
  DATA_REQUEST,
  SET_CONFIG,
  SET_DATA,
  SET_GENRES_MOVIES,
  SET_GENRES_SERIALS,
  SET_SERIALS,
} from "./data.actions";

const initialState = {
  data: [],
  genresMovies: [],
  genresSerials: [],
  config: null,
  serials: [],
  details: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case DATA_REQUEST:
      return { ...state };
    case SET_GENRES_MOVIES:
      return { ...state, genresMovies: action.payload.genres };
    case SET_GENRES_SERIALS:
      return { ...state, genresSerials: action.payload.genres };
    case SET_CONFIG:
      return { ...state, config: action.payload };
    case SET_SERIALS:
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};
