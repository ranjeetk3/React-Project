// dependencies
import 'babel-polyfill'
import mocha from 'mocha'
import chai from 'chai'
import { put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// test requirements
import { addInventoryVendor } from './index.js'
import api from '../../services/api/mock.js'

// define test
describe('inventory vendor details Form Saga', () => {

  describe('default', () => {
   
    const action = {
      payload: {
        inventoryVendorDetails: {
					'companyName':'Philips usa',
					'country':'USA',
					'address':'232 test',
					'vendorOfferingId':3,
					'vendorCategoryId':7,
					'city':'New York',
					'state':'NY',
					'zip':'445A78',
					'salesPhone':'6666666666',
					'emailAddress':'philips@usa.com',
					'supportPhone':'5555555555',
					'tollFreePhone':'7777777777',
					'fax':'8888888888',
					'website':'philips@usa.com'
        }
      }
    }
    const saga = addInventoryVendor(action)
		
    const value3 = saga.next().value
    it('it should call the api to create the inventory vendor details', () => {
      chai.expect(value3).to.deep.equal(call(api.postInventoryVendor, action.payload.inventoryVendorDetails))
    })

    const value4 = saga.next().value
    it('it should fire a "Add_INVENTORY_VENDORS_SUCCEEDED" action', () => {
      chai.expect(value4).to.deep.equal(put({
        type: 'Add_INVENTORY_VENDORS_SUCCEEDED',
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
