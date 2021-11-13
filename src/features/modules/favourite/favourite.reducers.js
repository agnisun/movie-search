import {ADD_FAVOURITE, REMOVE_FAVOURITE} from "./favourite.actions";

const initialState = {
  favouriteList: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          (el) => el !== action.payload
        ),
      };

    default:
      return state;
  }
};
