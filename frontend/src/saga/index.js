import { spawn, takeEvery, call, put } from "redux-saga/effects";
import {
  fetchServicesFailure,
  fetchServicesSuccess,
  fetchDetailsFailure,
  fetchDetailsSuccess,
} from "../actions/actionCreators";
import { FETCH_SERVICES_REQUEST, FETCH_DETAILS_REQUEST } from "../actions/actionTypes";
import { fetchServices, fetchDetails } from "../api";

export default function* saga() {
  yield spawn(watchFetchServicesSaga);
  yield spawn(watchFetchDetailsSaga);
}

function* watchFetchServicesSaga() { 
  yield takeEvery(FETCH_SERVICES_REQUEST, handleFetchServicesSaga);
}

function* watchFetchDetailsSaga() { 
  yield takeEvery(FETCH_DETAILS_REQUEST, handleFetchDetailsSaga);
}

function* handleFetchServicesSaga() {
  try {
    const data = yield call(fetchServices);

    yield put(fetchServicesSuccess(data));
  } catch (e) {
    yield put(fetchServicesFailure(e.message));
  }
}

function* handleFetchDetailsSaga(action) {
  try {
    const data = yield call(fetchDetails, action.payload.id);

    yield put(fetchDetailsSuccess(data));
  } catch (e) {
    yield put(fetchDetailsFailure(e.message));
  }
}
