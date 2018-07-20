import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* verifyEmailAddress(action) {
  yield put({ type: 'EMAIL_VERIFICATION_STARTED' })
  try {
    const response = yield call(api.postEmailVerification, action.payload.verificationData);
    yield put({
      type: 'EMAIL_VERIFICATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put(push('/signup'))
  } catch (e) {
    yield put({
      type: 'EMAIL_VERIFICATION_FAILED',
      payload: {
        error: e.message
      }
    });
  yield put(push('/signup'))
  }
}

export default function* watchVerifyEmailAddress() {
  yield takeLatest('VERIFY_EMAIL_ADDRESS', verifyEmailAddress)
}
