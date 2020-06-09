import {
  LOAD_COMPANY_COMPLETED,
  CHANGE_INPUT,
  CREATE_LETTER_COMPLETED,
  ADD_QUESTION,
  REMOVE_QUESTION,
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

    default:
      return state;
  }
}
