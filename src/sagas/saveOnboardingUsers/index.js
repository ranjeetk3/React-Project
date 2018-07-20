import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* saveOnboardingUsers(action) {
  yield put({ type: 'ONBOARDING_USERS_STARTED' })
  try {
    const response = yield call(api.postOnboardingUsers, action.payload.userDetails)
    yield put({
      type: 'ONBOARDING_USERS_SUCCEEDED', 
      payload: {
        response: response
      }
    })
	 yield put({
      type: 'ONBOARDING_STEPS', 
      payload: {
        response: 4
      }
    });
    //yield put(push('/onBoardingUsersForm'))
  } catch (e) {
    yield put({
      type: 'ONBOARDING_USERS_FAILED',
      payload: {
        error: e.message
      }
    })
  }
  
}

export default function* watchSaveOnboardingUsers() {
  yield takeLatest('SAVE_ONBOARDING_USERS', saveOnboardingUsers)
}
