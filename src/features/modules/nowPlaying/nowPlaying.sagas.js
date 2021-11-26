import { API_KEY, language } from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getMoviesAction,
  getSerialsAction,
  NOW_PLAYING_REQUEST,
} from "./nowPlaying.actions";

const URL = "https://api.themoviedb.org/3/";

function fetchNewMovies() {
  return fetch(
    `${URL}movie/now_playing?api_key=${API_KEY}${language}&page=1`
  ).then((response) => response.json());
}

function fetchSerials() {
  return fetch(`${URL}tv/popular?api_key=${API_KEY}${language}&page=1`).then(
    (response) => response.json()
  );
}

function* getMovies() {
  const movies = yield call(fetchNewMovies);

  yield put(getMoviesAction(movies));
}

function* getSerials() {
  const serials = yield call(fetchSerials);

  yield put(getSerialsAction(serials));
}

export function* watcherNowPlaying() {
  yield all([
    takeLatest(NOW_PLAYING_REQUEST, getMovies),
    takeLatest(NOW_PLAYING_REQUEST, getSerials),
  ]);
}
