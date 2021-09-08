import constants from "./constants";
const { SIGN_IN, SIGN_UP } = constants;
const principalMenu = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Services",
    path: "/services",
  },
];
const dropDownMenu = [
  {
    label: "Profile",
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
    label: "Cerrar Session",
    path: "/logout",
  },
];
export { principalMenu, dropDownMenu };
