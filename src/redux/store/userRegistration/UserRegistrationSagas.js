import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./UserRegistrationAction";

import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./UserRegistrationActionTypes";

export function* registerUserData(data) {
  try {
  } catch (err) {
    console.log(err, "registration failed");
  }
}

export function* retrieveUserRegistrationData(data) {
  try {
  } catch (err) {
    console.log(err, "failed retrieving registration data");
  }
}

export function* UserRegistrationSaga() {
  yield takeLatest(TYPES.REGISTER_USER_DETAILS, registerUserData);
  yield takeLatest(TYPES.RETRIEVE_USER_DETAILS, retrieveUserRegistrationData);
}
