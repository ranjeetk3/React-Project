// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import { LoginForm } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('LoginForm Component', () => {

  let dispatchedEvent = null;
  const defaultProps = {
    form: {
      data: {
        emailAddress: 'email@site.com',
        password: 'somepassword'
      }
    },
    dispatch: function(event) { dispatchedEvent = event }
  }

  describe('default', () => {

    it('it should start with no dispatched event', () => {
      chai.expect(dispatchedEvent).to.equal(null)
    })

    it('it should have one submit button', () => {
      const element = shallow(<LoginForm {...defaultProps} />)
      const submitButton = element.find('Button')
      chai.expect(submitButton.length).to.equal(1);
    })

  })

  describe('complete and valid', () => {

    it('it should dispatch a LOG_IN_USER event when the submit button is clicked', () => {
      const element = shallow(<LoginForm {...defaultProps} />)
      const submitButton = element.find('Button')
      submitButton.simulate('click', {
        preventDefault: function() { }
      });
      chai.expect(dispatchedEvent).to.deep.equal({
        type: 'LOG_IN_USER',
        payload: {
          user: {
            email: defaultProps.form.data.emailAddress,
            password: defaultProps.form.data.password
          }
        } 
      })
    })

  })  

})