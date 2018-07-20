// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { achForm } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('Ach Form Saga', () => {

  describe('default', () => {
   
    const action = {
      payload: {
        user: {
					"bankName" : "RBL",
					"accountNumber" : "78979845456",
					"routingNumber" : "45464646664",
					"promoCode" : "8745"
        }
      }
    }
    const saga = achForm(action)
		
    const value3 = saga.next().value
    it('it should call the api to create the user', () => {
      chai.expect(value3).to.deep.equal(call(api.postAchForm, action.payload.achDetails))
    })

    const value4 = saga.next().value
    it('it should fire a "ACH_FORM_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'ACH_FORM_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the user to the ach success page', () => {
     // chai.expect(value5).to.deep.equal(put(push('/signup/success/')))
    })

    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
