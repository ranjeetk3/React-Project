// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium from 'radium'

// styles
import style from './style.js'

// exports
export class ReloadingGraphic extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { customStyle } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const imgStyles = [ style.base, inheritedStyle ]
    return (
        <div style={[style.logoAnimation, imgStyles]}>
            <div style={[style.row, style.row1]}></div>
            <div style={[style.row, style.row2]}></div>
            <div style={[style.row, style.row3]}></div>
            <div style={[style.row, style.row4]}></div>
            <div style={[style.row, style.row5]}></div>
        </div>
    )
  }
}

ReloadingGraphic.propTypes = {
  customStyle: PropTypes.object
}

export default Radium(ReloadingGraphic)
