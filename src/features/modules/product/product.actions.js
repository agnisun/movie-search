export const PRODUCT_REQUEST = "PRODUCT_REQUEST";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_CREDITS = "SET_CREDITS";
export const GET_VIDEOS = "GET_VIDEOS";

export const productRequestAction = (id, product) => ({
  type: PRODUCT_REQUEST,
  id,
  product,
});
export const setProductAction = (payload) => ({ type: SET_PRODUCT, payload });
export const setCreditsAction = (payload) => ({ type: SET_CREDITS, payload });
export const getVideosAction = (payload) => ({ type: GET_VIDEOS, payload });
