import {
  LOAD_COMPANY,
  CHANGE_INPUT,
  CREATE_LETTER,
  ADD_QUESTION,
  REMOVE_QUESTION
} from './types';

export const loadCompany = (queryData) => ({ type: LOAD_COMPANY, payload: queryData });

export const changeInput = (inputData) => ({ type: CHANGE_INPUT, payload: inputData });

export const createLetter = (data) => ({ type: CREATE_LETTER, payload: data });

export const addQuestion = (data) => ({ type: ADD_QUESTION, payload: data });

export const removeQuestion = (data) => ({ type: REMOVE_QUESTION, payload: data });