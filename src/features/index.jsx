import { combineReducers, createStore } from "redux";
import { dataReducer } from "./dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { movieReducer } from "./movieReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  movie: movieReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
