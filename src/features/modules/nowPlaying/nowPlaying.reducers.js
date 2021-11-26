import {
  GET_MOVIES,
  GET_SERIALS,
  NOW_PLAYING_REQUEST,
} from "./nowPlaying.actions";

const initialState = {
  movies: {},
  serials: {},
};

export const nowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOW_PLAYING_REQUEST:
      return { ...state };
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_SERIALS:
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};
