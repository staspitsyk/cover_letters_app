import { LOAD_COMPANY_COMPLETED, CHANGE_INPUT } from './types';

const initialState = {
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
};

export function letterGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMPANY_COMPLETED:
      return { ...state, companyData: action.payload };

    case CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
}
