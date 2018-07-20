import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* updateProduct(action) {
  yield put({ type: 'PRODUCT_STARTED' })
  try {
    const response = yield call(api.putInventoryProduct, action.payload.data)
	yield put({
      type: 'GET_PRODUCTS'
    });
	yield put({
      type: 'UPDATE_PRODUCT_SUCCEEDED'
    });
  } catch (e) {
    yield put({
      type: 'UPDATE_PRODUCT_FAILED'
    });
  }
}

export default function* watchUpdateProduct() {
	yield takeLatest('UPDATE_INVENTORY_PRODUCTS', updateProduct)
}

