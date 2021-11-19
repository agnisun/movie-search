import {all, call, put, takeLatest} from "redux-saga/effects";
import {getMoviesSearchAction, MOVIES_SEARCH_DEFAULT, MOVIES_SEARCH_REQUEST,} from "./searchMovies.actions";

export const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";

function fetchMovieSearch(sort, release, genres, certification) {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&page=1${
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

function fetchDefaultSearch() {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
  ).then((response) => response.json());
}

function* getMoviesSearch({ sort, release, genres, certification }) {
  const movies = yield call(
    fetchMovieSearch,
    sort,
    release,
    genres,
    certification
  );

  yield put(getMoviesSearchAction(movies));
}

function* getDefaultSearch() {
  const movies = yield call(fetchDefaultSearch);

  yield put(getMoviesSearchAction(movies));
}

export function* watcherSearchMovies() {
  yield all([
    takeLatest(MOVIES_SEARCH_REQUEST, getMoviesSearch),
    takeLatest(MOVIES_SEARCH_DEFAULT, getDefaultSearch),
  ]);
}
