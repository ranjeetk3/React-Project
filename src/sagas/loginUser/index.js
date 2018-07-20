import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'
const api = (process.env.test) ? testApi : liveApi
//const api = testApi
export function* loginUser(action) {
  yield put({ type: 'LOGIN_STARTED' })
  try {
    const response = yield call(api.postLoginUser, action.payload.user)
     yield put({
      type: 'LOGIN_SUCCEEDED', 
      payload: {
        response: response
      }
    })
	if (response.data.has_completed_onboarding == 1) {
		yield put(push('/profile_dashboard'))
	} else {
		yield put({
			type: 'ONBOARDING_STEPS', 
			payload: {
				response: response.data.last_onboarding_step
			}
		})
		yield put(push('/onBoarding'))
	} 
    
 /*    yield put({
      type: 'LOGIN_SUCCEEDED', 
      payload: {
        response: response
      }
    }) */
	//yield put(push('/profile_dashboard'))
    //yield put(push('/onBoarding'))
  } catch (e) {
    yield put({
      type: 'LOGIN_FAILED',
      payload: {
        error: e.message
      }
    })
  /* yield put({
      type: 'SHOW_ERROR_MODAL',
      payload: {
        error: e.message
      }
    }) */
  }
}

export default function* watchLoginUser() {
  yield takeLatest('LOG_IN_USER', loginUser)
}
