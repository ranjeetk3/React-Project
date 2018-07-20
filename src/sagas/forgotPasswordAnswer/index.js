import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* forgotPasswordAnswer(action) {
  try {
   const response = yield call(api.postSecurityAnswer, action.payload.securityAnswer);
    yield put({
      type: 'FORGET_PASSWORD_ANSWER_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/forget_reset_password_page'))
  } catch (e) {
    yield put({
      type: 'FORGET_PASSWORD_ANSWER_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchforgotPasswordAnswer() {
  yield takeLatest('POST_SECURITY_ANSWER', forgotPasswordAnswer)
}
