import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

//const api = (process.env.test) ? testApi : liveApi
const api = testApi
export function* updateUnreadStatus(action) {
  try {
    const response = yield call(api.updateUnreadStatus, action.payload.userDetails)
    yield put({
      type: 'UPDATE_UNREAD_STATUS_SUCCESS', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'UPDATE_UNREAD_STATUS_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchtUpdateUnreadStatus() {
  yield takeLatest('UPDATE_UNREAD_STATUS', updateUnreadStatus)
}

