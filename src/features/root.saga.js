import { all } from "redux-saga/effects";
import { dataWatcher } from "./modules/data/data.sagas";
import { productWatcher } from "./modules/product/product.sagas";

export function* rootWatcher() {
  yield all([dataWatcher(), productWatcher()]);
}
