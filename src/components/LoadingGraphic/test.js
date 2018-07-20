// dependencies
import React from 'react' // eslint-disable-line no-unused-vars
import TestUtils from 'react-addons-test-utils'
import { shallow, mount, render } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Radium from 'radium'

// component
// note that we are importing the raw component here b/c the default export uses Radium's animation helpers
import { LoadingGraphic } from './index.js'

// style
import style from './style.js'

// use the chai enzyme extension
chai.use(chaiEnzyme())

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('Loading Graphic Component', () => {

  const defaultProps = {
    type: 'spinner'
  }

  describe('default', () => {

    it('it should be a loading-graphic element', () => {
      const element = shallow(<LoadingGraphic {...defaultProps} />)
      chai.expect(element).to.have.tagName('loading-graphic')
    })

    it('it should contain a div element', () => {
      const element = shallow(<LoadingGraphic {...defaultProps} />)
      chai.expect(element).to.have.descendants('div')
    })

    it('the div descendant should have the text "Loading..."', () => {
      const element = shallow(<LoadingGraphic {...defaultProps} />)
      chai.expect(element.find('div')).to.have.text('Loading...')
    })

  })

  describe('type = "logo"', () => {

    it('it should contain a lyfe-animation element', () => {
      const element = shallow(<LoadingGraphic {...defaultProps} type="logo" />)
      chai.expect(element).to.have.descendants('lyfe-animation')
    })

    it('the lyfe-animation element should contain five div elements', () => {
      const element = shallow(<LoadingGraphic {...defaultProps} type="logo" />)
      chai.expect(element.find('lyfe-animation')).to.have.exactly(5).descendants('div')
    })

  })

})