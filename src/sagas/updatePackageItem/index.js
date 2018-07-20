import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* updatePackageItem(action) {
    try 
	{
		const response = yield call(api.updatePackageItems, action.payload.upadatePackageItemDetails)
		yield put({
			type: 'UPDATE_PACKAGE_ITEM_SUCCEEDED', 
			payload: {
				response: response
			}
		})
		yield put(push('/package'))
    } 
	catch (e) 
	{
		yield put({
			type: 'UPDATE_PACKAGE_ITEM_FAILED',
			payload: {
				error: e.message
			}
		})
	}
}

export default function* watchUpdatePackageItem() {
  yield takeLatest('UPDATE_PACKAGE_ITEM', updatePackageItem)
}
