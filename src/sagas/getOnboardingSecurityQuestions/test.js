// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { createUser } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Create User Saga', () => {

  describe('default', () => {

    // note that the email here matches our mock successful request
    const action = {
      payload: {
        user: {
          firstName: 'Scott',
          lastName: 'Allen',
          email: 'albert@mycorp.com'
        }
      }
    }
    const saga = createUser(action)

    const value1 = saga.next().value
    it('it should fire a "SIGNUP_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'SIGNUP_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should fire a "SHOW_WAITING_MODAL" action', () => {
      chai.expect(value2).to.deep.equal(put({type: 'SHOW_WAITING_MODAL'}))
    })

    const value3 = saga.next().value
    it('it should call the api to create the user', () => {
      chai.expect(value3).to.deep.equal(call(api.postUser, action.payload.user))
    })

    const value4 = saga.next().value
    it('it should fire a "SIGNUP_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'SIGNUP_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the user to the signup success page', () => {
      chai.expect(value5).to.deep.equal(put(push('/signup/success/')))
    })

    const value6 = saga.next().value
    it('it should fire a "HIDE_WAITING_MODAL" action', () => {
      chai.expect(value6).to.deep.equal(put({
        type: 'HIDE_WAITING_MODAL'
      }))
    })

    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
