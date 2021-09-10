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
import Services from "../components/Services";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Register from "../views/Register";
import AddServices from "../components/AddServices";

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
          <Route exact path="/services" component={Services} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/add" component={AddServices} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
