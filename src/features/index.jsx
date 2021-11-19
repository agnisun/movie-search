import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./modules/root.reducer";
import { rootWatcher } from "./modules/root.saga";

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);

export const store = createStore(
  rootReducer,
  composeWithDevTools(middlewareEnhancer)
);

sagaMiddleware.run(rootWatcher);
