import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
