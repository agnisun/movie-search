import {GET_VIDEOS, PRODUCT_REQUEST, SET_CREDITS, SET_PRODUCT, SET_STATUS,} from "./product.actions";

const initialState = {
  product: {},
  credits: {},
  videos: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state };
    case SET_PRODUCT:
      const localValue = +localStorage.getItem(`${action.payload.id}`);

      return {
        ...state,
        product: {
          ...action.payload,
          isFavourite: localValue ? true : false,
        },
      };
    case SET_STATUS:
      return {
        ...state,
        product: {
          ...state.product,
          isFavourite: !state.product.isFavourite,
        },
      };
    case SET_CREDITS:
      return { ...state, credits: action.payload };
    case GET_VIDEOS:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
};
