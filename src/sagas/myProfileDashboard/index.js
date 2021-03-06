import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* myProfileDashboard(action) {
  try {
   const response = yield call(api.getUsers, action.payload.userDetails);
    yield put({
      type: 'PROFILE_DASHBOARD_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'PROFILE_DASHBOARD_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchmyProfileDashboard() {
  yield takeLatest('GET_PROFILE_DASHBOARD_BY_ID', myProfileDashboard)
}
