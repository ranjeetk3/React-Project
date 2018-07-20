import "babel-polyfill";
import { takeLatest, takeEvery, delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import liveApi from '../../services/api/index.js'
import testApi from '../../services/api/mock.js'

const api = (process.env.test) ? testApi : liveApi

export function* landingPage(action) {
  const tokenObject = action.payload.userToken
  const sessionToken = tokenObject.sessionToken
  const userId = tokenObject.userId
  if (typeof sessionToken !== 'undefined' && sessionToken !== null && typeof userId !== 'undefined' && userId !== null) {
    try {
      const response = yield call(api.getUserById, tokenObject)
      const user = response.data
        if (user.status  == 'active') {
          const userType = user.type
          switch (userType) {
            case 'admin':
              yield put({
                type: 'DUMMY_PAGE', 
                payload: {
                  response: 'This is admin page'
                }
              });
              yield put(push('/dummyPage'))
              break
            case 'manager':
              const hasManagerCompletedOnboarding = user.hasCompletedOnboarding
              if (hasManagerCompletedOnboarding) {
              yield put({
                type: 'DUMMY_PAGE', 
                payload: {
                  response: 'This is manager admin page'
                }
              });
              yield put(push('/dummyPage'))
              } else {
                const managerLastOnboardingStep = user.lastOnboardingStep
                yield put({
                  type: 'ONBOARDING_STEPS', 
                  payload: {
                    response: managerLastOnboardingStep
                  }
                });
                yield put(push('/onBoarding'))
              }
              break
            case 'employee':
              const hasEmployeeCompletedOnboarding = user.hasCompletedOnboarding
              if (hasEmployeeCompletedOnboarding) {
                yield put({
                type: 'DUMMY_PAGE', 
                payload: {
                  response: 'This is employee admin page'
                }
              });
              } else {
                const employeeLastOnboardingStep = user.lastOnboardingStep
                  yield put({
                  type: 'DUMMY_PAGE', 
                  payload: {
                    response: 'This is manager onboarding section of step ' + employeeLastOnboardingStep
                  }
                });
                yield put(push('/dummyPage'))
              }
              break
            default:
              break
          }
        } else {
          localStorage.removeItem('USER_ID')
          localStorage.removeItem('SESSION_TOKEN')
          yield put(push('/login'))
        }
    } catch (e) {
      localStorage.removeItem('USER_ID')
      localStorage.removeItem('SESSION_TOKEN')
      yield put(push('/login'))
    }
  } else {
    yield put(push('/login'))
  }
}

export default function* watchLandingPage() {
  yield takeLatest('CHECK_LOCAL_STORAGE', landingPage)
}
