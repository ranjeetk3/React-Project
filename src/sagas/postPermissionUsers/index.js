import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* postPermissionUsers(action) {
  yield put({ type: 'PERMISSION_USERS_STARTED' })
  try {
    const response = yield call(api.postPermissionUsers, action.payload.userDetails)
    yield put({
      type: 'PERMISSION_USERS_SUCCEEDED', 
      payload: {
        response: response
      }
    })
    //yield put(push('/onBoardingUsersForm'))
  } catch (e) {
    yield put({
      type: 'PERMISSION_USERS_FAILED',
      payload: {
        error: e.message
      }
    })
  }
  
}

export default function* watchPostPermissionUsers() {
  yield takeLatest('SAVE_PERMISSION_USERS', postPermissionUsers)
}
