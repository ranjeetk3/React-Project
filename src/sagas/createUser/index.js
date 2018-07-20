import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* createUser(action) {
  yield put({ type: 'SIGNUP_STARTED' })
  try {
    const response = yield call(api.postUser, action.payload.user)
    yield put({
      type: 'SIGNUP_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put(push('/signup/success'))
  } catch (e) {
    yield put({
      type: 'SIGNUP_FAILED',
      payload: {
        error: e.message
      }
    })
  }
}

export default function* watchCreateUser() {
  yield takeLatest('CREATE_USER', createUser)
}
