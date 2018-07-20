import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* getOrderById(action) {
  try {
    const response = yield call(api.getOrderById, action.payload.orderId );
    yield put({
      type: 'GET_ORDER_BY_ID_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'GET_ORDER_BY_ID_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchGetOrderById() {
  yield takeLatest('GET_ORDER_BY_ID', getOrderById)
}
