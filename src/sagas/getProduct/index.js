import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi


    export function* getProduct(action) 
    {
        try 
        {
            yield put({ type: 'GET_PRODUCT_STARTED' })
            const response = yield call(api.getProduct, action.payload.loginToken)
            yield put({
                type: 'GET_PRODUCT_SUCCEEDED', 
                payload: {
                  response: response
                }
            })
        }
        catch (e) 
        {
            yield put({
                type: 'GET_PRODUCT_FAILED',
                payload: {
                  error: e.message
                }
            })
        }
    }

export default function* watchtGetProduct() {
  yield takeLatest('GET_PRODUCT', getProduct)
}

