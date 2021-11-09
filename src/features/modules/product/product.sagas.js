import { call, put, takeLatest } from "redux-saga/effects";
import { API_KEY } from "../data/data.sagas";
import {
  getVideosAction,
  PRODUCT_REQUEST,
  setCreditsAction,
  setProductAction,
} from "./product.actions";

function* setProduct({ id, product }) {
  const fetchData = () =>
    fetch(
      `https://api.themoviedb.org/3/${product}/${id}?api_key=${API_KEY}&language=en-US`
    );
  const data = yield call(fetchData);
  const json = yield call(() => data.json());

  yield put(setProductAction(json));
}

function* setCredits({ id, product }) {
  if (product === "movie") {
    const fetchCredits = () =>
      fetch(
        `https://api.themoviedb.org/3/${product}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
    const credits = yield call(fetchCredits);
    const json = yield call(() => credits.json());

    yield put(setCreditsAction(json));
  } else if (product === "tv") {
    const fetchCredits = () =>
      fetch(
        `https://api.themoviedb.org/3/${product}/${id}/aggregate_credits?api_key=${API_KEY}&language=en-US`
      );
    const credits = yield call(fetchCredits);
    const json = yield call(() => credits.json());

    yield put(setCreditsAction(json));
  }
}

function* getVideos({ id, product }) {
  const fetchVideos = () =>
    fetch(
      `https://api.themoviedb.org/3/${product}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
  const videos = yield call(fetchVideos);
  const json = yield call(() => videos.json());

  yield put(getVideosAction(json));
}

export function* productWatcher() {
  yield takeLatest(PRODUCT_REQUEST, setProduct);
  yield takeLatest(PRODUCT_REQUEST, getVideos);
  yield takeLatest(PRODUCT_REQUEST, setCredits);
}
