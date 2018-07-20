// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/tableStyle.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import FormLine from '../FormLine'
import FormBlock from '../FormBlock'
import FormInput from '../FormInput'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardHeader from '../DashboardHeader'
import { Label, Table, Col, Tabs, Tab, Button } from 'react-bootstrap'
import EditableDiv from 'react-wysiwyg-editor'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var formData = []
// exports
export class OrderManagement extends Form {
  constructor(props) {
    super(props)	
		this.state = {formData: '', dateCreated:'',dateExpected:'', vendorName:'', type:'', purchaseRequest:'', purchaseOrders:'',status:''}
	}

	componentDidMount() {
			const { dispatch } = this.props
			dispatch({
			type: 'GET_ORDERS'
			})
  }
	
	setFieldValue(field, e) {
	
		const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_ADD_MANUFACTURER_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
		e.preventDefault()
		switch (field) {
			case 'companyName':
					this.setState({companyNameStatus:this.checkEmpty(value)})
					break
			case 'country':
					this.setState({countryStatus:this.checkEmpty(value)})
					break
      case 'streetAddress':
          this.setState({streetAddressStatus:this.checkEmpty(value)})
          break
      case 'salesPhone':
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
			case 'supportPhone':
        this.setState({supportPhoneStatus:this.checkEmpty(value)})
				this.setState({supportPhoneStatus:this.checkPhonNumber(value)})
        break
			case 'tollFreePhone':
        this.setState({tollFreePhoneStatus:this.checkEmpty(value)})
				this.setState({tollFreePhoneStatus:this.checkPhonNumber(value)})
        break
			case 'fax':
        this.setState({faxStatus:this.checkEmpty(value)})
				this.setState({faxStatus:this.checkPhonNumber(value)})
        break
			case 'emailAddress':
        this.setState({emailAddressStatus:this.checkEmpty(value)})
				this.setState({emailAddressStatus:this.checkEmail(value)})
        break
			case 'website':
				this.setState({websiteStatus:this.checkWebsite(value)})
        break
			case 'bldgUnitSuite':
				this.setState({bldgUnitSuiteStatus:this.checkEmpty(value)})
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
	
	update(e) {
			const { formData, dispatch } = this.props
				dispatch({
					type: 'UPDATE_ORDER',
					payload: {
						orderDetails: {
								vendor_name: formData.company_name,
								type: formData.type,
								subtotal: formData.subtotal,
								order_status: formData.order_status,
								date_created: formData.date_created,
								date_expected: formData.date_expected,
								id: formData.id
						}
					}
			})
			location.reload()	
		}
	
		getOrderById(cell,row, e) {
			this.setState({formData: row})
		}	
	

  render() {
	var currObj = this
  const { orderManagementdetails, dispatch } = this.props

	var dataObject = orderManagementdetails.OrderData
			var OrderData = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						OrderData.push({
								vendor_name: row.company_name,
								type: row.type,
								subtotal: row.subtotal,
								order_status: row.order_status,
								date_created: row.date_created,
								date_expected: row.date_expected,
								id: row.id
							})
							count = parseInt(count)+1
						}
        }

						

function priceFormatter(cell, row){
  return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { currObj.getOrderById(cell,row, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv></actionDiv>)
}

  return (

		<wrapper style = {[style.wrapper, style.displayBlock]} >
			<DashboardHeader/>
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className="container" style={style.displayBlock}>
					<headerRow>
						<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
							Order Management
						</headingArea>
						<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
							<saveButtonArea style={style.saveButtonArea}>
						</saveButtonArea>
							<backButton style={style.saveButtonArea}>
								<Link to='/purchase_order' style={style.blueButton}>Back</Link>
							</backButton>
						</headerLink>
					</headerRow>
				</headerContainer>
			</headerSection>
			<topArea className="container" style={style.displayBlock}>
					<rowArea className="row">
						<tabArea className="col-sm-8 col-md-9 mobilepadding">
							<Tabs defaultActiveKey={1}>
								<Tab eventKey={1} title="Order Management">
									<formArea>
										<formBackground className="col-md-12" style={style.inventoryBg}> 
											<divColumn style  = {style.col50} >
												<FormInput type='hidden' value = {this.state.formData.id} id='id'/>
												<FormLine>
														<FormBlock title='Vendor Name' validationStatus = {this.state.vendorId} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} id = "vendorName" value = {this.state.formData.vendor_name}  type='text'  onChange={(e) => { this.setFieldValue('vendor_name', e) }} placeholder="Vendor Name" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} > 
													<FormLine>
														<FormBlock title='Date Created' validationStatus = {this.state.dateCreated} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield}  type='text' id = "dateCreated" value = {this.state.formData.date_created}  onChange={(e) => { this.setFieldValue('date_created', e) }} placeholder="Date Created" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} > 
												<FormLine>
													<FormBlock title='Date Expected' validationStatus = {this.state.dateExpected} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text'  id = "dateExpected" value = {this.state.formData.date_expected} onChange={(e) => { this.setFieldValue('date_expected', e) }} placeholder="Date Expected" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
												<FormLine>
													<FormBlock title='Type' validationStatus = {this.state.type} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield}  type='text' value = {this.state.formData.type}  id = "type" onChange={(e) => { this.setFieldValue('type', e) }} placeholder="Type" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
											
												<divColumn style  = {style.col50} > 
												
													<FormLine>
														<FormBlock title='Sub Total' validationStatus = {this.state.subTotal} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} type='text' value = {this.state.formData.subtotal}  id = "subtotal" onChange={(e) => { this.setFieldValue('subtotal', e) }} placeholder="Sub Total" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
														<FormBlock title='Order Status' validationStatus = {this.state.orderStatus} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} type='text' value = {this.state.formData.order_status} id = "order_status" onChange={(e) => { this.setFieldValue('order_status', e) }} placeholder="Order Status" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												<clr style={style.clr}></clr>
													<btn-confirm style = {[style.confirm, style.displayBlock]}>
															<Button type='submit' onClick={(e) => { this.update(e) }} className = 'btn btn-success' style= {style.btnSave} >Update</Button>
													</btn-confirm>
												<clr style={style.clr}></clr>
										</formBackground>
									</formArea>
										</Tab>				
									</Tabs>
						</tabArea>
						
						<rightArea className="col-xs-12 col-sm-4 col-md-3" style={style.padding0}>  
							<rightGrayBox className="col-xs-12 col-sm-12 col-md-12" style={style.rightGrayBox}>
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
					<tableRow className="row">
						<dataListingSection className="col-xs-12 col-sm-12 col-md-12">
							<formHeading style={style.formHeading}>All Orders</formHeading> 
						
							<tableArea className="col-md-12 table-responsive" style={style.inventoryTableBg}>															
								<BootstrapTable data={OrderData} pagination={true}  search={true}   >
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="date_created" >Date Created</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="date_expected" >Date Expected</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="vendor_name" isKey={true}>Vendor Name</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="type">Type</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="subtotal">Sub Total</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="order_status">Order Status</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataFormat={priceFormatter} dataField="id">Action</TableHeaderColumn>
								</BootstrapTable>
							</tableArea>
						</dataListingSection>
					</tableRow>
				</tableContainer>
      </wrapper>
    )
  }
}

OrderManagement.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    orderManagementdetails: state.orderManagement
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OrderManagement))
