import {NOW_PLAYING_MOVIES_SUCCESS, NOW_PLAYING_REQUEST, NOW_PLAYING_SERIALS_SUCCESS,} from './nowPlaying.actions';

const initialState = {
  movies: {},
  serials: {},
  loading: false
};

export const nowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
  case NOW_PLAYING_REQUEST:
    return {...state, loading: true};
  case NOW_PLAYING_MOVIES_SUCCESS:
    return {...state, movies: action.payload, loading: false};
  case NOW_PLAYING_SERIALS_SUCCESS:
    return {...state, serials: action.payload, loading: false};

  default:
    return state;
  }
};
