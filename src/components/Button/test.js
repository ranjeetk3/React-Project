// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import Button from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('Button Component', () => {

  let count = 0;
  const defaultProps = {
    onClick: function() { count++ }
  }

  describe('default', () => {

    it('it should start with a count of 0', () => {
      chai.expect(count).to.equal(0)
    })

    it('it should be a button element', () => {
      const element = shallow(<Button {...defaultProps} />)
      chai.expect(element).to.have.tagName('button')
    })

    it('it should increment the count via the onClick prop when clicked', () => {
      const element = shallow(<Button {...defaultProps} />)
      element.simulate('click');
      chai.expect(count).to.equal(1)
    })

  })

  describe('type = "submit"', () => {

    it('it should have a type of "submit"', () => {
      const element = shallow(<Button {...defaultProps} type="submit" />)
      chai.expect(element).to.have.attr('type', 'submit')
    })

  })

})