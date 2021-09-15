import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouter = ({ component: Component, ...rest }) => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    return (
    
        <Route
          {...rest}
          component={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

PrivateRouter.propTypes = {
    component: PropTypes.func.isRequired,
};
