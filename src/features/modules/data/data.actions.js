export const DATA_REQUEST = "DATA_REQUEST";
export const SET_DATA = "SET_DATA";
export const SET_GENRES_MOVIES = "SET_GENRES_MOVIES";
export const SET_GENRES_SERIALS = "SET_GENRES_SERIALS";
export const SET_CONFIG = "SET_CONFIG";
export const SET_SERIALS = "SET_SERIALS";

export const dataRequestAction = () => ({ type: DATA_REQUEST });
export const setDataAction = (payload) => ({ type: SET_DATA, payload });
export const setGenresMoviesAction = (payload) => ({
  type: SET_GENRES_MOVIES,
  payload,
});
export const setGenresSerialsAction = (payload) => ({
  type: SET_GENRES_SERIALS,
  payload,
});
export const setConfigAction = (payload) => ({ type: SET_CONFIG, payload });
export const setSerialsAction = (payload) => ({ type: SET_SERIALS, payload });
