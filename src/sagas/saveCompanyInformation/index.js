import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi
//const api = testApi
export function* saveCompanyInformation(action) {
  yield put({ type: 'COMPANY_INFORMATION_STARTED' })
  try {
    const response = yield call(api.postSaveCompanyInformation, action.payload.companyDetails)
    yield put({
      type: 'COMPANY_INFORMATION_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put({
      type: 'ONBOARDING_STEPS', 
      payload: {
        response: 2
      }
    });
    yield put(push('/onBoarding'))
  } catch (e) {
    yield put({
      type: 'COMPANY_INFORMATION_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchSaveCompanyInformation() {
  yield takeLatest('SAVE_COMPANY_INFORMATION', saveCompanyInformation)
}
