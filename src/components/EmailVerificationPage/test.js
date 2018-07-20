// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import { EmailVerificationPage } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('EmailVerificationPage Component', () => {

  let dispatchedEvent = null;
  const defaultProps = {
    query: {
      email: 'ranjeet9@mailinator.com',
      token: '7381d0a6c02bb47baf024105ee49a1a832d89dc3e4df0f1225c390843ee7577f'
    },
    dispatch: function(event) { dispatchedEvent = event }
  }

  describe('default', () => {


  })  

})