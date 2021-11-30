import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {
  getCreditsAction,
  getRaitingAction,
  getVideosAction,
  PRODUCT_REQUEST,
  productSuccessAction,
} from './product.actions';

function fetchProduct(id, product) {
  return fetch(`${BASE_URL}${product}/${id}?api_key=${API_KEY}${language}`).then(
    (response) => response.json(),
  );
}

function fetchCredits(id, product) {
  if (product === 'movie') {
    return fetch(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${BASE_URL}tv/${id}/aggregate_credits?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  }
}

function fetchVideos(id, product) {
  return fetch(
    `${BASE_URL}${product}/${id}/videos?api_key=${API_KEY}${language}`,
  ).then((response) => response.json());
}

function fetchRaiting(id, product) {
  if (product === 'movie') {
    return fetch(
      `${BASE_URL}movie/${id}/release_dates?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${BASE_URL}tv/${id}/content_ratings?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  }
}

function* getProduct({id, product}) {
  const currentProduct = yield call(fetchProduct, id, product);
  
  yield put(productSuccessAction(currentProduct));
}

function* getCredits({id, product}) {
  const credits = yield call(fetchCredits, id, product);

  yield put(getCreditsAction(credits));
}

function* getVideos({id, product}) {
  const videos = yield call(fetchVideos, id, product);

  yield put(getVideosAction(videos));
}

function* getRaiting({id, product}) {
  const raiting = yield call(fetchRaiting, id, product);

  yield put(getRaitingAction(raiting));
}

export function* watcherProduct() {
  yield all([
    takeLatest(PRODUCT_REQUEST, getProduct),
    takeLatest(PRODUCT_REQUEST, getCredits),
    takeLatest(PRODUCT_REQUEST, getVideos),
    takeLatest(PRODUCT_REQUEST, getRaiting),
  ]);
}
