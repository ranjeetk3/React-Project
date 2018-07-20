// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { timeCard } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Time Card Saga', () => {

  describe('default', () => {
    
    const action = {
      payload: {
        timeCardId: 2
      }
    }
    const saga = timeCard(action)

    const value1 = saga.next().value
    it('it should call the api to create the user', () => {
      chai.expect(value1).to.deep.equal(call(api.getTimeCard, action.payload.timeCardId))
    })

    const value2 = saga.next().value
    it('it should fire a "TIME_CARD_SUCCEEDED" action', () => {
      chai.expect(value2).to.deep.equal(put({
        type: 'TIME_CARD_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })
    
    const value3 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value3).to.equal(true)
    })

  })
})
