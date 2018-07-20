// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { creditCardForm } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('credit card form Saga', () => {

  describe('default', () => {
   
    const action = {
      payload: {
        user: {
				 "cardName" : "Visa",
         "cardNumber" : "4356564556565",
         "expiryMonth" : "01",
				 "expiryYear" : "2020",
				 "cvc" : "123",
         "promoCode" : "8745"
        }
      }
    }
    const saga = creditCardForm(action)
		
    const value3 = saga.next().value
    it('it should call the api to create the user', () => {
      chai.expect(value3).to.deep.equal(call(api.postCreditCardForm, action.payload.creditDtails))
    })

    const value4 = saga.next().value
    it('it should fire a "CREDITCARD_FORM_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'CREDITCARD_FORM_SUCCEEDED',
        payload: {
          response: undefined
        }
      }))
    })

    const value5 = saga.next().value
    it('it should redirect the user to the credit card form success page', () => {
     // chai.expect(value5).to.deep.equal(put(push('/signup/success/')))
    })

    const value7 = saga.next().done
    it('it should be finished', () => {
      chai.expect(value7).to.equal(true)
    })

  })

})
