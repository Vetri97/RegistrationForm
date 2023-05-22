import { all } from "redux-saga/effects";
import { UserRegistrationSaga } from "../userRegistration/UserRegistrationSagas";

export default function* watchSagas() {
  //Combine sagas with
  yield all([UserRegistrationSaga()]);
}
