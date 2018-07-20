// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { forgetPasswordReset } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Forget password reset Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        passwordReset: {
          password: 'Ranjeet@123'
        }
      }
    }
    const saga = forgetPasswordReset(action)

    const value1 = saga.next().value
    it('it should fire a "FORGET_PASSWORD_RESET_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'FORGET_PASSWORD_RESET_STARTED'}))
    })

    const value3 = saga.next().value
    it('it should call the api Forget password reset ', () => {
      chai.expect(value3).to.deep.equal(call(api.postPasswordReset, action.payload.passwordReset))
    })

    const value4 = saga.next().value
    it('it should fire a "FORGET_PASSWORD_RESET_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'FORGET_PASSWORD_RESET_SUCCEEDED',
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
