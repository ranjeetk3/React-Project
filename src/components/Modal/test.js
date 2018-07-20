// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
// note that we are importing the raw component here b/c the default export uses Radium's animation helpers
import { Modal } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('Modal Component', () => {

  const defaultProps = {
    modal: {
      type: 'error'
    }
  }

  describe('default', () => {

    it('it should be a app-modal element', () => {
      const element = shallow(<Modal {...defaultProps} />)
      chai.expect(element).to.have.tagName('app-modal')
    })

    it('it should contain a content element', () => {
      const element = shallow(<Modal {...defaultProps} />)
      chai.expect(element).to.have.descendants('content')
    })

  })

})