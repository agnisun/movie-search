import { combineReducers, createStore } from "redux";
import { dataReducer } from "./dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieReducer } from "./movieReducer";
import { favouriteReducer } from "./favouriteReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  movie: movieReducer,
  favourite: favouriteReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
