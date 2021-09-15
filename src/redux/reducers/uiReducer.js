import { types } from "../types/types";

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case types.showModal:
      return action.payload;
    default:
      return state;
  }
};

export { modalReducer };
