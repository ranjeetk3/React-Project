import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
export function* securityQuestion() {
  try {
    const response = yield call(api.getSecurityQuestion)
    yield put({
      type: 'SECURITY_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put(push('/security_question'))
  } catch (e) {
    yield put({
      type: 'SECURITY_FAILED',
      payload: {
        error: e.message
      }
    });
    yield put({
      payload: {
        error: e.message
      }
    })
  }
}

export default function* watchSecurityQuestion() {
  yield takeLatest('SECURITY_QUESTION', securityQuestion)
}

