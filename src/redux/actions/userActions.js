import { types } from "../types/types";
import { getProfile, getProfiles, updateProfile } from "../../services/user";
import Swal from "sweetalert2";

const findByid = (id) => {
  return (dispatch) => {
    getProfile(id).then((profile) => {
      dispatch({
        type: types.getProfile,
        payload: profile,
      });
    });
  };
};
const findLastUser = () => {
  return (dispatch) => {
    getProfiles().then((profiles) => {
      dispatch({
        type: types.lastProfiles,
        payload: profiles,
      });
    });
  };
};

const updateProfileUser = (id, data) => {
  return (dispatch) => {
    try {
      updateProfile(id, data).then((profile) => {
        dispatch({
          type: types.getProfile,
          payload: profile,
        });
        Swal.fire({
          position: "center",
          text: "Actualización Exitosa",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha Ocurrido un Error",
        text: error.message,
        footer: "",
      });
    }
  };
};
const Profile = { findByid, findLastUser, updateProfileUser };
export default Profile;
