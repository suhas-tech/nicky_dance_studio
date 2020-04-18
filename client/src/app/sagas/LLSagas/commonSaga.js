import { call, put, takeLatest, all } from "redux-saga/effects";
import { getUrl } from "../config";
import history from "../../../history";

import { getData, postData } from "../requestInterface";

function* loginAdminGen(payload) {
  console.log(payload);
  try {
    const response = yield call(postData, {
      url: `${getUrl()}/${payload.payload.endPoint}`,
      data: payload.payload.data
    });
    if (response.status === 200) {
      history.push("/adminDashBoard");
    } else {
    }
    // yield put({ type: "LOGIN_ADMIN_RESULT", data: response.data });
  } catch (err) {
    console.log(err);
  }
}

function* checkTokenGen(payload) {
  console.log(payload);
  try {
    const response = yield call(getData, {
      url: `${getUrl()}/${payload.payload.endPoint}`
    });
    console.log(response.status)
    if (response.status === 200) {
    } else {
      history.push("/");
    }
    // yield put({ type: "LOGIN_ADMIN_RESULT", data: response.data });
  } catch (err) {
    history.push("/");
    console.log(err);
  }
}

export const commonWatcher = [
  takeLatest("LOGIN_ADMIN", loginAdminGen),
  takeLatest("CHECK_TOKEN", checkTokenGen)
];
