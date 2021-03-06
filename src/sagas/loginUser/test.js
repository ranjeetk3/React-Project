// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { loginUser } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Login User Saga', () => {

  describe('default', () => {

    // note that the email here matches our mock successful request
    const action = {
      payload: {
        user: {
          email: 'albert@mycorp.com',
          password: 'password'
        }
      }
    }
    const saga = loginUser(action)

    const value1 = saga.next().value
    it('it should fire a "LOGIN_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'LOGIN_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to login user', () => {
      chai.expect(value2).to.deep.equal(call(api.postLoginUser, action.payload.user))
    })
    
    const value3 = saga.next().value
    it('it should fire a "LOGIN_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({type: 'LOGIN_SUCCEEDED'}))
    })
    
    const value4 = saga.next().value
    it('it should fire a "ONBOARDING_STEPS" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'ONBOARDING_STEPS',
        payload: {
          response: 0
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect to onboarding steps', () => {
      chai.expect(value5).to.deep.equal(put(push('/onBoarding')))
    })
    
    const value6 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value6).to.equal(true)
    })
  })
})
