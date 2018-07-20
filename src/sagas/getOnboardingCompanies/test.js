// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { getOnboardingCompanies } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('GET ONBOARDING COMPANIES Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        userId: '1',
      }
    }
    const saga = getOnboardingCompanies(action)

    const value1 = saga.next().value
    it('it should fire a "COMPANY_INFORMATION_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'COMPANY_INFORMATION_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to get comapnies list on the basis of userId', () => {
      chai.expect(value2).to.deep.equal(call(api.getOnboardingCompanies, action.payload.userId))
    })

    const value3 = saga.next().value
    it('it should fire a "ONBOARDING_COMPANIES_GET_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'ONBOARDING_COMPANIES_GET_SUCCEEDED',
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
