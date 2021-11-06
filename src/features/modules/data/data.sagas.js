import { call, put, takeLatest } from "redux-saga/effects";
import {
  DATA_REQUEST,
  setConfigAction,
  setDataAction,
  setGenresAction,
  setSerialsAction,
} from "./data.actions";

const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";

function* setData() {
  const fetchData = () =>
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    );
  const data = yield call(fetchData);
  const json = yield call(() => data.json());

  yield put(setDataAction(json));
}

function* setGenre() {
  const fetchGenres = () =>
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
  const genres = yield call(fetchGenres);
  const json = yield call(() => genres.json());

  yield put(setGenresAction(json));
}

function* setConfig() {
  const fetchConfig = () =>
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
  const config = yield call(fetchConfig);
  const json = yield call(() => config.json());

  yield put(setConfigAction(json));
}

function* setSerials() {
  const fetchSerials = () =>
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
    );
  const serials = yield call(fetchSerials);
  const json = yield call(() => serials.json());

  yield put(setSerialsAction(json));
}

export function* dataWatcher() {
  yield takeLatest(DATA_REQUEST, setData);
  yield takeLatest(DATA_REQUEST, setGenre);
  yield takeLatest(DATA_REQUEST, setConfig);
  yield takeLatest(DATA_REQUEST, setSerials);
}
