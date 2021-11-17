import {
  GET_CREDITS,
  GET_PRODUCT,
  GET_VIDEOS,
  PRODUCT_REQUEST,
  SET_CREDITS,
  SET_PRODUCT,
  SET_STATUS,
} from "./product.actions";

const initialState = {
  product: {},
  credits: {},
  videos: {},
  isLoading: false,
  error: false
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT:
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
    case GET_CREDITS:
      return { ...state, credits: action.payload };
    case GET_VIDEOS:
      return { ...state, videos: action.payload };

    default:
      return state;
  }
};
