export const DATA_REQUEST = "DATA_REQUEST";
export const GET_GENRES_MOVIES = "GET_GENRES_MOVIES";
export const GET_GENRES_SERIALS = "GET_GENRES_SERIALS";
export const GET_CONFIG = "GET_CONFIG";
export const GET_CERTIFICATION_MOVIES = "GET_CERTIFICATION_MOVIES";
export const GET_CERTIFICATION_SERIALS = "GET_CERTIFICATION_SERIALS";

export const dataRequestAction = () => ({
  type: DATA_REQUEST,
});
export const getGenresMoviesAction = (payload) => ({
  type: GET_GENRES_MOVIES,
  payload,
});
export const getGenresSerialsAction = (payload) => ({
  type: GET_GENRES_SERIALS,
  payload,
});
export const getConfigAction = (payload) => ({ type: GET_CONFIG, payload });
export const getCertificationMoviesAction = (payload) => ({
  type: GET_CERTIFICATION_MOVIES,
  payload,
});
export const getCertificationSerialsAction = (payload) => ({
  type: GET_CERTIFICATION_SERIALS,
  payload,
});
