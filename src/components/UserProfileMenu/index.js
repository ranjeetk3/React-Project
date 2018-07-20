// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './style.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import FormInput from '../FormInput'
import Footer from '../Footer'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeader from '../DashboardHeader'
import DashboardHeaderTitle from '../DashboardHeaderTitle'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker');

// exports
export class UserProfileMenu extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'profile'}
  }



	
 dataMember(field, e) {
 const {form, dispatch } = this.props
	if (field == 'profile') {
			this.setState({showhide:'profile'})
		} 
	if (field == 'clock') {
			this.setState({showhide:'clock'})
		}
	if (field == 'payroll') {
			this.setState({showhide:'payroll'})
		}
	if (field == 'documents') {
			this.setState({showhide:'documents'})
		}
	if (field == 'training') {
		this.setState({showhide:'training'})
	}
  }   
	
  render() {
    return (
                <box style = {[style.box, style.padding0]} className = 'col-xs-12 col-sm-12  col-md-4'>
				
					<box-bottom style = {style.boxBottomLine} >
						<box-text style = {[style.boxTextIcon, style.manufacture, this.state.showhide=='profile' ? style.activeManufactureIcon : '']} key = 'profile' > 
						</box-text> 
						<box-text-link style = {style.boxWrapper} >
							<Link to='profile_dashboard' onClick={(e) => { this.dataMember('profile',e) }} style = {style.boxText} key = 'profileIcon' > My Profile </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.vendor, this.state.showhide=='clock' ? style.activeVendorIcon : '']} key = 'clock' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to='time_clock' onClick={(e) => { this.dataMember('clock',e) }} style = {style.boxText} key = 'clockIcon' > Time Clock </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>  
						</box-text-link> 
					</box-bottom>
				 
					 <box-bottom style = {style.boxBottomLine}>
						 <box-text style = {[style.boxTextIcon, style.product, this.state.showhide=='payroll' ? style.activeProductIcon : '']} key = 'payroll' > </box-text> 
						 <box-text-link style = {style.boxWrapper}>
							 <a href='#' onClick={(e) => { this.dataMember('payroll',e) }} style = {style.boxText} key = 'payrollIcon' > My Payroll  </a> 
							 <text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>  
						 </box-text-link> 
					 </box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.inventory, this.state.showhide=='documents' ? style.activeInventoryIcon : '']} key = 'documents' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<a href='#' onClick={(e) => { this.dataMember('documents',e) }} style = {style.boxText} key = 'documentsIcon' > Employee Documents </a>  
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text> 
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.packageName, this.state.showhide=='training' ? style.activePackageNameIcon : '']} key = 'training' >
						</box-text> 
						<box-text-link style = {style.boxWrapper}>
							<a href='#' onClick={(e) => { this.dataMember('training',e) }} style = {style.boxText} key = 'trainingIcon' > Training Center</a> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
					
				</box>
			
			
    )
  }
}

UserProfileMenu.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(UserProfileMenu))
