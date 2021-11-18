import {call, put, takeLatest} from "redux-saga/effects";
import {getMoviesSearchAction, MOVIES_SEARCH_REQUEST} from "./searchMovies.actions";

export const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";

function fetchMovieSearch(sort, release) {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&page=1&${release[0] ? "release_date.gte=" + release[0] + "&release_date.lte=" + release[1] : "release_date.lte=" + release[1]}`)
    .then((response) => response.json())
}

function* getMoviesSearch({sort, release}) {
  const movies = yield call(fetchMovieSearch, sort, release)
  
  yield put(getMoviesSearchAction(movies))
}

export function* watcherSearchMovies() {
  yield takeLatest(MOVIES_SEARCH_REQUEST, getMoviesSearch)
}