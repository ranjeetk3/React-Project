import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi


    export function* getInventory(action) 
    {
        try 
        {
            yield put({ type: 'GET_INVENTORY_STARTED' })
            const response = yield call(api.getInventory)
            yield put({
                type: 'GET_INVENTORY_SUCCEEDED', 
                payload: {
                  response: response
                }
            })
        }
        catch (e) 
        {
            yield put({
                type: 'GET_INVENTORY_FAILED',
                payload: {
                  error: e.message
                }
            })
        }
    }

export default function* watchtGetInventory() {
  yield takeLatest('GET_INVENTORY', getInventory)
}

