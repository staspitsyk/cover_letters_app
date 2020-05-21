import {
  LOAD_COMPANY,
  CHANGE_INPUT,
  CREATE_LETTER
} from './types';

export const loadCompany = (queryData) => ({ type: LOAD_COMPANY, payload: queryData });

export const changeInput = (inputData) => ({ type: CHANGE_INPUT, payload: inputData });

export const createLetter = (data) => ({ type: CREATE_LETTER, payload: data });