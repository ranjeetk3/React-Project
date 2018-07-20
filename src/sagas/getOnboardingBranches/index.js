import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'
const api = (process.env.test) ? testApi : liveApi
export function* getOnboardingBranches(action) {
  try {
    yield put({ type: 'COMPANY_BRANCH_STARTED' })
    const response = yield call(api.getOnboardingBranches, action.payload.parentCompanyDetails)
    yield put({
      type: 'ONBOARDING_BRANCH_GET_SUCCEEDED', 
      payload: {
        response: response
      }
    });
  } catch (e) {
    yield put({
      type: 'ONBOARDING_BRANCH_GET_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchGetOnboardingBranches() {
  yield takeLatest('GET_ONBOARDING_BRANCHES', getOnboardingBranches)
}

