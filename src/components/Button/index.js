// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import color from 'color'
import style from './style'
import '../../css/fonts.css'
// components
import LoadingGraphic from '../LoadingGraphic'

// exports
export class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handleClick(e) {
    return this.props.onClick(e)
  }
  handleKeyPress(e) {
    if (e.nativeEvent.keyCode == 13) {
      e.preventDefault();
      return this.handleClick
    }
  }
  render() {
    const { type, text, isWorking, children, customStyle, icon } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const styles = [ style.base, inheritedStyle ]
    //const spinner = (isWorking) ? <LoadingGraphic type='logo'/> : null 
    if (!children) {
      return (
        <button type={type || 'button'} style={styles} onClick={(e) => { return this.handleClick(e) }} onKeyPress={(e) => { return this.handleEnterKeyPress(e) }}>
          <button-icon>{icon}</button-icon>
          <button-text>{text}</button-text>
        </button>
      )
    } else {
      return (
        <button type={type || 'button'} style={styles} onClick={(e) => { return this.handleClick(e) }} onKeyPress={(e) => { return this.handleEnterKeyPress(e) }}>
          { children }
        </button>
      )
    }
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func
}

// the default export is the redux-connected component
export default Radium(Button)




