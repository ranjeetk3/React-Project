// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium from 'radium'

// styles
import style from './style.js'

// exports
export class LyferxLogo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { customStyle } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const imgStyles = [ style.base, inheritedStyle ]
    return (
        <img src='http://s3-us-west-2.amazonaws.com/lyferx-web/images/logos/lyferx/logo-white@3x.png' style={imgStyles}/>
    )
  }
}

LyferxLogo.propTypes = {
  customStyle: PropTypes.object
}

export default Radium(LyferxLogo)




