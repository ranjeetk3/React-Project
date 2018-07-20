// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import FormBlock from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('FormBlock Component', () => {

  const defaultProps = {
    title: 'My title'
  }

  describe('form-block', () => {

    describe('default', () => {

      it('it should not have a right margin', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element).to.not.have.style('margin-right')
      })

    })

    describe('ordinal: "first"', () => {

      it('it should have a right margin of 10px', () => {
        const element = shallow(<FormBlock {...defaultProps} ordinal="first" />)
        chai.expect(element).to.have.style('margin-right', '10px')
      })

    })

    describe('ordinal: "last"', () => {

      it('it should have a left margin of 10px', () => {
        const element = shallow(<FormBlock {...defaultProps} ordinal="last" />)
        chai.expect(element).to.have.style('margin-left', '10px')
      })

    })

  })

  describe('block-title', () => {

    describe('default', () => {

      it('it should exist', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-title').length).to.equal(1)
      })

      it('it should have the text "My title"', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-title')).to.have.text('My title')
      })

    })

  })

  describe('block-instruction', () => {

    describe('default', () => {

      it('it should exist', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-instruction').length).to.equal(1)
      })

      it('it should have the style display: none', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-instruction')).to.have.style('display', 'none')
      })

    })

    describe('instruction: "test instruction"', () => {

      const props = Object.assign({}, defaultProps, {
        instruction: 'test instruction'
      })

      it('it should have the style display: block', () => {
        const element = shallow(<FormBlock {...props} />)
        chai.expect(element.find('block-instruction')).to.have.style('display', 'block')
      })

      it('it should have the text "test instruction"', () => {
        const element = shallow(<FormBlock {...props} />)
        chai.expect(element.find('block-instruction')).to.have.text('test instruction')
      })

    })

  })

  describe('block-required', () => {

    describe('default', () => {

      it('it should exist', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-required').length).to.equal(1)
      })

      it('it should have the style display: none', () => {
        const element = shallow(<FormBlock {...defaultProps} />)
        chai.expect(element.find('block-required')).to.have.style('display', 'none')
      })

    })

    describe('isRequired: true', () => {

      const props = Object.assign({}, defaultProps, {
        isRequired: true
      })

      it('it should have the style display: block', () => {
        const element = shallow(<FormBlock {...props} />)
        chai.expect(element.find('block-required')).to.have.style('display', 'block')
      })

    })

  })

})