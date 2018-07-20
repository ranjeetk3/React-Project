// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'
import style from './style'
import '../../css/fonts.css'
// exports
export class FormTextarea extends Component {
  constructor(props) {
    super(props)
    this.setValue = this.setValue.bind(this)
  }
  setValue(e) {
    return this.props.onChange(e)
  }
  render() {
    const { customStyle, name, placeholder, cols, rows, value } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const textareaStyles = [ style.textarea.base, inheritedStyle ]
    // render
    return (
      <textarea style={textareaStyles} placeholder={placeholder} onChange={(e) => { return this.setValue(e) }} cols={cols} rows={rows} name={name}>{value}</textarea>
    )
  }
}

FormTextarea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  cols: PropTypes.integer,
  rows: PropTypes.integer,
  onChange: PropTypes.func,
  customStyle: PropTypes.array,
}

// the default export is the redux-connected component
export default Radium(FormTextarea)




