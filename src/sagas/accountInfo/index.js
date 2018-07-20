import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* accountInfo(action) {
  try {
    const response = yield call(api.getAccountInfo, action.payload.loginToken );
		yield put({
      type: 'ACCOUNT_DETAIL_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'ACCOUNT_DETAIL_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchAccountInfo() {
  yield takeLatest('GET_ACCOUNT_DETAILS', accountInfo)
}
