import {
  DATA_REQUEST,
  GET_CERTIFICATION_MOVIES,
  GET_CERTIFICATION_SERIALS,
  GET_CONFIG,
  GET_GENRES_MOVIES,
  GET_GENRES_SERIALS,
  GET_MOVIES,
  GET_SERIALS,
} from "./data.actions";

const initialState = {
  movies: {},
  genresMovies: [],
  genresSerials: [],
  config: null,
  certificationMovies: null,
  certificationSerials: null,
  serials: {},
  loading: false,
  error: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state };
    case GET_MOVIES:
      return { ...state, movies: action.payload };
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
    case GET_SERIALS:
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};
