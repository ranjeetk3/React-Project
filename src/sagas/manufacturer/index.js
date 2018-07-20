import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* manufacturer(action) {
  try {
    const response = yield call(api.getManufacturer, action.payload.loginToken);
    yield put({
      type: 'MANUFACTURER_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'MANUFACTURER_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchManufacturer() {
  yield takeLatest('GET_MANUFACTURER', manufacturer)
}
