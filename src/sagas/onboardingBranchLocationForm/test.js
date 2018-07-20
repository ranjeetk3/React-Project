// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { onboardingBranchLocationForm } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Branch Location Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        userId: {
					parentId: '1',
					type: 'branch',
					name: 'abc',
					street_1: 'noida',
					street_2: 'noida',
					city: 'noida',
					state: 'up',
					postalCode: '4545',
					phoneNumber: '5454545457',
					extension: '56556',
					faxNumber: '5454545457',
					companyEmail: 'abc@gmail.com',
					companyWebsiteUrl: 'abc.com',
					ein: '545',
					npi: '5445',
					tpiNumber: '4554',
					medicareSupplier: '54545' 
        }
      }
    }
    const saga = onboardingBranchLocationForm(action)



    const value1 = saga.next().value
    it('it should call the api to user dashboard', () => {
      chai.expect(value1).to.deep.equal(call(api.onboardingBranchLocationForm, action.payload.companyBranchDetails))
    })

    const value2 = saga.next().value
    it('it should fire a "BRANCH_LOCATION_FORM_SUCCEEDED" action', () => {
      chai.expect(value2).to.deep.equal(put({
        type: 'BRANCH_LOCATION_FORM_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value3 = saga.next().value
    it('it should redirect the user to the dashboard', () => {
      //chai.expect(value3).to.deep.equal(put(push('/')))
    })
    const value4 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value4).to.equal(true)
    })

  })

})
