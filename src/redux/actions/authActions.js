import Swal from "sweetalert2";

import { types } from "../types/types";
import {
  firebase,
  google,
  facebook,
} from "../../config/firebase/firebaseConfig";
import { FileUpload } from "../../helpers/FileUpload";
let fileUrl = [];

//ENVIA LA IMAGEN A CLOUDINARY Y LA SUBE
export const startUploadingImage = (file) => {
  return async () => {
    Swal.fire({
      title: "Uploading...",
      text: "Please wait ...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    fileUrl = await FileUpload(file);

    // console.log(fileUrl);
    Swal.close();
    return fileUrl;
  };
};
//CREA USUARIO CON CORREO Y CONTRASEÑA
export const startRegisterWithEmailPasswordNameUrlImg = (
  email,
  password,
  name,
  urlImage
) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        // console.log(user);

        await user.updateProfile({ displayName: name, photoURL: urlImage });

        // console.log(user);

        Swal.fire({
          position: "top-end",
          text: "Usuario creado",
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          icon: "error",
          text: e,
          title: "Oops ....",
          showConfirmButton: true,
          footer: "",
        });
      });
  };
};

//INICIA SESION CON CORREO Y CONTRASEÑA
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // console.log('hola');
        // console.log(user);
        dispatch(login(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

//INICIA SESION CON GOOGLE
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

//INICIA SESION CON FACEBOOK
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

//FUNCION SINCRONICA(GUARDA INFO DE USUARIO EN REDUCER)
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

//CIERRA SESION EN FIREBASE
export const logout = () => {
  return async(dispatch) => {
    await firebase.auth().signOut();
    dispatch(logOutReducer());
  };
};
//CIERRA SESION EN REDUX FUNCION SINCRONICA
export const logOutReducer = (user) => {
  return {
    type: types.logout,
  };
};
