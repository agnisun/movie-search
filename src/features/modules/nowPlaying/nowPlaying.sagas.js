import {API_KEY, BASE_URL, language} from '../../../services/api';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {NOW_PLAYING_REQUEST, nowPlayingMoviesAction, nowPlayingSerialsAction,} from './nowPlaying.actions';

function fetchNewMovies() {
  return fetch(
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}${language}&page=1`,
  ).then((response) => response.json());
}

function fetchSerials() {
  return fetch(`${BASE_URL}tv/popular?api_key=${API_KEY}${language}&page=1`).then(
    (response) => response.json(),
  );
}

function* getNowPlaying() {
  const movies = yield call(fetchNewMovies);
  const serials = yield call(fetchSerials);
    
  yield all([
    put(nowPlayingMoviesAction(movies)),
    put(nowPlayingSerialsAction(serials))
  ]);
}

export function* watcherNowPlaying() {
  yield all([
    takeLatest(NOW_PLAYING_REQUEST, getNowPlaying),
  ]);
}
