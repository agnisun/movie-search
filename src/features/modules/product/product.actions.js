export const PRODUCT_REQUEST = "PRODUCT_REQUEST";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CREDITS = "GET_CREDITS";
export const GET_VIDEOS = "GET_VIDEOS";
export const GET_RAITING = "GET_RAITING";

export const productRequestAction = (id, product) => ({
  type: PRODUCT_REQUEST,
  id,
  product,
});
export const getProductAction = (payload) => ({ type: GET_PRODUCT, payload });
export const getRaitingAction = (payload) => ({ type: GET_RAITING, payload });
export const getCreditsAction = (payload) => ({ type: GET_CREDITS, payload });
export const getVideosAction = (payload) => ({ type: GET_VIDEOS, payload });
