import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./UserRegistrationAction";
import API from "./UserRegistrationAPI";

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

export function* submitUserData(data) {
  try {
    const { clearForm } = data;
    const response = yield call(API.registerUserDetials, data.payload);
    console.log(response, "response log");
    if (response.status === 200) {
      yield put(ACTIONS.clearRegistrationData());
      localStorage.clear();
      if (typeof clearForm === "function") {
        yield clearForm();
      }
    }
  } catch (err) {
    console.log(err, "registration failed");
  }
}

export function* UserRegistrationSaga() {
  yield takeLatest(TYPES.REGISTER_USER_DETAILS, registerUserData);
  yield takeLatest(TYPES.SUBMIT_USER_DETAILS, submitUserData);
}
