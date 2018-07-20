import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* addPackage(action) {
    try {
    const response = yield call(api.postPackage, action.payload.addPackageDetails);
    yield put(push('/package'))
  } catch (e) {
    yield put({
      type: 'ADD_PACKAGE_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchAddPackage() {
  yield takeLatest('ADD_PACKAGE', addPackage)
}
