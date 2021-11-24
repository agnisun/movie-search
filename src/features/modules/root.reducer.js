import { combineReducers } from "redux";
import { dataReducer } from "./data/data.reducers";
import { productReducer } from "./product/product.reducers";
import { searchReducer } from "./search/search.reducers";
import { favouriteReducer } from "./favourite/favourite.reducers";

export const rootReducer = combineReducers({
  data: dataReducer,
  product: productReducer,
  search: searchReducer,
  favourite: favouriteReducer,
});
