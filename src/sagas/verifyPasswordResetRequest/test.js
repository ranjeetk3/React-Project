// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { verifyPasswordResetRequest } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Verify Password Reset Request Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        verificationData: {
          email: 'scott@indusriverventures.com',
          token: '1234'
        }
      }
    }
    const saga = verifyPasswordResetRequest(action)

    const value1 = saga.next().value
    it('it should fire a "PASSWORD_RESET_REQUEST_VERIFICATION_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PASSWORD_RESET_REQUEST_VERIFICATION_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should fire a "SHOW_WAITING_MODAL" action', () => {
      chai.expect(value2).to.deep.equal(put({type: 'SHOW_WAITING_MODAL'}))
    })

    const value3 = saga.next().value
    it('it should call the api to verify the password reset request', () => {
      chai.expect(value3).to.deep.equal(call(api.postPasswordResetRequestVerification, action.payload.verificationData))
    })

    const value4 = saga.next().value
    it('it should fire a "PASSWORD_RESET_REQUEST_VERIFICATION_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'PASSWORD_RESET_REQUEST_VERIFICATION_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should fire a "HIDE_WAITING_MODAL" action', () => {
      chai.expect(value5).to.deep.equal(put({
        type: 'HIDE_WAITING_MODAL'
      }))
    })

    const value6 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value6).to.equal(true)
    })

  })

})
