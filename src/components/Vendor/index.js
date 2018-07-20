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
import SubMenu from '../SubMenu'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker');

// exports
export class Vendor extends Form {
  constructor(props) {
    super(props)
		this.state = {profile:false}
  }

 setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_INVENTORY_VENDORS_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
  }
  componentWillMount() {
	 const {form, dispatch, session } = this.props
	    dispatch({
			type: 'GET_INVENTORY_VENDORS_STARTED'
		})
		dispatch({
			type: 'GET_INVENTORY_VENDORS',
			payload: {
				loginToken: session.loginTokenDetails.token
			 }
		})
		dispatch({
			type: 'GET_INVENTORY_VENDORS_BY_CATEGORY',
			payload: {
				loginToken: session.loginTokenDetails.token
			 }
		})
		dispatch({
			type: 'GET_INVENTORY_VENDORS_BY_OFFERING',
			payload: {
				loginToken: session.loginTokenDetails.token
			 }
		})
  }
	
  render() {
	const { form, inventoryVendors, inventoryVendorsByCategory, inventoryVendorsByOffering} = this.props
	let vendors =[{"id":2,"company_name":"Philips indai","street_address":"232 test","city":"New York","state":"NY","zip":"445A78","country":"USA","sales_phone":"6666666666","support_phone":"5555555555","toll_free_phone":"7777777777","fax":"8888888888","email_address":"philipsabc@usa.com","website":"philips@usa.com","category_name":"Utilities - Gas","offering_name":"Products & Services"}]
	let byCategory
	let byOffering
	var categories = []
	var offerings = []
	if(inventoryVendors.data != null) {
		vendors = inventoryVendors.data
	}
	if(inventoryVendorsByCategory.data != null) {
		byCategory = inventoryVendorsByCategory.data
		 if (byCategory.length != 0) {
      for (var i = 0; i < byCategory.length; i++) {
        categories.push(
          < option value = {byCategory[i]['id']} > {byCategory[i]['name']} < /option>
        )
      }
    }
	}
	if(inventoryVendorsByOffering.data != null) {
		byOffering = inventoryVendorsByOffering.data
		if (byOffering.length != 0) {
      for (var i = 0; i < byOffering.length; i++) {
        offerings.push(
          < option value = {byOffering[i]['id']} > {byOffering[i]['name']} < /option>
        )
      }
    }
	}
    return (
			<wrapper style = {[style.wrapper, style.displayBlock]} >
			{inventoryVendors.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
			<DashboardHeaderTitle/>
          <content-section style = {style.contentSection} >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className='row'>
                <DashboardLeftSidebar/>
								<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-8  col-md-4'> 
						<SubMenu/>
										<pastInvoicesTable style = {[style.pastInvoicesTable, style.displayBlock]} className = 'col-xs-12 col-sm-12  col-md-12'>
										<pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
										<heading style = {style.heading} className='col-sm-3 col-md-12'>Vendors</heading>
										<tableData className='col-xs-12 col-sm-12 col-md-11'>
										<headingButton style = {style.button} className='col-xs-12 col-sm-12 col-md-12'> 
                     <invoicesSelect style = {[style.invoicesSelect, style.padding0]} className = 'col-xs-12 col-sm-2 col-md-4'>
											<Link to="/addInventoryVendor" style = {style.btnSearch} className = 'btn btn-success'>Add</Link>
										</invoicesSelect>

										<invoicesSelect style = {style.invoicesSelect} className = 'col-xs-12 col-sm-5 col-md-4 pul-right'>
											< select style={style.dropDownList} >
												{categories}
											< /select>
										</invoicesSelect>
										
										<invoicesSelect style = {style.invoicesSelect} className = 'col-xs-12 col-sm-5 col-md-4 pull-right'>
											< select style={style.dropDownList} >
												{offerings}
											< /select>
										</invoicesSelect>
											</headingButton>
										</tableData>
										</pastInvoicesHeading>
											<BootstrapTable data={vendors}   pagination={true} search={true} >
											<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='company_name'>Name</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='city'>City</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='state'>State</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='sales_phone'>Sales No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='support_phone'>Support No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='toll_free_phone'>Toll Free No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='fax'>Fax No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='category_name'>Category</TableHeaderColumn>
									    <TableHeaderColumn dataSort={true} isKey={true} className='columHeight columBorder' width = "80" hidden={true} dataField="id">id</TableHeaderColumn>
					
											</BootstrapTable>
										</pastInvoicesTable> 
								<lastDiv style = {style.divHeight} >   </lastDiv>
							</contentSectionMiddle>
						</rowDiv>
					</contentTop>
				</content-section>	
			</wrapper>
    )
  }
}

Vendor.propTypes = {
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
export default connect(mapStateToProps)(Radium(Vendor))
