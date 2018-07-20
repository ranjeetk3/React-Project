import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* deletePackage(action) {
  try {
		const response = yield call(api.deletePackage, action.payload.packageId);
		yield put(push('/package'))
	} catch (e) {
		yield put({
		  type: 'DELETE_PACKAGE_FAILED',
		  payload: {
			error: e.message
		  }
		});
	}
}

export default function* watchDeletePackage() {
  yield takeLatest('DELETE_PACKAGE', deletePackage)
}
