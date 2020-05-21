import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  loadCompanyApi,
  createLetterApi
} from './letter.generator.api';
// import { showNotification } from '../../notifications/notifications';

import {
  LOAD_COMPANY,
  LOAD_COMPANY_COMPLETED,
  CREATE_LETTER,
  CREATE_LETTER_COMPLETED
} from './types';

export function* loadCompanySaga(action) {
  try {
    const response = yield call(loadCompanyApi, action.payload);
    yield put({ type: LOAD_COMPANY_COMPLETED, payload: response.data });
  } catch (error) {
    // showNotification('Something went wrong', error.message, 'error');

    // yield put({ type: LOAD_TEACHERS_FAILED });
  }
}

export function* createLetterSaga(action) {
  try {
    const response = yield call(createLetterApi, action.payload);
    yield put({ type: CREATE_LETTER_COMPLETED, payload: response.data });
  } catch (error) {
    // showNotification('Something went wrong', error.message, 'error');

    // yield put({ type: LOAD_TEACHERS_FAILED });
  }
}

export function* letterGeneratorSaga() {
  yield all([
    takeEvery(LOAD_COMPANY, loadCompanySaga),
    takeEvery(CREATE_LETTER, createLetterSaga),
  ]);
}
