import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* invoiceDateRangeSearch(action) {
  try {
    const response = yield call(api.getDateRangeSearchData, action.payload.data);
    yield put({
      type: 'INVOICE_SEARCH_DATA_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'INVOICE_SEARCH_DATA_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchinvoiceDateRangeSearch() {
  yield takeLatest('GET_DATE_RANGE_SEARCH_DATA', invoiceDateRangeSearch)
}
