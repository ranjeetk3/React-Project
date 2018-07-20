// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium from 'radium'

// styles
import style from './style.js'
import '../../css/fonts.css'
// exports
export class FormLine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {customStyle } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const styles = [ style.base, inheritedStyle ]
    return (
      <form-line style={styles}>
        { this.props.children }
      </form-line>
    )
  }
}

FormLine.propTypes = {
  customStyle: PropTypes.array
}

export default Radium(FormLine)




