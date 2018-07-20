import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* verifyPasswordResetRequest(action) {
  yield put({ type: 'PASSWORD_RESET_REQUEST_VERIFICATION_STARTED' })
  yield put({ type: 'SHOW_WAITING_MODAL' })
  try {
    const response = yield call(api.postPasswordResetRequestVerification, action.payload.verificationData);
    yield put({
      type: 'PASSWORD_RESET_REQUEST_VERIFICATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put({ type: 'HIDE_WAITING_MODAL' })
  } catch (e) {
    yield put({
      type: 'PASSWORD_RESET_REQUEST_VERIFICATION_FAILED',
      payload: {
        error: e.message
      }
    });
    yield put({
      type: 'SHOW_ERROR_MODAL',
      payload: {
        error: e.message
      }
    })
  }
}

export default function* watchVerifyEmailAddress() {
  yield takeLatest('VERIFY_PASSWORD_RESET_REQUEST', verifyPasswordResetRequest)
}
