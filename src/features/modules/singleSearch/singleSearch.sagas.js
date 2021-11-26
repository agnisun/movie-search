import { API_KEY, language } from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getSearchMoviesAction,
  getSearchSerialsAction,
  SINGLE_SEARCH_REQUEST,
} from "./singleSearch.actions";

const URL = "https://api.themoviedb.org/3/search/";

function fetchSingleSearchMovies(query, page) {
  return fetch(
    `${URL}movie?api_key=${API_KEY}${language}&query=${query}&page=${page}`
  ).then((response) => response.json());
}

function fetchSingleSearchSerials(query, page) {
  return fetch(
    `${URL}tv?api_key=${API_KEY}${language}&query=${query}&page=${page}`
  ).then((response) => response.json());
}

function* singleSearchMovies({ searchQuery, page }) {
  const search = yield call(fetchSingleSearchMovies, searchQuery, page);

  yield put(getSearchMoviesAction(search));
}

function* singleSearchSerials({ searchQuery, page }) {
  const search = yield call(fetchSingleSearchSerials, searchQuery, page);

  yield put(getSearchSerialsAction(search));
}

export function* watcherSingleSearch() {
  yield all([
    takeLatest(SINGLE_SEARCH_REQUEST, singleSearchMovies),
    takeLatest(SINGLE_SEARCH_REQUEST, singleSearchSerials),
  ]);
}
