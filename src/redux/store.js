import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { MyReducer1 } from "./reducer1";
import { MyReducer2 } from "./reducer2";

// export const store = createStore(MyReducer1);
const reducers = combineReducers({
  reducer1: MyReducer1,
  reducer2: MyReducer2,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
