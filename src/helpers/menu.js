import constants from "./constants";
const { SIGN_IN, SIGN_UP, LOGOUT } = constants;
const principalMenu = [
  {
    label: "Inicio",
    path: "/home",
  },
  {
    label: "Servicios",
    path: "/services",
  },
  {
    label: "Contactenos",
    path: "/contactUs",
  },
  {
    label: "Acerca de",
    path: "/about",
  },
];
const dropDownMenu = [
  {
    label: "Perfil",
    path: "/profile",
  },
  {
    label: SIGN_UP,
    path: "/signup",
  },
  {
    label: SIGN_IN,
    path: "/login",
  },
  {
    label: LOGOUT,
    path: "/logout",
  },
];
export { principalMenu, dropDownMenu };
