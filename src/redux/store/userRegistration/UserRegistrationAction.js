import * as types from "./UserRegistrationActionTypes";

export const RegisterDetails = (payload) => ({
  type: types.REGISTER_USER_DETAILS,
  payload,
});

export const RegistrationSuccess = (payload) => ({
  type: types.REGISTERATION_SUCCESS,
  payload,
});
