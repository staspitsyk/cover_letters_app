import { LOAD_COMPANY_COMPLETED, CHANGE_INPUT, CREATE_LETTER_COMPLETED } from './types';

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
  functionalitySelect: '',
  introSelect: '',
  portfolioExamplesSelect: '',
  relevantQuestionsSelect: '',
};

export function letterGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPANY_COMPLETED:
      return { ...state, companyData: action.payload };

    case CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case CREATE_LETTER_COMPLETED:
      return { ...state, letter: action.payload.letter };

    default:
      return state;
  }
}
