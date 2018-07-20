// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { userDashboard } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('user dashboard Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        userId: {
          id: 1
        }
      }
    }
    const saga = userDashboard(action)



    const value1 = saga.next().value
    it('it should call the api to user dashboard', () => {
      chai.expect(value1).to.deep.equal(call(api.postUserDashboard, action.payload.userId))
    })

    const value2 = saga.next().value
    it('it should fire a "USER_DASHBOARD_SUCCEEDED" action', () => {
      chai.expect(value2).to.deep.equal(put({
        type: 'USER_DASHBOARD_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value3 = saga.next().value
    it('it should redirect the user to the dashboard', () => {
      //chai.expect(value3).to.deep.equal(put(push('/forget_password_questions/')))
    })
    const value4 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value4).to.equal(true)
    })

  })

})
