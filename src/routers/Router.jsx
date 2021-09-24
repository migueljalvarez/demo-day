import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import jwtDecode from "jwt-decode";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "../views/Home";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Register from "../views/Register";
import AddServices from "../views/AddServices";
import Services from "../views/Services";
import Service from "../views/Service";
import TutorialOffer from "../views/TutorialOffer";
import TutorialHire from "../views/TutorialHire";
import ContactUs from "../views/ContactUs";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const user = jwtDecode(token);
      if (user) {
        dispatch(login(user));
      }
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <PublicRouter exact path="/login" component={Login} />
          <PublicRouter exact path="/signup" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/service/:id" component={Service} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/tutorialOffer" component={TutorialOffer} />
          <Route exact path="/tutorialHire" component={TutorialHire} />
          <PrivateRouter exact path="/services/add" component={AddServices} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
