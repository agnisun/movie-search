import { all } from "redux-saga/effects";
import { watcherData } from "./data/data.sagas";
import { watcherProduct } from "./product/product.sagas";
import { watcherSearchMovies } from "./searchMovies/searchMovies.sagas";

export function* rootWatcher() {
  yield all([watcherData(), watcherProduct(), watcherSearchMovies()]);
}
