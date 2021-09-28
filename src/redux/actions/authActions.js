import Swal from "sweetalert2";
import { types } from "../types/types";
import {
  firebase,
  google,
  facebook,
} from "../../config/firebase/firebaseConfig";
import { FileUpload } from "../../helpers/FileUpload";
import { login as authLogin, signup as createUser } from "../../services/auth";
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

    Swal.close();
    return fileUrl;
  };
};
//CREA USUARIO CON CORREO Y CONTRASEÑA
export const startRegisterWithEmailPasswordNameUrlImg = (user) => {
  return (dispatch) => {
    createUser({ user })
      .then((user) => {
        
        dispatch(login(user.data));
        Swal.fire({
          icon: "success",
          position: "center",
          text: "Usuario creado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          text: e.response.data.message,
          title: "Oops ....",
          showConfirmButton: true,
          footer: "",
        });
      });
  };
};

//INICIA SESION CON CORREO Y CONTRASEÑA
export const startLoginEmailPassword = (email, password, remenber) => {
  return (dispatch) => {
    authLogin({ email, password, remenber })
      .then((user) => {
        console.log(user);
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
        authLogin(user).then((data) => {
          dispatch(login(data));
        });
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
        authLogin(user).then((data) => {
          dispatch(login(data));
        });
      });
  };
};

//FUNCION SINCRONICA(GUARDA INFO DE USUARIO EN REDUCER)
export const login = (user) => {
  const { id, displayName, imageUrl } = user;
  return {
    type: types.login,
    payload: {
      id: id,
      displayName: displayName,
      imageUrl: user.photoURL || imageUrl,
      isAuthenticated: true,
    },
  };
};

//CIERRA SESION EN FIREBASE
export const logout = () => {
  return async (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.auth().signOut();
      }
    });
    localStorage.removeItem("token");
    dispatch(logOutReducer());
  };
};
//CIERRA SESION EN REDUX FUNCION SINCRONICA
export const logOutReducer = (user) => {
  return {
    type: types.logout,
  };
};
