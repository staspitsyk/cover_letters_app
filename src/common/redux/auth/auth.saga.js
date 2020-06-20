import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  submitLoginApi,
} from './auth.api';
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_COMPLETED,
  SUBMIT_LOGIN_ERROR
} from './types';
import { showNotification } from '../../notifications/notifications';


export function* submitLoginSaga(action) {
  try {
    const response = yield call(submitLoginApi, action.payload);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);


    yield put({ type: SUBMIT_LOGIN_COMPLETED });
  } catch (error) {
    if (error.response) {
      yield put({ type: SUBMIT_LOGIN_ERROR, payload: error.response.data.error });
    } else {
      showNotification('Login error', error.message, 'error');

    }
  }
}

export function* authSaga() {
  yield all([
    takeEvery(SUBMIT_LOGIN, submitLoginSaga),
  ]);
}
