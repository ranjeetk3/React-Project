import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* forgetPasswordReset(action) {
	yield put({ type: 'FORGET_PASSWORD_RESET_STARTED' })
  try {
   const response = yield call(api.postPasswordReset, action.payload.passwordReset);
    yield put({
      type: 'FORGET_PASSWORD_RESET_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/reset_password_success'))
  } catch (e) {
    yield put({
      type: 'FORGET_PASSWORD_RESET_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchforgetPasswordReset() {
  yield takeLatest('POST_PASSWORD_RESET', forgetPasswordReset)
}
