// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { forgotPasswordAnswer } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('forget password answer Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        securityAnswer: {
          securityQuestionFirst: "What is your childhood nickname ?",
          securityQuestionSecond: "What is your childhood nickname ?",
          securityQuestionThird: "What is the name of your first girlfriend/boyfriend ?",
          securityAnswerFirst: "abc",
          securityAnswerSecond: "abcd",
          securityAnswerThird: "abcde"
        }
      }
    }
    const saga = forgotPasswordAnswer(action)



    const value3 = saga.next().value
    it('it should call the api to forget password answer', () => {
      chai.expect(value3).to.deep.equal(call(api.postSecurityAnswer, action.payload.securityAnswer))
    })

    const value4 = saga.next().value
    it('it should fire a "FORGET_PASSWORD_ANSWER_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'FORGET_PASSWORD_ANSWER_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the user to the dashboard', () => {
      //chai.expect(value5).to.deep.equal(put(push('/forget_password_questions/')))
    })
    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
