import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
export function* getUsersByCompanyAndPermissions(action) {
  try {
    const response = yield call(api.getUsersByCmpnyAndPermissions, action.payload.userDeatils)
    yield put({
      type: 'GET_USERS_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'GET_USERS_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchtGetUsersByCompanyAndPermissions() {
  yield takeLatest('GET_USERS_BY_COMPANY_AND_PERMISSIONS', getUsersByCompanyAndPermissions)
}

