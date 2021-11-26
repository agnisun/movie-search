import { all } from "redux-saga/effects";
import { watcherData } from "./data/data.sagas";
import { watcherProduct } from "./product/product.sagas";
import { watcherSearch } from "./search/search.sagas";
import { watcherSingleSearch } from "./singleSearch/singleSearch.sagas";
import { watcherNowPlaying } from "./nowPlaying/nowPlaying.sagas";

export function* rootWatcher() {
  yield all([
    watcherData(),
    watcherProduct(),
    watcherSearch(),
    watcherSingleSearch(),
    watcherNowPlaying(),
  ]);
}
