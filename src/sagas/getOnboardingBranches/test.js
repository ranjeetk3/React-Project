// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { getOnboardingBranches } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('GET ONBOARDING BRANCHEES Saga', () => {

  describe('default', () => {

    const action = {
      payload: {
        companyId: '1',
      }
    }
    const saga = getOnboardingBranches(action)

    const value1 = saga.next().value
    it('it should fire a "COMPANY_BRANCH_STARTED" action', () => {
      chai.expect(value1).to.deep.equal(put({type: 'COMPANY_BRANCH_STARTED'}))
    })

    const value2 = saga.next().value
    it('it should call the api to get branch list on the basis of company id', () => {
      chai.expect(value2).to.deep.equal(call(api.getOnboardingBranches, action.payload.companyId))
    })

    const value3 = saga.next().value
    it('it should fire a "ONBOARDING_BRANCH_GET_SUCCEEDED" action', () => {
      chai.expect(value3).to.deep.equal(put({
        type: 'ONBOARDING_BRANCH_GET_SUCCEEDED',
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
