import { types } from "../types/types";

const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: types.showModal,
      payload: true,
    });
  };
};

const hideModal = () => {
  return (dispatch) => {
    dispatch({
      type: types.showModal,
      payload: false,
    });
  };
};
const UI = { showModal, hideModal };
export default UI;
