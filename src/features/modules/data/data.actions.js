export const DATA_REQUEST = "DATA_REQUEST";
export const SET_DATA = "SET_DATA";
export const SET_GENRES = "SET_GENRES";
export const SET_CONFIG = "SET_CONFIG";
export const SET_SERIALS = "SET_SERIALS";

export const dataRequestAction = () => ({ type: DATA_REQUEST });
export const setDataAction = (payload) => ({ type: SET_DATA, payload });
export const setGenresAction = (payload) => ({ type: SET_GENRES, payload });
export const setConfigAction = (payload) => ({ type: SET_CONFIG, payload });
export const setSerialsAction = (payload) => ({ type: SET_SERIALS, payload });
