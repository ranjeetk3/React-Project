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
import AddInventoryVendor from '../AddInventoryVendor'
import DashboardHeaderTitle from '../DashboardHeaderTitle'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker');

// exports
export class SubMenu extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'manufacture'}
  }
	
 dataMember(field, e) {
 const {form, dispatch } = this.props
	if (field == 'manufacture') {
        this.setState({showhide:'manufacture'})
      } 
    if (field == 'vendor') {
        this.setState({showhide:'vendor'})
      }
    if (field == 'product') {
        this.setState({showhide:'product'})
      }
    if (field == 'inventory') {
        this.setState({showhide:'inventory'})
      }
    if (field == 'packageName') {
      this.setState({showhide:'packageName'})
    }
		if (field == 'order') {
      this.setState({showhide:'order'})
    }
		if (field == 'calendar') {
      this.setState({showhide:'calendar'})
    }
		if (field == 'reports') {
      this.setState({showhide:'reports'})
    }
		if (field == 'settings') {
      this.setState({showhide:'settings'})
    }
	if (field == 'purchaseRequest') {
      this.setState({showhide:'purchaseRequest'})
    }
  }   
	
  render() {
    return (
                <box style = {[style.box, style.padding0]} className = 'col-xs-12 col-sm-12  col-md-4'>
				
					<box-bottom style = {style.boxBottomLine} >
						<box-text style = {[style.boxTextIcon, style.manufacture, this.state.showhide=='manufacture' ? style.activeManufactureIcon : '']} key = 'manufacture' > 
						</box-text> 
						<box-text-link style = {style.boxWrapper} >
							<Link to="/manufacturer" onClick={(e) => { this.dataMember('manufacture',e) }} style = {style.boxText} key = 'manufactureIcon' > Manufacture Management </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.vendor, this.state.showhide=='vendor' ? style.activeVendorIcon : '']} key = 'vendor' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="/vendor" onClick={(e) => { this.dataMember('vendor',e) }} style = {style.boxText} key = 'vendorIcon' > Vendor Management </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>  
						</box-text-link> 
					</box-bottom>
				 
					 <box-bottom style = {style.boxBottomLine}>
						 <box-text style = {[style.boxTextIcon, style.product, this.state.showhide=='product' ? style.activeProductIcon : '']} key = 'product' > </box-text> 
						 <box-text-link style = {style.boxWrapper}>
							 <Link to="/inventory_products" onClick={(e) => { this.dataMember('product',e) }} style = {style.boxText} key = 'productIcon' > Products Management  </Link> 
							 <text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>  
						 </box-text-link> 
					 </box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.inventory, this.state.showhide=='inventory' ? style.activeInventoryIcon : '']} key = 'inventory' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="/inventory" onClick={(e) => { this.dataMember('inventory',e) }} style = {style.boxText} key = 'inventoryIcon' > Inventory Management  </Link>  
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text> 
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.packageName, this.state.showhide=='packageName' ? style.activePackageNameIcon : '']} key = 'packageName' >
						</box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="/package" onClick={(e) => { this.dataMember('packageName',e) }} style = {style.boxText} key = 'packageNameIcon' > Package Management</Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.order, this.state.showhide=='order' ? style.activeOrderIcon : '']} key = 'order' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="javascript:void(0)" onClick={(e) => { this.dataMember('order',e) }} style = {style.boxText} key = 'orderIcon' > Order Management</Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.calendar, this.state.showhide=='calendar' ? style.activeCalendarIcon : '']} key = 'calendar' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="javascript:void(0)" onClick={(e) => { this.dataMember('calendar',e) }}  style = {style.boxText} key = 'calendarIcon' > Inventory Calendar </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine}>
						<box-text style = {[style.boxTextIcon, style.reports, this.state.showhide=='reports' ? style.activeReportsIcon : '']} key = 'reports' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="javascript:void(0)" onClick={(e) => { this.dataMember('reports',e) }} style = {style.boxText} key = 'reportsIcon' > Inventory Reports</Link>
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text> 
						</box-text-link> 
					</box-bottom>
				 
					<box-bottom style = {style.boxBottomLine} className='box_bottom_line borderNonebottom'>
						<box-text style = {[style.boxTextIcon, style.settings, this.state.showhide=='settings' ? style.activeSettingsIcon : '']} key = 'settings' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="javascript:void(0)" onClick={(e) => { this.dataMember('settings',e) }} style = {style.boxText} key = 'settingsIcon' > Inventory Settings</Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
					
					<box-bottom style = {style.boxBottomLine} className='box_bottom_line borderNonebottom'>
						<box-text style = {[style.boxTextIcon, style.settings, this.state.showhide=='purchaseRequest' ? style.activeSettingsIcon : '']} key = 'purchaseRequest' > </box-text> 
						<box-text-link style = {style.boxWrapper}>
							<Link to="/purchase_request" onClick={(e) => { this.dataMember('purchaseRequest',e) }} style = {style.boxText} key = 'purchaseRequest' > Purchase Request </Link> 
							<text style={style.displayBlock}>Lorem ipsum dolor sit amet </text>
						</box-text-link> 
					</box-bottom>
				</box>
								
    )
  }
}

SubMenu.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
		form: state.subMenu,
		inventoryVendors: state.getInventoryVendors,
		inventoryVendorsByCategory: state.getInventoryVendorsByCategory,
		inventoryVendorsByOffering: state.getInventoryVendorsByOffering
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(SubMenu))
