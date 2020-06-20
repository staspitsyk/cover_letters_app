import { combineReducers } from 'redux';
import { letterGeneratorReducer } from './letter-generator/letter.generator.reducer';
import { authReducer } from './auth/auth.reducer';

const rootReducer = combineReducers({ letterGeneratorReducer, authReducer });

export default rootReducer;
