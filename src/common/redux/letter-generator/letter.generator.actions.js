import {
  LOAD_COMPANY,
  CHANGE_INPUT,
  CREATE_LETTER,
  ADD_QUESTION,
  REMOVE_QUESTION,
  LOAD_CURRENT_COMPANIES,
  SUBMIT_LETTER,
  SHOW_LOADER,
  HIDE_NOTIFICATION
} from './types';


export const loadCompany = (queryData) => ({ type: LOAD_COMPANY, payload: queryData });

export const changeInput = (inputData) => ({ type: CHANGE_INPUT, payload: inputData });

export const createLetter = (data) => ({ type: CREATE_LETTER, payload: data });

export const addQuestion = (data) => ({ type: ADD_QUESTION, payload: data });

export const removeQuestion = (data) => ({ type: REMOVE_QUESTION, payload: data });

export const loadCurrentCompanies = () => ({ type: LOAD_CURRENT_COMPANIES });

export const submitLetter = (data) => ({ type: SUBMIT_LETTER, payload: data });

export const hideNotification = () => ({ type: HIDE_NOTIFICATION });

export const showLoader = () => ({ type: SHOW_LOADER });