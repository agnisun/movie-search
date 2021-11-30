import {API_KEY, BASE_URL, language} from '../../../services/api';
import {all, call, debounce, put} from 'redux-saga/effects';
import {
  SINGLE_SEARCH_REQUEST,
  singleSearchSuccessMoviesAction,
  singleSearchSuccessSerialsAction,
} from './singleSearch.actions';

const URL = `${BASE_URL}search/`;

function fetchSingleSearchMovies(query, page) {
  return fetch(
    `${URL}movie?api_key=${API_KEY}${language}&query=${query}&page=${page}`,
  ).then((response) => response.json());
}

function fetchSingleSearchSerials(query, page) {
  return fetch(
    `${URL}tv?api_key=${API_KEY}${language}&query=${query}&page=${page}`,
  ).then((response) => response.json());
}

function* singleSearchMovies({searchQuery, page}) {
  const search = yield call(fetchSingleSearchMovies, searchQuery, page);
  
  yield put(singleSearchSuccessMoviesAction(search));
}

function* singleSearchSerials({searchQuery, page}) {
  const search = yield call(fetchSingleSearchSerials, searchQuery, page);
  
  yield put(singleSearchSuccessSerialsAction(search));
}

export function* watcherSingleSearch() {
  yield all([
    debounce(300,SINGLE_SEARCH_REQUEST, singleSearchMovies),
    debounce(300,SINGLE_SEARCH_REQUEST, singleSearchSerials),
  ]);
}
