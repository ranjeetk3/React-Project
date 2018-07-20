import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* saveSoftwareOptions(action) {
  yield put({ type: 'SOFTWARE_OPTIONS_STARTED' })
  try {
    const response = yield call(api.updateSoftwareOptions, action.payload.data)
    yield put({
      type: 'SOFTWARE_OPTIONS_SAVE_SUCCEEDED', 
      payload: {
        response: response
      }
    })
  } catch (e) {
    yield put({
      type: 'SOFTWARE_OPTIONS_SAVE_FAILED',
      payload: {
        error: e.message
      }
    })
  }
}

export default function* watchSaveSoftwareOptions() {
  yield takeLatest('SAVE_SOFTWARE_OPTIONS', saveSoftwareOptions)
}
