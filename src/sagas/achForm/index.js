import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* achForm(action) {
  try {
   const response = yield call(api.postAchForm, action.payload.achDetails);
    yield put({
      type: 'ACH_FORM_SUCCEEDED', 
      payload: {
        response: response
      }
    });
	yield put(push('/profile_dashboard'))
  } catch (e) {
    yield put({
      type: 'ACH_FORM_FAILED',
      payload: {
        error: e.message
      }
    });
  }
}

export default function* watchachForm() {
  yield takeLatest('POST_ACH_DETAILS', achForm)
}
