import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "./reducers/authReducer";
import thunk from "redux-thunk";
import { userReducer, usersReducer } from "./reducers/userReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
