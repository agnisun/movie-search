import {AGE_FILTER, GENRES_FILTER, SET_SORT} from "./search.actions";

const initialState = {
  sort: "PopularityDescending",
  genres: [],
  age: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.payload };
    case GENRES_FILTER:
      return { ...state, genres: [] };
    case AGE_FILTER:
      return { ...state, age: [] };

    default:
      return state;
  }
};
