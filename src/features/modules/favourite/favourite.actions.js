export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavouriteAction = (payload) => ({
  type: ADD_TO_FAVOURITE,
  payload,
});
export const removeFromFavouriteAction = (payload) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload,
});
