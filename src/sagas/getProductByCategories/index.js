import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api =  (process.env.test) ? testApi : liveApi

export function* getProductByCategories(action) {
  try {
    yield put({ type: 'GET_PRODUCT_BY_CATAGORIES_STARTED' })
    const response = yield call(api.getProductByCategories, action.payload.loginToken)
    yield put({
      type: 'GET_PRODUCT_BY_CATAGORIES_SUCCEEDED', 
      payload: {
        response: response
      }
    })
  } catch (e) {
    yield put({
      type: 'GET_PRODUCT_BY_CATAGORIES_FAILED',
      payload: {
        error: e.message
      }
    })
  }
}

export default function* watchtGetProductByCategories() {
  yield takeLatest('GET_PRODUCT_BY_CATAGORIES', getProductByCategories)
}

