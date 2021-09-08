import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";


import { Provider } from "react-redux";
import { store } from "./redux/store";
import config from "./config/config";

// esto es exprerimental, no es permanente pero es util
const { app } = config();
const projectTitle = document.getElementById("title")
projectTitle.innerHTML = app.projectName;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
