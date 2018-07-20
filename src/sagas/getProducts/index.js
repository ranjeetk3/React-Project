import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* getProducts(action) {
  try {
    const response = yield call(api.getProducts, action.payload.loginToken);
    yield put({
      type: 'GET_PRODUCT_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'GET_PRODUCT_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchGetProducts() {
  yield takeLatest('GET_PRODUCTS', getProducts)
}
