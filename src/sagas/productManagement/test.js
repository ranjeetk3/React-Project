// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { productManagement } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Product Management Saga', () => {
  describe('default', () => {
    const saga = productManagement()

    const value1 = saga.next().value
    it('it should fire a "PRODUCT_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PRODUCT_STARTED'}))
    })
	
    const value2 = saga.next().value
    it('it should call the api to get products', () => {
      chai.expect(value2).to.deep.equal(call(api.getProducts))
    })

    const value3 = saga.next().value
    it('it should fire a "PRODUCT_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'PRODUCT_SUCCEEDED',
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
