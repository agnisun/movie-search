export const NOW_PLAYING_REQUEST = 'NOW_PLAYING_REQUEST';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_SERIALS = 'GET_SERIALS';

export const nowPlayingRequestAction = () => ({
  type: NOW_PLAYING_REQUEST,
});
export const getMoviesAction = (payload) => ({
  type: GET_MOVIES,
  payload,
});
export const getSerialsAction = (payload) => ({type: GET_SERIALS, payload});
