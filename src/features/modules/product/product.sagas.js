import {all, call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {API_KEY} from "../data/data.sagas";
import {
  getCreditsAction,
  getProductAction,
  getVideosAction,
  PRODUCT_REQUEST,
  setCreditsAction,
  setProductAction,
} from "./product.actions";

function fetchProduct (id, product) {
  return fetch(
    `https://api.themoviedb.org/3/${product}/${id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function fetchCredits (id, product) {
  if (product === "movie") {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
  } else {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${API_KEY}&language=en-US`
    ).then((response) => response.json());
  }

}

function fetchVideos (id, product) {
  return fetch(
    `https://api.themoviedb.org/3/${product}/${id}/videos?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function* getProduct({ id, product }) {
  const currentProduct = yield call(fetchProduct, id, product)
  
  yield put(getProductAction(currentProduct));
}

function* getCredits({ id, product }) {
    const credits = yield call(fetchCredits, id, product);

    yield put(getCreditsAction(credits));
}

function* getVideos({ id, product }) {
  const videos = yield call(fetchVideos, id, product);

  yield put(getVideosAction(videos));
}

export function* watcherProduct() {
  yield all([
    takeLatest(PRODUCT_REQUEST, getProduct),
    takeLatest(PRODUCT_REQUEST, getCredits),
    takeLatest(PRODUCT_REQUEST, getVideos)
  ])
}
