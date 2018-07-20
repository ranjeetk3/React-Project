// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { deleteProduct } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Delete Product Saga', () => {
  describe('default', () => {
	const action = {
			payload: {
				id:1
			}
		}
    const saga = deleteProduct(action)

    const value1 = saga.next().value
    it('it should fire a "PRODUCT_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PRODUCT_STARTED'}))
    })
	
    const value2 = saga.next().value
    it('it should call the api to delete product by ID', () => {
      chai.expect(value2).to.deep.equal(call(api.deleteProduct, action.payload.id))
    })

	const value3 = saga.next().value
    it('it should fire a "GET_PRODUCTS" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'GET_PRODUCTS'
      }))
    })
	
    const value4 = saga.next().value
    it('it should fire a "DELETE_PRODUCT_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'DELETE_PRODUCT_SUCCEEDED',
		payload: {
          response: undefined
        }
      }))
    })
    
    const value5 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value5).to.equal(true)
    })
  })
})
