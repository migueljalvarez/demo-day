import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRouter = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth);
  return (
    
    <Route
      {...rest}
      component={(props) =>
        user.isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

PublicRouter.propTypes = {
  component: PropTypes.func.isRequired,
};
