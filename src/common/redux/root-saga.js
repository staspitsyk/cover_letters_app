import { fork } from 'redux-saga/effects';
import { letterGeneratorSaga } from './letter-generator/letter.generator.saga';


export default function* startForman() {
  yield fork(letterGeneratorSaga);
}
