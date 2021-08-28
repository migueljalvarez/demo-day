import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../config/firebase/firebaseConfig";
import { login } from "../redux/actions/authActions";

import Example from "../views/Example";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        {/* Aqui va el NavBar */}
        <Switch>
          <Route exact path="/" component={Example} />
          <Redirect to="/" />
        </Switch>
        {/* Aqui va el Footer */}
      </Router>
    </div>
  );
};

export default Routers;
