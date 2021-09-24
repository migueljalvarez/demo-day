import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "./reducers/authReducer";
import thunk from "redux-thunk";
import { userReducer, usersReducer } from "./reducers/userReducer";
import { modalReducer } from "./reducers/uiReducer";
import { searchReducer, serviceReducer, servicesReducer } from "./reducers/serviceReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  modal: modalReducer,
  service: serviceReducer,
  services: servicesReducer,
  search: searchReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
