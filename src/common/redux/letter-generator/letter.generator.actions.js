import {
  LOAD_COMPANY,
  CHANGE_INPUT
} from './types';

export const loadCompany = (queryData) => ({ type: LOAD_COMPANY, payload: queryData });

export const changeInput = (inputData) => ({ type: CHANGE_INPUT, payload: inputData });