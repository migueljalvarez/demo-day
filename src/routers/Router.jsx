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
import NavBar from "../components/NavBar";
import Services from "../components/Services";

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
        <NavBar />
        <Switch>
          <Route exact path="/" component={Example} />
          <Route exact path="/services" component={Services} />
          <Redirect to="/" />
        </Switch>
        {/* Aqui va el Footer */}
      </Router>
    </div>
  );
};

export default Routers;
