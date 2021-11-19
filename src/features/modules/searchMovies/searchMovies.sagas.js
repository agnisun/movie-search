import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_KEY, language } from "../../../services/api";
import {
  getMoviesSearchAction,
  MOVIES_SEARCH_DEFAULT,
  MOVIES_SEARCH_REQUEST,
} from "./searchMovies.actions";

const URL = "https://api.themoviedb.org/3/discover/movie?api_key=";

function fetchMovieSearch(sort, release, genres, certification, page) {
  return fetch(
    `${URL}${API_KEY}${language}&sort_by=${sort}&page=${page}${
      release[0]
        ? "&release_date.gte=" + release[0] + "&release_date.lte=" + release[1]
        : "&release_date.lte=" + release[1]
    }${genres[0] ? "&with_genres=" + genres.join(",") : ""}${
      certification[0]
        ? "&certification_country=US&certification.gte=" +
          certification[0].value
        : ""
    }`
  ).then((response) => response.json());
}

function fetchDefaultSearch(page) {
  return fetch(
    `${URL}${API_KEY}${language}&sort_by=popularity.desc&page=${page}`
  ).then((response) => response.json());
}

function* getMoviesSearch({ sort, release, genres, certification, page }) {
  const movies = yield call(
    fetchMovieSearch,
    sort,
    release,
    genres,
    certification,
    page
  );
  console.log(movies);

  yield put(getMoviesSearchAction(movies));
}

function* getDefaultSearch({ page }) {
  const movies = yield call(fetchDefaultSearch, page);

  yield put(getMoviesSearchAction(movies));
}

export function* watcherSearchMovies() {
  yield all([
    takeLatest(MOVIES_SEARCH_REQUEST, getMoviesSearch),
    takeLatest(MOVIES_SEARCH_DEFAULT, getDefaultSearch),
  ]);
}
