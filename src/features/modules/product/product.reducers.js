import {
  CLEAR_PRODUCT,
  GET_CREDITS,
  GET_RAITING,
  GET_VIDEOS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from './product.actions';

const initialState = {
  product: {},
  credits: {},
  videos: {},
  content_raiting: '',
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
  case PRODUCT_REQUEST:
    return {...state, loading: true};
  case PRODUCT_SUCCESS:
    return {
      ...state,
      product: {
        ...action.payload,
      }, loading: false,
    };
  case CLEAR_PRODUCT:
    return initialState;
  case GET_CREDITS:
    return {...state, credits: action.payload};
  case GET_VIDEOS:
    return {...state, videos: action.payload};
  case GET_RAITING:
    return {...state, content_raiting: action.payload};

  default:
    return state;
  }
};
