import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* getProductById(action) {
  yield put({ type: 'PRODUCT_STARTED' })
  try {
   const response = yield call(api.getProductById, action.payload.id)
    yield put({
      type: 'GET_PRODUCT_BY_ID_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'GET_PRODUCT_BY_ID_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchGetProductById() {
  yield takeLatest('GET_PRODUCT_BY_ID', getProductById)
}
