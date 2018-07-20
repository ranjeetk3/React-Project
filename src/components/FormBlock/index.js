// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import Radium, { Style } from 'radium'

// styles
import style from './style.js'
import '../../css/fonts.css'
// exports
export class FormBlock extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, instruction, ordinal, isRequired, validationStatus, customStyle, titleCustomStyle, validationIconStyle } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const inheritedtitleCustomStyle = (titleCustomStyle) ? titleCustomStyle : {}
	const inheritedValidationIconStyle = (validationIconStyle) ? validationIconStyle : {}
    const blockStyles = [ style.block.base, inheritedStyle ]
    const titleStyles = [ style.title.base, style.displayBlock, inheritedtitleCustomStyle ]
    const validationStyle = [ style.validation.base, inheritedValidationIconStyle]
    let validationIcon
    switch (validationStatus) {
      case 'correct':
        validationIcon = 'https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/checked.png'
        break
      case 'error':
        validationIcon = 'https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/error.png'
        break
      default:
      validationStyle.push(style.validation.hide)
    }
    
    return (
      <form-block style={blockStyles}>
      <label style={style.label.base}>
        <block-title style={titleStyles}>{title}</block-title>
          { this.props.children }
          </label>
        <validation style={validationStyle}>
            <img src={validationIcon} style={style.validation.img}/>
        </validation>
          <clr style={style.clr}></clr>
      </form-block>
    )
  }
}

FormBlock.propTypes = {
  title: PropTypes.string,
  isClickable: PropTypes.bool,
  isRequired: PropTypes.bool,
  instruction: PropTypes.string,
  ordinal: PropTypes.string
}

export default Radium(FormBlock)




