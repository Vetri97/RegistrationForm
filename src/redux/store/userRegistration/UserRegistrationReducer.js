import * as types from "./UserRegistrationActionTypes";

const INITIAL_STATE = {};


const userRegistrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTER_USER_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;
