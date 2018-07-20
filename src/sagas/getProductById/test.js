// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { getProductById } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Get Product By Id Saga', () => {
  describe('default', () => {
	const action = {
			payload: {
				id:1
			}
		}
    const saga = getProductById(action)

    const value1 = saga.next().value
    it('it should fire a "PRODUCT_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'PRODUCT_STARTED'}))
    })
	
    const value2 = saga.next().value
    it('it should call the api to get product by ID', () => {
      chai.expect(value2).to.deep.equal(call(api.getProductById, action.payload.id))
    })

    const value3 = saga.next().value
    it('it should fire a "GET_PRODUCT_BY_ID_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'GET_PRODUCT_BY_ID_SUCCEEDED',
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
