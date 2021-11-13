export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavouriteAction = (payload) => ({
  type: ADD_FAVOURITE,
  payload,
});
export const removeFavouriteAction = (payload) => ({
  type: REMOVE_FAVOURITE,
  payload,
});
