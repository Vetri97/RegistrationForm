import { put } from "redux-saga/effects";
import * as ACTIONS from "./UserRegistrationAction";

import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./UserRegistrationActionTypes";

export function* registerUserData(data) {
  try {
    const responseData = data.payload;
    yield put(ACTIONS.RegistrationSuccess(responseData));
  } catch (err) {
    console.log(err, "registration failed");
  }
}

export function* UserRegistrationSaga() {
  yield takeLatest(TYPES.REGISTER_USER_DETAILS, registerUserData);
}
