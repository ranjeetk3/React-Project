import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* onboardingBranchLocationForm(action) {
  try {
   const response = yield call(api.postBranchLocationForm, action.payload.companyBranchDetails);
    yield put({
      type: 'BRANCH_LOCATION_FORM_SUCCEEDED', 
      payload: {
        response: response
      }
    });
    yield put({
      type: 'ONBOARDING_STEPS', 
      payload: {
        response: 3
      }
    });
  } catch (e) {
    yield put({
      type: 'BRANCH_LOCATION_FORM_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchonboardingBranchLocationForm() {
  yield takeLatest('POST_BRANCH_LOCATION_DETAILS', onboardingBranchLocationForm)
}
