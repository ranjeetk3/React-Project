// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { getInventoryVendors } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('GET INVENTORY VENDORS Saga', () => {

  describe('default', () => {

    
    const saga = getInventoryVendors()

    const value1 = saga.next().value
    it('it should fire a "GET_INVENTORY_VENDORS_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'GET_INVENTORY_VENDORS_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to get comapnies list on the basis of userId', () => {
      chai.expect(value2).to.deep.equal(call(api.getInventoryVendors))
    })

    const value3 = saga.next().value
    it('it should fire a "GET_INVENTORY_VENDORS_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'GET_INVENTORY_VENDORS_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })
    
    const value4 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value4).to.equal(true)
    })

  })

})
