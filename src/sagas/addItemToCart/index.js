import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* addItemToCart(action) {
  try {
	 const response = yield call(api.addItemToCart, action.payload.addCartItem);
    yield put({
      type: 'ADD_ITEM_TO_CART_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/purchase_request'))
  } catch (e) {
    yield put({
      type: 'ADD_ITEM_TO_CART_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchAddItemToCart() {
  yield takeLatest('ADD_ITEM_TO_CART', addItemToCart)
}
