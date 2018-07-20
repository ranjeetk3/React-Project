import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi


    export function* getInventoryList(action) 
    {
        try 
        {
            yield put({ type: 'GET_INVENTORY_LIST_STARTED' })
            const response = yield call(api.getInventoryList, action.payload.inventorySearchData)
            yield put({
                type: 'GET_INVENTORY_LIST_SUCCEEDED', 
                payload: {
                  response: response
                }
            })
        }
        catch (e) 
        {
            yield put({
                type: 'GET_INVENTORY_LIST_FAILED',
                payload: {
                  error: e.message
                }
            })
        }
    }

export default function* watchtGetInventoryList() {
  yield takeLatest('GET_INVENTORY_LIST', getInventoryList)
}

