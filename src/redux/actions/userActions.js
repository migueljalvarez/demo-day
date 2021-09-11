import { types } from "../types/types";
import { getProfile, getProfiles } from "../../services/user";
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
const findLastUser = ()=>{
  return (dispatch) => {
    getProfiles().then((profiles) => {
      dispatch({
        type: types.lastProfiles,
        payload: profiles,
      });
    });
  };
}
const Profile = { findByid, findLastUser };
export default Profile;
