import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
//const api = testApi

export function* passwordResetVerifyEmail(action) {
  yield put({ type: 'PASSWORD_RESET_REQUEST_STARTED' })
  try {
    const response = yield call(api.postResetPasswordVerifyEmail, action.payload.user)
    yield put({
      type: 'RESET_PASSWORD_VERIFIED_EMAIL_SUCCESS', 
      payload: {
        response: response
      }
    });
    yield put(push('/passwordResetEmailLink'))
  } catch (e) {
    yield put({
      type: 'PASSWORD_RESET_REQUEST_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchPasswordResetVerifyEmail() {
  yield takeLatest('PASSWORD_RESET_VERIFY_EMAIL', passwordResetVerifyEmail)
}
