import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* deleteManufacturer(action) {
  try {
   const response = yield call(api.deleteManufacturer, action.payload.manufacturerId);
    yield put({
      type: 'DELETE_MANUFACTURER_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'DELETE_MANUFACTURER_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchDeleteManufacturer() {
  yield takeLatest('DELETE_MANUFACTURER', deleteManufacturer)
}
