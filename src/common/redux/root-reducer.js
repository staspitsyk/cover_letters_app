import { combineReducers } from 'redux';
import { letterGeneratorReducer } from './letter-generator/letter.generator.reducer';

const rootReducer = combineReducers({ letterGeneratorReducer });

export default rootReducer;
