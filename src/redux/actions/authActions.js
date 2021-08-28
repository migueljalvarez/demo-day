import { types } from "../types/types";
import { firebase, google, facebook } from "../../config/firebase/firebaseConfig";

export const login = (user) => {
  return {
    type: types.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      imageUrl: user.photoURL,
      isAuthenticated: true,
    },
  };
};

export const logout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: types.logout,
          payload: {
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        dispatch(login(user));
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebook)
      .then(({ user }) => {
        dispatch(login(user));
      });
  };
};

