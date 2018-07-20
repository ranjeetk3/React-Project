// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'
import style from './style'
import '../../css/fonts.css'
// exports
export class FormInput extends Component {
  constructor(props) {
    super(props)
    this.setValue = this.setValue.bind(this)
  }
  setValue(e) {
    return this.props.onChange(e)
  }
  render() {
    const { type, value, customStyle, name, placeholder, checked, id } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const inputStyles = [ style.input.base, inheritedStyle ]
    // render
    return (
      <input style={inputStyles} type={type} name={name} checked={checked} value={value} id={id} placeholder={placeholder} onChange={(e) => { return this.setValue(e) }}/>
    )
  }
}

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  customStyle: PropTypes.array,
}

// the default export is the redux-connected component
export default Radium(FormInput)




