import {
  LOAD_COMPANY_COMPLETED,
  CHANGE_INPUT,
  CREATE_LETTER_COMPLETED,
  ADD_QUESTION,
  REMOVE_QUESTION,
  LOAD_CURRENT_COMPANIES_COMPLETED,
  SHOW_LOADER,
  SUBMIT_LETTER_SUCCSESS,
  SUBMIT_LETTER_FAILED,
  HIDE_NOTIFICATION,
} from './types';

const initialState = {
  letter: ``,

  companyData: {
    id: null,
    projectType: [],
    projectPlatform: [],
    functionality: [],
    intro: [],
    portfolioExamples: [],
    relevantQuestions: [],
  },

  projectTypeSelect: '',
  projectPlatformSelect: '',
  functionalitySelect: [],
  introSelect: '',
  portfolioExamplesSelect: [],
  relevantQuestionsSelect: [],


  // statistic

  currentCompanies: [],

  companieSelect: '',
  urlSelect: '',
  letterSelect: '',
  isSuccesses: '',
  loading: false,
};

export function letterGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPANY_COMPLETED:
      return { ...state, companyData: action.payload };

    case CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case ADD_QUESTION: {
      const arrCopy = state[action.payload.name].slice();
      arrCopy.push(action.payload.value);
      return { ...state, [action.payload.name]: arrCopy };
    }

    case REMOVE_QUESTION: {
      let arrCopy = state[action.payload.name].slice();
      arrCopy = arrCopy.filter( str => str !== action.payload.value);
      return { ...state, [action.payload.name]: arrCopy };
    }

    case CREATE_LETTER_COMPLETED:
      return { ...state, letter: action.payload.letter };

      //statistic

    case LOAD_CURRENT_COMPANIES_COMPLETED:
      return { ...state, currentCompanies: action.payload.companies };

    case SHOW_LOADER:
      return { ...state, loading: true }

    case SUBMIT_LETTER_SUCCSESS:
      return { ...state, isSuccesses: 'success', loading: false, companieSelect: '', urlSelect: '', letterSelect: '' }

    case SUBMIT_LETTER_FAILED:
      return { ...state, isSuccesses: 'error', loading: false }

    case HIDE_NOTIFICATION:
      return { ...state, isSuccesses: '' }

    default:
      return state;
  }
}
