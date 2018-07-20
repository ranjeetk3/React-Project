// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { getSoftwareOptions } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Get Software Options Saga', () => {
  describe('default', () => {
    const saga = getSoftwareOptions()

    const value1 = saga.next().value
    it('it should call the api to get software options', () => {
      chai.expect(value1).to.deep.equal(call(api.getSoftwareOptions))
    })
	
	const value2 = saga.next().value
    it('it should fire a "SOFTWARE_OPTIONS_GET_SUCCEEDED" action', () => {
      chai.expect(value2).to.deep.equal(put({
        type: 'SOFTWARE_OPTIONS_GET_SUCCEEDED',
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
