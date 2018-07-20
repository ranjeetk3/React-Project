import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
//const api = testApi
export function* getProductCategories(action) {
	yield put({ type: 'PRODUCT_STARTED' })
  try {
    const response = yield call(api.getProductCategories, action.payload.loginToken);
    yield put({
      type: 'PRODUCT_CATAGORIES_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'PRODUCT_CATAGORIES_FAILED',
      payload: {
        error: e.message
      }
    });
  
  }
}

export default function* watchGetProductCategories() {
  yield takeLatest('GET_PRODUCT_CATAGORIES', getProductCategories)
}
