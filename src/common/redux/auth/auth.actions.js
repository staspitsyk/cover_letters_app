import {
  CHANGE_INPUT,
  SUBMIT_LOGIN,
} from './types';

export const changeInput = (inputData) => ({ type: CHANGE_INPUT, payload: inputData });

export const submitLogin = (data) => ({ type: SUBMIT_LOGIN, payload: data });