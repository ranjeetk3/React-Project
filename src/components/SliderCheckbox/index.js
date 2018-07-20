// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import Form from '../Form'
import FormInput from '../FormInput'

// exports
export class SliderCheckbox extends Component {
  constructor(props) {
    super(props)
    this.changeIndividualAccess = this.changeIndividualAccess.bind(this)
	this.state = {checkedValue:this.props.checkboxValue}
  }
  
changeIndividualAccess(e) {
	this.setState({checkedValue:!this.state.checkedValue})
}


  render() {
	const { checkboxValue, id} = this.props
	const inactiveSliderStyle = [style.permissions.slider, style.permissions.round]
	const inactiveRoundStyle = [style.permissions.sliderBefore]
	const activeSliderStyle = [style.permissions.checked]
	const activeRoundStyle = [style.permissions.checkedBefore]
	const accessAllCheckox = [style.permissions.slider, style.permissions.round]
	const roundStyle = [style.permissions.sliderBefore]
    return (
			<label style={style.permissions.labelSwitch}>
				<FormInput type='checkbox' value={this.state.checkedValue} id={id} customStyle = {style.permissions.switchCheckbox}  onChange = {(e) => { this.changeIndividualAccess.bind(this)(e) }}   />
				 <slider style={[inactiveSliderStyle, this.state.checkedValue != 0 ? activeSliderStyle : '']}>
				 <round style={[inactiveRoundStyle, this.state.checkedValue != 0 ? activeRoundStyle : '']}>
					</round>
				</slider>
			</label>	
            )
  }
}

SliderCheckbox.propTypes = {
  checkboxValue: PropTypes.integer,
  id: PropTypes.integer
}

// the default export is the redux-connected component
export default Radium(SliderCheckbox)
