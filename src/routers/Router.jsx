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

import Home from "../views/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        {Footer}
      </Router>
    </div>
  );
};

export default Routers;
