import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* saveProducts(action) {
  yield put({ type: 'PRODUCT_STARTED' })
  try {
    const response = yield call(api.postInventoryProduct, action.payload.data)
	yield put({
      type: 'GET_PRODUCTS'
    });
	yield put({
      type: 'SAVE_PRODUCT_SUCCEEDED'
    });
  } catch (e) {
    yield put({
      type: 'SAVE_PRODUCT_FAILED'
    });
  }
}

export default function* watchSaveProducts() {
	yield takeLatest('SAVE_INVENTORY_PRODUCTS', saveProducts)
}

