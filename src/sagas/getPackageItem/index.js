import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
export function* getPackageItem(action) 
{
    try 
    {
		yield put({ type: 'GET_PACKAGE_ITEM_STARTED' })
        const response = yield call(api.getPackageItem, action.payload.packageId)
        yield put({
            type: 'GET_PACKAGE_ITEM_SUCCEEDED', 
            payload: {
              response: response
            }
        })
	 yield put(push('/update_package'))	
    }
    catch (e) 
    {
        yield put({
            type: 'GET_PACKAGE_ITEM_FAILED',
            payload: {
              error: e.message
            }
        })
    }
}

export default function* watchtGetPackageItem() {
  yield takeLatest('GET_PACKAGE_ITEM', getPackageItem)
}

