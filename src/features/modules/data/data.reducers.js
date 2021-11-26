import {
  DATA_REQUEST,
  GET_CERTIFICATION_MOVIES,
  GET_CERTIFICATION_SERIALS,
  GET_CONFIG,
  GET_GENRES_MOVIES,
  GET_GENRES_SERIALS,
} from "./data.actions";

const initialState = {
  genresMovies: [],
  genresSerials: [],
  config: null,
  certificationMovies: null,
  certificationSerials: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state };
    case GET_GENRES_MOVIES:
      return { ...state, genresMovies: action.payload.genres };
    case GET_GENRES_SERIALS:
      return { ...state, genresSerials: action.payload.genres };
    case GET_CONFIG:
      return { ...state, config: action.payload };
    case GET_CERTIFICATION_MOVIES:
      return { ...state, certificationMovies: action.payload.certifications };
    case GET_CERTIFICATION_SERIALS:
      return { ...state, certificationSerials: action.payload.certifications };

    default:
      return state;
  }
};
