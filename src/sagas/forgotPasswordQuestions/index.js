import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* forgotPasswordQuestions(action) {
  yield put({ type: 'FORGET_PASSWORD_QUESTIONS_STARTED' })

  try {
    const response = yield call(api.getForgotPasswordQuestions, action.payload.userDetails);
    yield put({
      type: 'FORGET_PASSWORD_QUESTIONS_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
  yield put(push('/forget_reset_password_page'))
    yield put({
      type: 'FORGET_PASSWORD_QUESTIONS_FAILED',
      payload: {
        //error: e.message
      }
    });
  }
}

export default function* watchForgotPasswordQuestions() {
  yield takeLatest('GET_QUESTION_BY_USERID', forgotPasswordQuestions)
}
