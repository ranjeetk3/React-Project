// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium, { Style } from 'radium'

// styles
import style from './style.js'

// exports
export class ToolTip extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { message, type, isVisible, isFloating, animation, arrowPosition } = this.props
    const containerStyles = [ style.container.base ]
    const arrowStyles = [ style.arrow.base ]
    const messageStyles = [ style.message.base ]
    
    // conditional styles
    if (type === 'error') {
      containerStyles.push(style.container.error)
      arrowStyles.push(style.arrow.error)
      arrowStyles.push(style.arrow.topLeft)
    }
    if (isFloating) containerStyles.push(style.container.floating)
    if (isVisible) containerStyles.push(style.container.show)

    return (
      <tool-tip style={containerStyles}>
        <tip-arrow style={arrowStyles} />
        <tip-message style={messageStyles}>{this.props.message}</tip-message>
      </tool-tip>
    )
  }
}

ToolTip.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  isVisible: PropTypes.bool,
  isFloating: PropTypes.bool,
  animation: PropTypes.string,
  arrowPosition: PropTypes.string
}

export default Radium(ToolTip)




