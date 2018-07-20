import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
//const api = liveApi
export function* saveOnboardingSecurityQuestions(action) {
  yield put({ type: 'ONBOARDING_QUESTIONS_STARTED' })
  try {
    const response = yield call(api.postOnboardingSecurityQuestions, action.payload.securityData)
    yield put({ type: 'ONBOARDING_QUESTIONS_SAVE_SUCCEEDED' })
    yield put({
      type: 'ONBOARDING_STEPS', 
      payload: {
        response: 1
      }
    });
    yield put(push('/onBoarding'))
  } catch (e) {
    yield put({
      type: 'ONBOARDING_QUESTIONS_SAVE_FAILED',
      payload: {
        error: e.message
      }
    });
    /* yield put({
      type: 'SHOW_ERROR_MODAL',
      payload: {
        error: e.message
      }
    }) */
  }
}

export default function* watchSaveOnboardingSecurityQuestions() {
  yield takeLatest('SAVE_ONBOARDING_QUESTIONS', saveOnboardingSecurityQuestions)
}

