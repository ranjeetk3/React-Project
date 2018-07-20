// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import { RegistrationForm } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('RegistrationForm Component', () => {

  let dispatchedEvent = null;
  const defaultProps = {
    form: {
      data: {
        salutation: 'Mr.',
        firstName: 'First',
        lastName: 'Last',
        phoneNumber: '123-456-789',
        emailAddress: 'email@site.com',
        emailAddressConfirmation: 'email@site.com',
        password: 'password',
        passwordConfirmation: 'password',
        companyRole: 'Role at company'
      }
    },
    dispatch: function(event) { dispatchedEvent = event }
  }

  describe('default', () => {

    it('it should start with no dispatched event', () => {
      chai.expect(dispatchedEvent).to.equal(null)
    })

    it('it should have one submit button', () => {
      const element = shallow(<RegistrationForm {...defaultProps} />)
      const submitButton = element.find('Button')
      chai.expect(submitButton.length).to.equal(1);
    })
  })

  describe('complete and valid', () => {
    it('it should dispatch a CREATE_USER event when the submit button is clicked', () => {
      const element = shallow(<RegistrationForm {...defaultProps} />)
      const submitButton = element.find('Button')
      submitButton.simulate('click', {
        preventDefault: function() { return }
      });
      chai.expect(dispatchedEvent).to.deep.equal({
        type: 'CREATE_USER',
        payload: {
          user: {
            salutation: defaultProps.form.data.salutation,
            firstName: defaultProps.form.data.firstName,
            lastName: defaultProps.form.data.lastName,
            email: defaultProps.form.data.emailAddress,
            phoneNumber: defaultProps.form.data.phoneNumber,
            password: defaultProps.form.data.password,
            companyRole: defaultProps.form.data.companyRole
          }
        } 
      })
    })
  })  
})