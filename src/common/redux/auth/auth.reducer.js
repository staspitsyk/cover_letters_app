import {
  CHANGE_INPUT,
  SUBMIT_LOGIN_COMPLETED,
  SUBMIT_LOGIN_ERROR
} from './types';

const initialState = {
  isLogedIn: false,
  email: '',
  password: '',
  loginError: '',
  showPassword: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case SUBMIT_LOGIN_COMPLETED:
      return { ...state, isLogedIn: true };

    case SUBMIT_LOGIN_ERROR:
      return { ...state, loginError: action.payload }

    default:
      return state;
  }
}
