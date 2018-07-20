import React from 'react' // eslint-disable-line no-unused-vars
import { Example } from './index.js'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'

// extend the expect library with expectJSX
expect.extend(expectJSX)

// set the user agent for Radium (Chrome 49)
// https://github.com/FormidableLabs/radium/tree/master/docs/faq#how-can-i-get-rid-of-useragent-warnings-in-tests
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'};

// define component test
describe('Example', () => {

  it('should render the example', () => {
    const renderer = TestUtils.createRenderer()
    const example = { greeting: "konichi wa" }
    renderer.render(<Example example={example}/>)
    const actual = renderer.getRenderOutput()
    const expected = (
      <div>konichi wa</div>
    );
    expect(actual).toIncludeJSX(expected)
  })

})