// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
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
import { Label, Table, Col, Tabs, Tab, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker')

// exports
export class AddInventoryVendor extends Form {
  constructor(props) {
    super(props)
		this.state = {companyNameStatus:'',countryStatus:'', streetAddressStatus:'', cityStatus:'', stateStatus:'', zipStatus:'', salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', offeringStatus:'', categoryStatus:''}
  }
setFieldValue(field, e) {
const { dispatch } = this.props
	var value = e.target.value
	dispatch({
		type: 'SET_Add_INVENTORY_VENDORS_FORM_FIELD_VALUE',
		params: {
			field: field,
			value: value
		}
	})
	e.preventDefault()
	switch (field) {
			case 'company_name':
					this.setState({companyNameStatus:this.checkEmpty(value)})
					break
			case 'country':
					this.setState({countryStatus:this.checkEmpty(value)})
					break
      case 'address':
          this.setState({streetAddressStatus:this.checkEmpty(value)})
          break
      case 'sales_phone':
        this.setState({salesPhoneStatus:this.checkEmpty(value)})
				this.setState({salesPhoneStatus:this.checkPhonNumber(value)})
        break
			case 'city':
        this.setState({cityStatus:this.checkEmpty(value)})
				this.setState({cityStatus:this.checkString(value)})
        break
      case 'state':
				this.setState({stateStatus:this.checkEmpty(value)})
        break
      case 'zip':
        this.setState({zipStatus:this.checkEmpty(value)})
				var regex = new RegExp("^[0-9-]+$")
        if (regex.test(value) && value.length <= 10) {
          this.setState({zipStatus:'correct'})
        } else {
          this.setState({zipStatus:'error'})
        }
        break
			case 'support_phone':
        this.setState({supportPhoneStatus:this.checkEmpty(value)})
				this.setState({supportPhoneStatus:this.checkPhonNumber(value)})
        break
			case 'toll_free_phone':
        this.setState({tollFreePhoneStatus:this.checkEmpty(value)})
				this.setState({tollFreePhoneStatus:this.checkPhonNumber(value)})
        break
			case 'fax':
        this.setState({faxStatus:this.checkEmpty(value)})
				this.setState({faxStatus:this.checkPhonNumber(value)})
        break
			case 'email_address':
        this.setState({emailAddressStatus:this.checkEmpty(value)})
				this.setState({emailAddressStatus:this.checkEmail(value)})
        break
			case 'website':
				this.setState({websiteStatus:this.checkWebsite(value)})
        break
			case 'offering_name':
				this.setState({offeringStatus:this.checkEmpty(value)})
				break
			case 'category_name':
				this.setState({categoryStatus:this.checkEmpty(value)})
				break
      default:
        break
    }
}
	
checkEmpty(value) {
	let status
	if ((value == null) || (value == '')) {
		status = 'error'
	} else {
		status = 'correct'
	}
	return status
}
checkString(value) {
	let status
	var letters = /^[A-Za-z]+$/
	if ((!value.match(letters)) || (value == null) || (value == '')) {
			status = 'error'
	} else { 
		status = 'correct'
	}
	return status
}
checkPhonNumber(value) {
	let status
	var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	if((!value.match(phoneFormat)) || (value.match('0000000000')) ) { 
			status = 'error'
	} else {
		status = 'correct'
	}
	return status
}
checkEmail(value) {
	let status
	var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if(!value.match(emailFormat)) { 
		status = 'error'
	} else {
		status = 'correct'
	}
	return status
}
checkWebsite(value) {
	let status
	var websiteFormat = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/
	var urlFormat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
	if(!value.match(websiteFormat)) { 
		if(!value.match(urlFormat)) {
			status = 'error'
		} else {status = 'correct'}
	} else {
		status = 'correct'
	}
	return status
}

	
clearForm(e) {
  const { dispatch, session } = this.props
  e.preventDefault() 
    dispatch({
      type: 'CLEAR_FORM_FOR_INVENTORY_VENDORS',
	  payload: {
		loginToken: session.loginTokenDetails.token
	 }
    })
	this.setState({companyNameStatus:'',countryStatus:'',streetAddressStatus:'',cityStatus:'',stateStatus:'',zipStatus:'',salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', offeringStatus:'', categoryStatus:''})
  }
 componentWillMount() {
	const {form, dispatch, session } = this.props
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
 

 submit(e) {
    const { form, dispatch, session } = this.props
      dispatch({
        type: 'POST_INVENTORY_VENDORS_DETAILS',
        payload: {
          inventoryVendorDetails: {
				loginToken: session.loginTokenDetails.token,
				companyName: form.data.company_name,
				country:form.data.country,
				address:form.data.address,
				vendorOfferingId:form.data.offering_name,
				vendorCategoryId:form.data.category_name,
				city:form.data.city,
				state:form.data.state,
				zip:form.data.zip,
				salesPhone:form.data.sales_phone,
				emailAddress:form.data.email_address,
				supportPhone:form.data.support_phone,
				tollFreePhone:form.data.toll_free_phone,
				fax:form.data.fax,
				website:form.data.website
			}
		}
	})
   this.setState({companyNameStatus:'',countryStatus:'',streetAddressStatus:'',cityStatus:'',stateStatus:'',zipStatus:'',salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', offeringStatus:'', categoryStatus:''})
   {this.clearForm(e)}
  }

   update(e) {
    const { form, dispatch, session } = this.props
      dispatch({
        type: 'UPDATE_INVENTORY_VENDOR_ID',
        payload: {
          inventoryVendorDetails: {
				loginToken: session.loginTokenDetails.token,
				id: form.data.id,
				companyName: form.data.company_name,
				country:form.data.country,
				address:form.data.address,
				vendorOfferingId:form.data.offering_name,
				vendorCategoryId:form.data.category_name,
				city:form.data.city,
				state:form.data.state,
				zip:form.data.zip,
				salesPhone:form.data.sales_phone,
				emailAddress:form.data.email_address,
				supportPhone:form.data.support_phone,
				tollFreePhone:form.data.toll_free_phone,
				fax:form.data.fax,
				website:form.data.website
			}
		}
	})
   this.setState({companyNameStatus:'',countryStatus:'',streetAddressStatus:'',cityStatus:'',stateStatus:'',zipStatus:'',salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', offeringStatus:'', categoryStatus:''})
  {this.clearForm(e)}
 }



  
  render() {
	
	const { form, inventoryVendors, dispatch, inventoryVendorsByCategory, inventoryVendorsByOffering, session} = this.props
	
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
function deleteDataById(cell, row) {
   dispatch({
        type: 'POST_INVENTORY_VENDOR_ID',
        payload: {
				vendorId: {
								id:cell,
								loginToken: session.loginTokenDetails.token
							}
						}
				}) 
}
function viewDataById(cell, row) {
   dispatch({
        type: 'GET_INVENTORY_VENDOR_BY_ID',
        payload: {
				vendorId: {
						id:cell,
						loginToken: session.loginTokenDetails.token
							}
						}
				}) 
	
}
function deleteData(cell, row){
  return (<actionDiv><viewDiv  style={style.viewDiv}><a href = 'javascript:void(0)' onClick={(e) => { viewDataById(cell, row) }} ><img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png'/></a></viewDiv><deleteDiv><a href = 'javascript:void(0)' onClick={(e) => { deleteDataById(cell, row) }} ><img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/delete.png'/></a></deleteDiv></actionDiv>)
}
var usStates = [{text:'Please Choose',value:''},{ text: 'ALABAMA', value: 'AL'}, { text: 'ALASKA', value: 'AK'}, { text: 'AMERICAN SAMOA', value: 'AS'}, { text: 'ARIZONA', value: 'AZ'}, { text: 'ARKANSAS', value: 'AR'}, { text: 'CALIFORNIA', value: 'CA'}, { text: 'COLORADO', value: 'CO'}, { text: 'CONNECTICUT', value: 'CT'}, { text: 'DELAWARE', value: 'DE'}, { text: 'DISTRICT OF COLUMBIA', value: 'DC'}, { text: 'FEDERATED STATES OF MICRONESIA', value: 'FM'}, { text: 'FLORIDA', value: 'FL'}, { text: 'GEORGIA', value: 'GA'}, { text: 'GUAM', value: 'GU'}, { text: 'HAWAII', value: 'HI'}, { text: 'IDAHO', value: 'ID'}, { text: 'ILLINOIS', value: 'IL'}, { text: 'INDIANA', value: 'IN'}, { text: 'IOWA', value: 'IA'}, { text: 'KANSAS', value: 'KS'}, { text: 'KENTUCKY', value: 'KY'}, { text: 'LOUISIANA', value: 'LA'}, { text: 'MAINE', value: 'ME'}, { text: 'MARSHALL ISLANDS', value: 'MH'}, { text: 'MARYLAND', value: 'MD'}, { text: 'MASSACHUSETTS', value: 'MA'}, { text: 'MICHIGAN', value: 'MI'}, { text: 'MINNESOTA', value: 'MN'}, { text: 'MISSISSIPPI', value: 'MS'}, { text: 'MISSOURI', value: 'MO'}, { text: 'MONTANA', value: 'MT'}, { text: 'NEBRASKA', value: 'NE'}, { text: 'NEVADA', value: 'NV'}, { text: 'NEW HAMPSHIRE', value: 'NH'}, { text: 'NEW JERSEY', value: 'NJ'}, { text: 'NEW MEXICO', value: 'NM'}, { text: 'NEW YORK', value: 'NY'}, { text: 'NORTH CAROLINA', value: 'NC'}, { text: 'NORTH DAKOTA', value: 'ND'}, { text: 'NORTHERN MARIANA ISLANDS', value: 'MP'}, { text: 'OHIO', value: 'OH'}, { text: 'OKLAHOMA', value: 'OK'}, { text: 'OREGON', value: 'OR'}, { text: 'PALAU', value: 'PW'}, { text: 'PENNSYLVANIA', value: 'PA'}, { text: 'PUERTO RICO', value: 'PR'},
{ text: 'RHODE ISLAND', value: 'RI'}, { text: 'SOUTH CAROLINA', value: 'SC'}, { text: 'SOUTH DAKOTA', value: 'SD'}, { text: 'TENNESSEE', value: 'TN'},{ text: 'TEXAS', value: 'TX'}, { text: 'UTAH', value: 'UT'}, { text: 'VERMONT', value: 'VT'}, { text: 'VIRGIN ISLANDS', value: 'VI'}, { text: 'VIRGINIA', value: 'VA'}, { text: 'WASHINGTON', value: 'WA'}, { text: 'WEST VIRGINIA', value: 'WV'}, { text: 'WISCONSIN', value: 'WI'}, { text: 'WYOMING', value: 'WY' }]
		var usStatesList = []
		 if (usStates.length != 0) {
      for (var i = 0; i < usStates.length; i++) {
        usStatesList.push(
          < option value = {usStates[i]['value']} > {usStates[i]['text']} < /option>
        )
      }
    }

    return (
			<wrapper style = {[style.wrapper, style.displayBlock]} >
			<DashboardHeader/>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className="container" style={style.displayBlock}>
						<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
							Add Inventory Vendor
						</headingArea>
						<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
							<saveButtonArea style={style.saveButtonArea}>
								<Button type='submit' onClick={(e) => { this.clearForm(e) }} style={style.blueButton} >+ Add New Vendors</Button>
							</saveButtonArea>
							<backButton style={style.saveButtonArea}>
								<Link to='/vendor' style={style.blueButton}>Back</Link>
							</backButton>
						</headerLink>
				</headerContainer>
			</headerSection>
			<topArea className='container' style={[style.displayBlock, style.paddingbox]}>
					<rowArea className='row'>
						<tabArea className='col-xs-12 col-sm-8 col-md-9' style={style.mpadding}>
									<formArea>
									<formHeading style={style.formHeading}>New Vendor</formHeading> 
										<formBackground className='col-md-12' style={style.inventoryBg}> 
											<divColumn style  = {style.col50} > 
											<FormInput type='hidden' value ='' id='id'/>
												<FormLine>
														<FormBlock title='Company Name' validationStatus = {this.state.companyNameStatus} titleCustomStyle={style.titleStyle}>
														<FormInput type='text' value = {form.data.company_name} id = 'companyName' onChange={(e) => { this.setFieldValue('company_name', e) }} placeholder='Company name' customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} > 
													<FormLine>
														<FormBlock title='Street Address' validationStatus = {this.state.streetAddressStatus} titleCustomStyle={style.titleStyle}>
														<FormInput type='text' value = {form.data.address} id = 'streetAddress' onChange={(e) => { this.setFieldValue('address', e) }} placeholder='Street address' customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												<FormLine>
													<FormBlock title='City' validationStatus = {this.state.cityStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.city} id = 'city' onChange={(e) => { this.setFieldValue('city', e) }} placeholder='City' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
												<FormLine>
													<FormBlock title='State' validationStatus = {this.state.stateStatus} titleCustomStyle={style.titleStyle}>
													< select id = 'state' style={[style.dropDownList,style.inventoryInput]} value={form.data.state} onChange={(e) => { this.setFieldValue('state', e) }} >
														{usStatesList}
													< /select>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
													<FormLine>
														<FormBlock title='Zip' validationStatus = {this.state.zipStatus} titleCustomStyle={style.titleStyle}>
														<FormInput type='text' value = {form.data.zip} id = 'zip' onChange={(e) => { this.setFieldValue('zip', e) }} placeholder='Zip' customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
														<FormBlock title='Sales Phone' validationStatus = {this.state.salesPhoneStatus} titleCustomStyle={style.titleStyle}>
														<FormInput type='text' value = {form.data.sales_phone} id = 'salesPhone' onChange={(e) => { this.setFieldValue('sales_phone', e) }} placeholder='Sales Phone' customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
												<FormLine>
													<FormBlock title='Support Phone' validationStatus = {this.state.supportPhoneStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.support_phone} id = 'supportPhone' onChange={(e) => { this.setFieldValue('support_phone', e) }} placeholder='Support Phone' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Toll Free Phone' validationStatus = {this.state.tollFreePhoneStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.toll_free_phone} id = 'tollFreePhone' onChange={(e) => { this.setFieldValue('toll_free_phone', e) }} placeholder='Toll Free Phone' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Fax' validationStatus = {this.state.faxStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.fax} id = 'fax' onChange={(e) => { this.setFieldValue('fax', e) }} placeholder='Fax' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Email Address' validationStatus = {this.state.emailAddressStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.email_address} id = 'emailAddress' onChange={(e) => { this.setFieldValue('email_address', e) }} placeholder='Email Address' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Website' validationStatus = {this.state.websiteStatus} titleCustomStyle={style.titleStyle}>
													<FormInput type='text' value = {form.data.website} id = 'website' onChange={(e) => { this.setFieldValue('website', e) }} placeholder='Website' customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Offering' validationStatus = {this.state.offeringStatus} titleCustomStyle={style.titleStyle}>
													< select id = 'offering' style={[style.dropDownList,style.inventoryInput]} value={form.data.offering_name} onChange={(e) => { this.setFieldValue('offering_name', e) }} >
														{offerings}
													< /select>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Category' validationStatus = {this.state.categoryStatus} titleCustomStyle={style.titleStyle}>
												< select id = 'category' style={[style.dropDownList,style.inventoryInput]} value={form.data.category_name} onChange={(e) => { this.setFieldValue('category_name', e) }} >
														{categories}
													< /select>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<clr style={style.clr}></clr>
													<btn-confirm style = {[style.confirm, style.displayBlock]}>
														{form.data.id != null ? <Button type='submit' onClick={(e) => { this.update(e) }} className = 'btn btn-success' style= {style.btnSave} >UPDATE</Button>
														: <Button type='submit' onClick={(e) => { this.submit(e) }} className = 'btn btn-success' style= {style.btnSave} >SUBMIT</Button>
														 }	
													</btn-confirm>
												<clr style={style.clr}></clr>
										</formBackground>
									</formArea>
						</tabArea>
						
						<rightArea className="col-xs-12 col-sm-4 col-md-3" style={style.padding0}>  
							<rightGrayBox className="col-xs-12 col-sm-12 col-md-12" style={[style.rightGrayBox, style.paddingbox]}>
								<grayHeading style={style.grayHeading}>
								<icon style={style.icon}> </icon>
								<grayHeadingText style={style.displayBlock}>Tips for asking questions </grayHeadingText>
								<grayContent style={style.grayContent}>
									Every question you ask should help you gather either facts or an opinion. Know which kind of information you need and frame your questions accordingly.
								</grayContent>
								</grayHeading>
								
								<grayDivider style={[style.grayDivider, style.displayBlock]}> </grayDivider>
								<grayHeading style={style.grayHeading}>
									<icon style={style.icon}> </icon>
									<grayHeadingText style={style.displayBlock}>Search & Research </grayHeadingText>
									<grayContent style={[style.grayContent, style.bottomMargin]}>
									Even if you don't find a useful answer elsewhere on the site, including links to related questions that haven't helped can help others in understanding how your question is different from the rest.
									</grayContent>
								</grayHeading>
								
							
								<contactSupport style={[style.contactSupport, style.displayBlock]}> Still need help? Contact Support </contactSupport>
							</rightGrayBox>
						</rightArea>
					</rowArea>
				</topArea>
				<tableContainer className='container' style = {style.displayBlock}>
					<tableRow className='row'>
						<dataListingSection className='col-xs-12 col-sm-12 col-md-12' style = {style.mpadding}>
							<formHeading style={style.formHeading}>All Vendors</formHeading>
							<tableResponsive className='table-responsive'>
							<tableArea className='col-md-12' style={[style.inventoryTableBg, style.padding0]}>
								<BootstrapTable data={vendors}   pagination={true} search={true} >
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='company_name'>Name</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='city'>City</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='state'>State</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='sales_phone'>Sales No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='support_phone'>Support No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='toll_free_phone'>Toll Free No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='fax'>Fax No</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='category_name'>Category</TableHeaderColumn>
									  <TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="email_address">Email Address</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="offering_name">Offering</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true}  dataField="address">Street Address</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="zip">zip</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="website">website</TableHeaderColumn>
										<TableHeaderColumn dataSort={true} isKey={true} className='columHeight columBorder' width = "80" hidden={true} dataField="id">id</TableHeaderColumn>
										<TableHeaderColumn   dataSort={true} className='columHeight columBorder' width = "80" dataField="id" dataFormat={deleteData}>Action</TableHeaderColumn>
								</BootstrapTable>
							</tableArea>
							</tableResponsive>
						</dataListingSection>
					</tableRow>
				</tableContainer>
      </wrapper>
    )
  }
}

AddInventoryVendor.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
		inventoryVendors: state.getInventoryVendors,
		form:state.addInventoryVendor,
		inventoryVendorsByCategory: state.getInventoryVendorsByCategory,
		inventoryVendorsByOffering: state.getInventoryVendorsByOffering
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(AddInventoryVendor))
