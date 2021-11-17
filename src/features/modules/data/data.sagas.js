import {all, call, put, takeLatest} from "redux-saga/effects";
import {
  DATA_REQUEST,
  getConfigAction,
  getGenresMoviesAction,
  getGenresSerialsAction,
  getMoviesAction,
  getSerialsAction,
} from "./data.actions";

export const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";

function fetchProducts(product) {
  return fetch(
    `https://api.themoviedb.org/3/${product}/popular?api_key=${API_KEY}&language=en-US&page=${1}`
  ).then((response) => response.json());
}

function fetchGenres(product) {
  return fetch(
    `https://api.themoviedb.org/3/genre/${product}/list?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchConfig() {
  return fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
  ).then((response) => response.json());
}

function* getMovies() {
  const movies = yield call(fetchProducts, "movie");

  yield put(getMoviesAction(movies));
}

function* getSerials() {
  const serials = yield call(fetchProducts, "tv");

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

export function* watcherData() {
  yield all([
    takeLatest(DATA_REQUEST, getMovies),
    takeLatest(DATA_REQUEST, getSerials),
    takeLatest(DATA_REQUEST, getMoviesGenre),
    takeLatest(DATA_REQUEST, getSerialsGenre),
    takeLatest(DATA_REQUEST, getConfig),
  ]);
}
