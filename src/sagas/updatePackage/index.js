import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* updatePackage(action) {
    try 
	{
		const response = yield call(api.updatePackage, action.payload.updatePackageDetails);
		yield put({
			type: 'UPDATE_PACKAGE_SUCCEEDED', 
			payload: {
				response: response
			}
		})
    } 
	catch (e) 
	{
		yield put({
			type: 'UPDATE_PACKAGE_FAILED',
			payload: {
				error: e.message
			}
		})
	}
}

export default function* watchUpdatePackage() {
  yield takeLatest('UPDATE_PACKAGE', updatePackage)
}
