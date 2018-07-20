// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { saveOnboardingSecurityQuestions } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Save Onboarding Security Questions Saga', () => {

  describe('default', () => {
    const action = {
      payload: {
        securityData: {
          userId:1,
          securityQuestionFirst : "1",
          securityAnswerFirst: "Answer1",
          securityQuestionSecond: "2",
          securityAnswerSecond: "Answer2",
          securityQuestionThird: "3",
          securityAnswerThird: "Answer3"
        }
      }
    }
    const saga = saveOnboardingSecurityQuestions(action)

    const value1 = saga.next().value
    it('it should fire a "ONBOARDING_QUESTIONS_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'ONBOARDING_QUESTIONS_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to save security questions and answers', () => {
      chai.expect(value2).to.deep.equal(call(api.postOnboardingSecurityQuestions, action.payload.securityData))
    })

    const value3 = saga.next().value
    it('it should fire a "ONBOARDING_QUESTIONS_SAVE_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({type: 'ONBOARDING_QUESTIONS_SAVE_SUCCEEDED'}))
    })
    
    const value4 = saga.next().value
    it('it should fire a "ONBOARDING_STEPS" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'ONBOARDING_STEPS',
        payload: {
          response: 1
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the next step of on boardig proccess', () => {
      chai.expect(value5).to.deep.equal(put(push('/onBoarding')))
    })

    const value6 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value6).to.equal(true)
    })
  })
})
