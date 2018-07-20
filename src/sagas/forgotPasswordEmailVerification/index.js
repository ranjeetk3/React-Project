import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* forgetPasswordEmailVerification(action) {
  try {
   const response = yield call(api.forgetPasswordEmailVerification, action.payload.passwordEmailVerification);
    yield put({
      type: 'FORGET_PASSWORD_EMAIL_VERIFICATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/forget_password_questions'))
  } catch (e) {
    yield put({
      type: 'FORGET_PASSWORD_EMAIL_VERIFICATION_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchforgetPasswordEmailVerification() {
  yield takeLatest('POST_PASSWORD_EMAIL_VERIFICATION', forgetPasswordEmailVerification)
}
