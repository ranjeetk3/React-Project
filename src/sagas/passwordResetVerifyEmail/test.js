// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { passwordResetVerifyEmail } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Password Reset Verify Email Saga', () => {

  describe('default', () => {

    // note that the email here matches our mock successful request
    const action = {
      payload: {
        user: {
          email: 'john@smith.com'
        }
      }
    }
    const saga = passwordResetVerifyEmail(action)

    const value1 = saga.next().value
    it('it should fire a "PASSWORD_RESET_REQUEST_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PASSWORD_RESET_REQUEST_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to verify email exists in database or not', () => {
      chai.expect(value2).to.deep.equal(call(api.postResetPasswordVerifyEmail, action.payload.user))
    })

    const value3 = saga.next().value
    it('it should fire a "RESET_PASSWORD_VERIFIED_EMAIL_SUCCESS" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'RESET_PASSWORD_VERIFIED_EMAIL_SUCCESS',
        payload: {
          response: undefined
        }
      }))
    })

    const value4 = saga.next().value
    it('it should redirect to the page to show meesage or option of send email link again', () => {
      chai.expect(value4).to.deep.equal(put(push('/passwordResetEmailLink')))
    })
    
    const value5 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value5).to.equal(true)
    })

  })

})
