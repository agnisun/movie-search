export const NOW_PLAYING_REQUEST = 'NOW_PLAYING_REQUEST';
export const NOW_PLAYING_MOVIES_SUCCESS = 'NOW_PLAYING_MOVIES_SUCCESS';
export const NOW_PLAYING_SERIALS_SUCCESS = 'NOW_PLAYING_SERIALS_SUCCESS';

export const nowPlayingRequestAction = () => ({
  type: NOW_PLAYING_REQUEST,
});
export const nowPlayingMoviesAction = (payload) => ({
  type: NOW_PLAYING_MOVIES_SUCCESS,
  payload,
});
export const nowPlayingSerialsAction = (payload) => ({type: NOW_PLAYING_SERIALS_SUCCESS, payload});
