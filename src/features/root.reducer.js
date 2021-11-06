import { combineReducers } from "redux";
import { dataReducer } from "./modules/data/data.reducers";

export const rootReducer = combineReducers({
  data: dataReducer,
  // movie: movieReducer,
  // favourite: favouriteReducer,
});
