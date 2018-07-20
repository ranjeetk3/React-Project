// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
import ToolTip from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('ToolTip Component', () => {

  const defaultProps = {
    message: 'test message',
    type: 'default',
    isFloating: false
  }

  describe('tool-tip', () => {

    describe('default', () => {

      const element = shallow(<ToolTip {...defaultProps} />)
      const tipMessage = element.find('tip-message')
      const tipArrow = element.find('tip-arrow')

      it('the opacity should be 0', () => {
        chai.expect(element).to.have.style('opacity', '0')
      })

      it('it should have a tip-arrow element', () => {
        chai.expect(tipArrow.length).to.equal(1)
      })

      it('the tip-arrow element should have a style of display: none', () => {
        chai.expect(tipArrow).to.have.style('display', 'none')
      })

      it('it should have a tip-message element', () => {
        chai.expect(tipMessage.length).to.equal(1)
      })

      it('the text of the tip-message element should equal the message prop', () => {
        chai.expect(tipMessage.text()).to.equal(defaultProps.message)
      })

    })

    describe('isVisible: true', () => {

      const element = shallow(<ToolTip {...defaultProps} isVisible={true} />)
      const tipMessage = element.find('tip-message')
      const tipArrow = element.find('tip-arrow')

      it('the opacity should be 1', () => {
        chai.expect(element).to.have.style('opacity', '1')
      })

    })

    describe('type: error', () => {

      const element = shallow(<ToolTip {...defaultProps} type='error' />)
      const tipMessage = element.find('tip-message')
      const tipArrow = element.find('tip-arrow')

      it('the background color should be "rgba(255,0,0,1)"', () => {
        chai.expect(element).to.have.style('background-color', 'rgba(255,0,0,1)')
      })

      it('the tip-arrow element should have a style of display: block', () => {
        chai.expect(tipArrow).to.have.style('display', 'block')
      })

      it('the tip-arrow element should have a border bottom color of "rgba(255,0,0,1)"', () => {
        chai.expect(tipArrow).to.have.style('border-bottom-color', 'rgba(255,0,0,1)')
      })

    })

  })

})