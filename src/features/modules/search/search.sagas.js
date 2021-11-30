import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {SEARCH_DEFAULT_REQUEST, SEARCH_REQUEST, searchDefaultAction, searchSuccessAction,} from './search.actions';

const URL = `${BASE_URL}discover/`;

function fetchSearch(product, page, sort, release, genres, certification) {
  if (product === 'movie') {
    return fetch(
      `${URL}movie?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0] ?
          '&release_date.gte=' +
            release[0] +
            '&release_date.lte=' +
            release[1] :
          '&release_date.lte=' + release[1]
      }${genres[0] ? '&with_genres=' + genres.join(',') : ''}${
        certification[0] ?
          '&certification_country=US&certification.gte=' +
            certification[0].value :
          ''
      }`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${URL}tv?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0] ?
          '&first_air_date.gte=' +
            release[0] +
            '&first_air_date.lte=' +
            release[1] :
          '&first_air_date.lte=' + release[1]
      }${genres[0] ? '&with_genres=' + genres.join(',') : ''}${
        certification[0] ?
          '&certification_country=US&certification.gte=' +
            certification[0].value :
          ''
      }`,
    ).then((response) => response.json());
  }
}

function fetchDefaultSearch(product, page) {
  return fetch(
    `${URL}${product}?api_key=${API_KEY}${language}&sort_by=popularity.desc&page=${page}`,
  ).then((response) => response.json());
}

function* getProducts({product, page, sort, release, genres, certification}) {
  const products = yield call(
    fetchSearch,
    product,
    page,
    sort,
    release,
    genres,
    certification,
  );
  
  yield put(searchSuccessAction(products));
}

function* getDefaultSearch({product, page}) {
  const products = yield call(fetchDefaultSearch, product, page);

  yield put(searchDefaultAction(products));
}

export function* watcherSearch() {
  yield all([
    takeLatest(SEARCH_REQUEST, getProducts),
    takeLatest(SEARCH_DEFAULT_REQUEST, getDefaultSearch),
  ]);
}
