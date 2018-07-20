import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* deleteCartItemById(action) {
  try {
   const response = yield call(api.deleteCartItemById, action.payload.deletedetails);
    yield put({
      type: 'DELETE_CART_BY_ITEM_ID_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/purchase_request'))
  } catch (e) {
    yield put({
      type: 'DELETE_CART_BY_ITEM_ID_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchDeleteCartItemById() {
  yield takeLatest('DELETE_CART_ITEM_BY_ID', deleteCartItemById)
}
