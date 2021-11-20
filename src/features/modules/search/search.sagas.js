import { all, call, put, takeLatest } from "redux-saga/effects";
import { API_KEY, language } from "../../../services/api";
import {
  getProductsAction,
  SEARCH_DEFAULT,
  SEARCH_REQUEST,
} from "./search.actions";

const URL = "https://api.themoviedb.org/3/discover/";

function fetchSearch(product, sort, release, genres, certification, page) {
  if (product === "movie") {
    return fetch(
      `${URL}movie?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0]
          ? "&release_date.gte=" +
            release[0] +
            "&release_date.lte=" +
            release[1]
          : "&release_date.lte=" + release[1]
      }${genres[0] ? "&with_genres=" + genres.join(",") : ""}${
        certification[0]
          ? "&certification_country=US&certification.gte=" +
            certification[0].value
          : ""
      }`
    ).then((response) => response.json());
  } else {
    return fetch(
      `${URL}tv?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0]
          ? "&first_air_date.gte=" +
            release[0] +
            "&first_air_date.lte=" +
            release[1]
          : "&first_air_date.lte=" + release[1]
      }${genres[0] ? "&with_genres=" + genres.join(",") : ""}${
        certification[0]
          ? "&certification_country=US&certification.gte=" +
            certification[0].value
          : ""
      }`
    ).then((response) => response.json());
  }
}

function fetchDefaultSearch(product, page) {
  return fetch(
    `${URL}${product}?api_key=${API_KEY}${language}&sort_by=popularity.desc&page=${page}`
  ).then((response) => response.json());
}

function* getProducts({ product, sort, release, genres, certification, page }) {
  const products = yield call(
    fetchSearch,
    product,
    sort,
    release,
    genres,
    certification,
    page
  );

  yield put(getProductsAction(products));
}

function* getDefaultSearch({ product, page }) {
  const products = yield call(fetchDefaultSearch, product, page);

  yield put(getProductsAction(products));
}

export function* watcherSearch() {
  yield all([
    takeLatest(SEARCH_REQUEST, getProducts),
    takeLatest(SEARCH_DEFAULT, getDefaultSearch),
  ]);
}
