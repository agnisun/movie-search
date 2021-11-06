import { all } from "redux-saga/effects";
import { dataWatcher } from "./modules/data/data.sagas";

export function* rootWatcher() {
  yield all([dataWatcher()]);
}
