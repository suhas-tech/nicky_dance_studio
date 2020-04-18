import { all } from "redux-saga/effects";

import { commonWatcher } from "./LLSagas/commonSaga";


export default function* rootSaga() {
  yield all([...commonWatcher]);
}
