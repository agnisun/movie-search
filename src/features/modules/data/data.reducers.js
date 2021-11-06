import {
  DATA_REQUEST,
  SET_CONFIG,
  SET_DATA,
  SET_GENRES,
  SET_SERIALS,
} from "./data.actions";

const initialState = {
  data: [],
  genres: [],
  config: null,
  serials: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case DATA_REQUEST:
      return { ...state };
    case SET_GENRES:
      return { ...state, genres: action.payload.genres };
    case SET_CONFIG:
      return { ...state, config: action.payload };
    case SET_SERIALS:
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};
