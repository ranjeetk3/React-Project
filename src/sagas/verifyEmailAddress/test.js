// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { verifyEmailAddress } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Verify Email Address Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        verificationData: {
          email: 'ranjeet9@mailinator.com',
          token: 'af1c0a3d242ae96389b58e4dcff2b27f39543b3a8b46edb08c3599a3ba58c41e'
        }
      }
    }
    const saga = verifyEmailAddress(action)

    const value1 = saga.next().value
    it('it should fire a "EMAIL_VERIFICATION_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'EMAIL_VERIFICATION_STARTED'}))
    })

    const value3 = saga.next().value
    it('it should call the api to verify the email address', () => {
      chai.expect(value3).to.deep.equal(call(api.postEmailVerification, action.payload.verificationData))
    })

    const value4 = saga.next().value
    it('it should fire a "EMAIL_VERIFICATION_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'EMAIL_VERIFICATION_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the user to the dashboard', () => {
      chai.expect(value5).to.deep.equal(put(push('/verify/')))
    })
    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
