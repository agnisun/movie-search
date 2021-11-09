import { combineReducers } from "redux";
import { dataReducer } from "./modules/data/data.reducers";
import { productReducer } from "./modules/product/product.reducers";

export const rootReducer = combineReducers({
  data: dataReducer,
  product: productReducer,
  // favourite: favouriteReducer,
});
