import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* addInventory(action) {
    try {
		const response = yield call(api.postInventory, action.payload.addInventoryDetails);
		yield put(push('/inventory'))
   } catch (e) {
    yield put({
      type: 'ADD_INVENTORY_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchAddInventory() {
  yield takeLatest('ADD_INVENTORY', addInventory)
}
