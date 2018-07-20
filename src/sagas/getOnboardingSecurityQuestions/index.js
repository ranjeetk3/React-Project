import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* getOnboardingSecurityQuestions(action) {
  yield put({ type: 'ONBOARDING_QUESTIONS_STARTED' })
  try {
    const response = yield call(api.getOnboardingSecurityQuestions, action.payload.accessToken)
    yield put({
      type: 'ONBOARDING_QUESTIONS_GET_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'ONBOARDING_QUESTIONS_GET_FAILED',
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

export default function* watchGetOnboardingSecurityQuestions() {
  yield takeLatest('GET_ONBOARDING_SECURITY_QUESTIONS', getOnboardingSecurityQuestions)
}

