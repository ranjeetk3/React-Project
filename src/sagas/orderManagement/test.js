// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { manufacturer } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Get Manufacturer', () => {
  describe('default', () => {
    const saga = manufacturer()
    const value3 = saga.next().value
    it('it should call the api to Get Manufacturer', () => {
      chai.expect(value3).to.deep.equal(call(api.getmanufacturer))
    })

    const value4 = saga.next().value
    it('it should fire a "MANUFACTURER_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'MANUFACTURER_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })
   
    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
