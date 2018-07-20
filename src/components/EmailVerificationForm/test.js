// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import { EmailVerificationForm } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('EmailVerificationForm Component', () => {

  let dispatchedEvent = null;
  const defaultProps = {
    email: 'ranjeet9@mailinator.com',
    token: '7381d0a6c02bb47baf024105ee49a1a832d89dc3e4df0f1225c390843ee7577f',
    form: {
      isSubmitting: true
    },
    dispatch: function(event) { dispatchedEvent = event }
  }

  describe('default', () => {

    it('it should show a loading graphic', () => {
      const element = shallow(<EmailVerificationForm {...defaultProps} />)
      const loadingGraphic = element.find('ReloadingGraphic')
      chai.expect(loadingGraphic.length).to.equal(1);
    })

    it('it should immediately dispatch a VERIFY_EMAIL_ADDRESS event', () => {
      const element = shallow(<EmailVerificationForm {...defaultProps} />)
      chai.expect(dispatchedEvent).to.deep.equal({
        type: 'VERIFY_EMAIL_ADDRESS',
        payload: {
          verificationData: {
            email: 'ranjeet9@mailinator.com',
            token: '7381d0a6c02bb47baf024105ee49a1a832d89dc3e4df0f1225c390843ee7577f'
          }
        } 
      })
    })

  })

  describe('error', () => {

    const formWithError = {
      isSubmitting: false,
      error: "Test error message"
    }

    it('it should not show a loading graphic', () => {
      const element = shallow(<EmailVerificationForm {...defaultProps} form={formWithError} />)
      const loadingGraphic = element.find('ReloadingGraphic')
      chai.expect(loadingGraphic.length).to.equal(0);
    })

    it('it should show an error message', () => {
      const element = shallow(<EmailVerificationForm {...defaultProps} form={formWithError} />)
      const errorMessage = element.find('error-message')
      chai.expect(errorMessage.length).to.equal(1);
    })

    it('the error message should say "Test error message"', () => {
      const element = shallow(<EmailVerificationForm {...defaultProps} form={formWithError} />)
      const errorMessage = element.find('error-message')
      chai.expect(errorMessage).to.have.text("Test error message");
    })

  })  

})