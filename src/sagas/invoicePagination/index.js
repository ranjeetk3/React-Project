import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* invoicePagination(action) {
  try {
    const response = yield call(api.getInvoicesPagination, action.payload.page);
    yield put({
      type: 'INVOICE_PAGINATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'INVOICE_PAGINATION_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchInvoicePagination() {
  yield takeLatest('GET_PAGINATION_DATA', invoicePagination)
}
