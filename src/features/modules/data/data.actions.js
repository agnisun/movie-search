export const GET_MOVIES = "GET_MOVIES";
export const DATA_REQUEST = "DATA_REQUEST";
export const GET_GENRES_MOVIES = "GET_GENRES_MOVIES";
export const GET_GENRES_SERIALS = "GET_GENRES_SERIALS";
export const GET_CONFIG = "GET_CONFIG";
export const GET_SERIALS = "GET_SERIALS";

export const dataRequestAction = () => ({
  type: DATA_REQUEST,
});
export const getMoviesAction = (payload) => ({
  type: GET_MOVIES,
  payload,
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
export const getSerialsAction = (payload) => ({ type: GET_SERIALS, payload });
