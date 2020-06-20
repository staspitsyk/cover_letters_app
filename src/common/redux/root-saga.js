import { fork } from 'redux-saga/effects';
import { letterGeneratorSaga } from './letter-generator/letter.generator.saga';
import { authSaga } from './auth/auth.saga';


export default function* startForman() {
  yield fork(letterGeneratorSaga);
  yield fork(authSaga);
}
