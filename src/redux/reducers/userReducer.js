import { types } from "../types/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getProfile:
      return action.payload;
    default:
      return state;
  }
};
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case types.lastProfiles:
      return action.payload;
    default:
      return state;
  }
};
export { userReducer, usersReducer };
