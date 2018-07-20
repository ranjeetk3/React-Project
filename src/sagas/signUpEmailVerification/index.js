import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* signUpEmailVerification(action) {
  try {
   const response = yield call(api.signUpEmailVerification, action.payload.signUpEmailVerify);
    yield put({
      type: 'SIGNUP_EMAIL_VERIFICATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/login'))
  } catch (e) {
    yield put({
      type: 'SIGNUP_EMAIL_VERIFICATION_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchSignUpEmailVerification() {
  yield takeLatest('SIGNUP_EMAIL_VERIFICATION', signUpEmailVerification)
}
