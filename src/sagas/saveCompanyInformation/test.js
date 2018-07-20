// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { saveCompanyInformation } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Save Company Information Saga', () => {

  describe('default', () => {
    const action = {
      payload: {
        companyDetails: {
        name : "companyName",
        street_1: "street1",
        street_2: "street2",
        city: "city",
        state: "state",
        postalCode: "1234-674",
        npi: "123te",
        }
      }
    }
    const saga = saveCompanyInformation(action)

    const value1 = saga.next().value
    it('it should fire a "COMPANY_INFORMATION_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'COMPANY_INFORMATION_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to save company details', () => {
      chai.expect(value2).to.deep.equal(call(api.postSaveCompanyInformation, action.payload.companyDetails))
    })

    const value3 = saga.next().value
    it('it should fire a "COMPANY_INFORMATION_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'COMPANY_INFORMATION_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })
    
    const value4 = saga.next().value
    it('it should fire a "ONBOARDING_STEPS" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'ONBOARDING_STEPS',
        payload: {
          response: 2
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the next step of on boardig proccess', () => {
      chai.expect(value5).to.deep.equal(put(push('/onBoarding')))
    })

    const value6 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value6).to.equal(true)
    })
  })
})
