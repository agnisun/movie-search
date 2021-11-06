export const SET_SORT = "SET_SORT";
export const GENRES_FILTER = "GENRES_FILTER";
export const AGE_FILTER = "AGE_FILTER";

export const setSortAction = (payload) => ({ type: SET_SORT, payload });
export const genresFilterAction = (payload) => ({
  type: GENRES_FILTER,
  payload,
});
export const ageFilterAction = (payload) => ({ type: AGE_FILTER, payload });
