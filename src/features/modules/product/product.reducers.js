import {
  GET_VIDEOS,
  PRODUCT_REQUEST,
  SET_CREDITS,
  SET_PRODUCT,
} from "./product.actions";

const initialState = {
  product: [],
  credits: [],
  videos: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state };
    case SET_PRODUCT:
      return { ...state, product: action.payload };
    case SET_CREDITS:
      return { ...state, credits: action.payload };
    case GET_VIDEOS:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
};
