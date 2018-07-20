// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { updateProduct } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Update Product Saga', () => {
  describe('default', () => {
		const action = {
			payload: {
				data: {
					id : 1,
					category : [1],
					name : 'Test',
					description : 'Description',
					price : '98',
					imgArray : []
				}
			}
		}
    const saga = updateProduct(action)

    const value1 = saga.next().value
    it('it should fire a "PRODUCT_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PRODUCT_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to save product details', () => {
      chai.expect(value2).to.deep.equal(call(api.putInventoryProduct, action.payload.data))
    })

	const value3 = saga.next().value
    it('it should fire a "GET_PRODUCTS" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'GET_PRODUCTS'
      }))
    })
	
    const value4 = saga.next().value
    it('it should fire a "UPDATE_PRODUCT_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'UPDATE_PRODUCT_SUCCEEDED'
      }))
    })
    
    const value5 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value5).to.equal(true)
    })
  })
})
