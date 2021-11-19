import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_KEY, language } from "../../../services/api";
import {
  DATA_REQUEST,
  getCertificationMoviesAction,
  getCertificationSerialsAction,
  getConfigAction,
  getGenresMoviesAction,
  getGenresSerialsAction,
  getMoviesAction,
  getSerialsAction,
} from "./data.actions";

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

function fetchGenres(product) {
  return fetch(
    `${URL}genre/${product}/list?api_key=${API_KEY}${language}`
  ).then((response) => response.json());
}

function fetchConfig() {
  return fetch(`${URL}configuration?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
}

function fetchCertification(product) {
  return fetch(`${URL}certification/${product}/list?api_key=${API_KEY}`).then(
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

function* getMoviesGenre() {
  const genres = yield call(fetchGenres, "movie");

  yield put(getGenresMoviesAction(genres));
}

function* getSerialsGenre() {
  const genres = yield call(fetchGenres, "tv");

  yield put(getGenresSerialsAction(genres));
}

function* getConfig() {
  const config = yield call(fetchConfig);

  yield put(getConfigAction(config));
}

function* getCertificationMovies() {
  const certification = yield call(fetchCertification, "movie");

  yield put(getCertificationMoviesAction(certification));
}

function* getCertificationSerials() {
  const certification = yield call(fetchCertification, "tv");

  yield put(getCertificationSerialsAction(certification));
}

export function* watcherData() {
  yield all([
    takeLatest(DATA_REQUEST, getMovies),
    takeLatest(DATA_REQUEST, getSerials),
    takeLatest(DATA_REQUEST, getMoviesGenre),
    takeLatest(DATA_REQUEST, getSerialsGenre),
    takeLatest(DATA_REQUEST, getConfig),
    takeLatest(DATA_REQUEST, getCertificationMovies),
    takeLatest(DATA_REQUEST, getCertificationSerials),
  ]);
}
