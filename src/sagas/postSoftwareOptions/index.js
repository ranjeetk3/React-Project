import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
//const api = testApi
export function* postSoftwareOptions(action) {
  try {
    const response = yield call(api.postSoftwareOptions, action.payload.loginToken)
    yield put({
      type: 'POST_SOFTWARE_OPTIONS_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'POST_SOFTWARE_OPTIONS_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchPostSoftwareOptions() {
  yield takeLatest('POST_SOFTWARE_OPTIONS', postSoftwareOptions)
}
