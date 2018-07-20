// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import style from './style'
import '../../css/fonts.css'
// exports
var ddlOption = []
export class DropDownList extends Component {
  constructor(props) {
    super(props)
  }
  setValue(e) {
    return this.props.onChange(e)
  }
  componentWillMount()
  {
    var JSONData = this.props.dataList
    for (var i = 0; i < JSONData.length; i++) {
      var option = JSONData[i]
      ddlOption.push(
        < option key = {i} value = {option.value} > {option.text} < /option>
      )
    }
  }
  render() {
    const { value, customStyle } = this.props
    const inheritedStyle = (customStyle) ? customStyle : {}
    const dropdownStyles = [ style.dropdown.base, inheritedStyle ]
    return (
      < select style = {dropdownStyles} value = {value} onChange = {(e) => { return this.setValue(e) }} >
        {ddlOption}
      < /select>
    )
  }
}

DropDownList.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

// the default export is the redux-connected component
export default Radium(DropDownList)