import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* getPurchaseRequestById(action) {
  try {
	console.log('saga callled')
    const response = yield call(api.getPurchaseRequestById, action.payload.requestDetails );
    yield put({
      type: 'GET_PURCHASE_REQUEST_BY_ID_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'GET_PURCHASE_REQUEST_BY_ID_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchGetPurchaseRequestById() {
  yield takeLatest('GET_PURCHASE_REQUEST_BY_ID', getPurchaseRequestById)
}
