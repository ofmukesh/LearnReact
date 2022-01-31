import { createStore, applyMiddleware } from "redux";
import root_reducer from "./root_reducer";
import thunk from "redux-thunk";

const configureStore = (initialState = {}) => {
  return createStore(
    root_reducer,
    initialState,
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export const store = configureStore();
