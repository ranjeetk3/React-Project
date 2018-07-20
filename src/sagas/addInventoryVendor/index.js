import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* addInventoryVendor(action) {
  try {
   const response = yield call(api.postInventoryVendor, action.payload.inventoryVendorDetails);
    yield put({
      type: 'Add_INVENTORY_VENDORS_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put({
      type: 'GET_INVENTORY_VENDORS'
    });
  } catch (e) {
    yield put({
      type: 'Add_INVENTORY_VENDORS_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchAddInventoryVendor() {
  yield takeLatest('POST_INVENTORY_VENDORS_DETAILS', addInventoryVendor)
}
