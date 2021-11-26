import { combineReducers } from "redux";
import { dataReducer } from "./data/data.reducers";
import { productReducer } from "./product/product.reducers";
import { searchReducer } from "./search/search.reducers";
import { favouriteReducer } from "./favourite/favourite.reducers";
import { singleSearchReducer } from "./singleSearch/singleSearch.reducers";
import { nowPlayingReducer } from "./nowPlaying/nowPlaying.reducers";

export const rootReducer = combineReducers({
  data: dataReducer,
  nowPlaying: nowPlayingReducer,
  product: productReducer,
  search: searchReducer,
  singleSearch: singleSearchReducer,
  favourite: favouriteReducer,
});
