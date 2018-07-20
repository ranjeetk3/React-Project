// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'

// components
import Form from '../Form'
import FormInput from '../FormInput'


// exports
export class Table extends Form {
  constructor(props) {
    super(props)
		this.state = {stateChanged:0, accessVariable:0}
  }
  
  render() {
	const { form , value} = this.props
	const inactiveSliderStyle = [style.permissions.slider, style.permissions.round]
	const inactiveRoundStyle = [style.permissions.sliderBefore]
	
	const activeSliderStyle = [style.permissions.checked]
	const activeRoundStyle = [style.permissions.checkedBefore]
	//var checkboxValueTemp = (this.state.accessVariable)? this.state.accessVariable : 0
	const accessAllCheckox = [style.permissions.slider, style.permissions.round]
	const roundStyle = [style.permissions.sliderBefore]
	let currentAccessButton		
	
    return (
		
						<td style={[style.permissions.td, style.permissions.center]}>
							<label style={style.permissions.labelSwitch}>
								<FormInput type='checkbox' value={value} name ={this.props.name}   customStyle = {style.permissions.switchCheckbox}  onChange = {this.props.onClick}   />
								 <slider style={[inactiveSliderStyle, value != 0 ? activeSliderStyle : '']}>
								 <round style={[inactiveRoundStyle, value != 0 ? activeRoundStyle : '']}>
									</round>
								</slider>
							</label>
						</td>		
            )
  }
}

// Table.propTypes = {
// }

function mapStateToProps(state) {
  return {
    //session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Table))
