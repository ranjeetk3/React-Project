// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { addManufacturer } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Add Manufacturer Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        addManufacturerDetails: {
companyName : "test",
country : "USA",
streetAddress : "232test",
bldgUnitSuite : "test",
city : "Newyork",
state : "NY",
zip : "445A78",
salesPhone : "6666666666",
emailAddress : "test2@test.com",
supportPhone : "5555555555",
tollFreePhone : "7777777777",
fax : "8888888888",
website : "test2@test.com"
        }
      }
    }
    const saga = addManufacturer(action)



    const value1 = saga.next().value
    it('it should call the api to Add Manufacturer', () => {
      chai.expect(value1).to.deep.equal(call(api.addManufacturer, action.payload.addManufacturerDetails))
    })

    const value2 = saga.next().value
    it('it should fire a "ADD_MANUFACTURER_SUCCEEDED" action', () => {
      chai.expect(value2).to.deep.equal(put({
        type: 'ADD_MANUFACTURER_SUCCEEDED',
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
