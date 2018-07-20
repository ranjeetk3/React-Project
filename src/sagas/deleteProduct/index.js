import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* deleteProduct(action) {
	yield put({ type: 'PRODUCT_STARTED' })
  try {
   const response = yield call(api.deleteProduct, action.payload.id)
   yield put({
      type: 'GET_PRODUCTS'
    });
    yield put({
      type: 'DELETE_PRODUCT_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'DELETE_PRODUCT_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchDeleteProduct() {
  yield takeLatest('DELETE_PRODUCT', deleteProduct)
}
