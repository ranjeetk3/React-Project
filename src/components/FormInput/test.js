// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import FormInput from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('FormInput Component', () => {

  const defaultProps = {
    type: 'text',
    value: 'test',
    placeholder: 'This is a test',
    doesMatch: false
  }

  describe('default', () => {

    const element = shallow(<FormInput {...defaultProps} />)
    const input = element.find('input')

    it('it should have a tag name of "form-input"', () => {
      chai.expect(element).to.have.tagName('form-input')
    })

    it('it should contain an input element', () => {
      chai.expect(input.length).to.equal(1)
    })

    it('the input element should have a type of "text"', () => {
      chai.expect(input).to.have.attr('type', 'text')
    })

    it('the input element should have a value of "test"', () => {
      chai.expect(input).to.have.value('test')
    })

    it('the input element should have a placeholder of "This is a test"', () => {
      chai.expect(input).to.have.attr('placeholder', 'This is a test')
    })

    it('the input element should have dark grey text', () => {
      chai.expect(input).to.have.style('color', '#333')
    })

  })

  describe('doesMatch: true', () => {

    const props = Object.assign({}, defaultProps, {
      doesMatch: true
    })

    it('the input element should have dark grey text', () => {
      const element = shallow(<FormInput {...props} />)
      chai.expect(element.find('input')).to.have.style('color', '#333')
    })

  })

})