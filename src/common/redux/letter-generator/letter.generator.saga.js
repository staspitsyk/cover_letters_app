import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  loadCompanyApi,
  createLetterApi,
  loadCurrentCompaniesApi,
  submitLetterApi
} from './letter.generator.api';
// import { showNotification } from '../../notifications/notifications';

import {
  LOAD_COMPANY,
  LOAD_COMPANY_COMPLETED,
  CREATE_LETTER,
  CREATE_LETTER_COMPLETED,
  LOAD_CURRENT_COMPANIES,
  LOAD_CURRENT_COMPANIES_COMPLETED,
  SUBMIT_LETTER,
  SUBMIT_LETTER_SUCCSESS,
  SUBMIT_LETTER_FAILED
} from './types';

export function* loadCompanySaga(action) {
  try {
    const response = yield call(loadCompanyApi, action.payload);
    yield put({ type: LOAD_COMPANY_COMPLETED, payload: response.data });
  } catch (error) {
    // showNotification('Something went wrong', error.message, 'error');
  }
}

export function* createLetterSaga(action) {
  try {
    const response = yield call(createLetterApi, action.payload);
    yield put({ type: CREATE_LETTER_COMPLETED, payload: response.data });
  } catch (error) {
    // showNotification('Something went wrong', error.message, 'error');
  }
}

export function* loadCurrentCompaniesSaga() {
  try {
    const response = yield call(loadCurrentCompaniesApi);
    yield put({ type: LOAD_CURRENT_COMPANIES_COMPLETED, payload: response.data });
  } catch (error) {
    // showNotification('Something went wrong', error.message, 'error');

  }
}

export function* submitLetterSaga(action) {
  try {
    const response = yield call(submitLetterApi, action.payload);
    yield put({ type: SUBMIT_LETTER_SUCCSESS });
  } catch (error) {
    yield put({ type: SUBMIT_LETTER_FAILED });
    // showNotification('Something went wrong', error.message, 'error');

  }
}

export function* letterGeneratorSaga() {
  yield all([
    takeEvery(LOAD_COMPANY, loadCompanySaga),
    takeEvery(CREATE_LETTER, createLetterSaga),
    takeEvery(LOAD_CURRENT_COMPANIES, loadCurrentCompaniesSaga),
    takeEvery(SUBMIT_LETTER, submitLetterSaga),
  ]);
}
