// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/tableStyle.css'
import '../../css/fonts.css'
import style from './style.js'

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
var data = []
// exports
export class OrderManagement extends Form {
  constructor(props) {
    super(props)	
		this.state = {formData: '', dateCreated:'',dateExpected:'', vendorName:'', type:'', purchaseRequest:'', purchaseOrders:'',status:''}
	}

	componentDidMount() {
			const { dispatch, session } = this.props
			dispatch({
			type: 'GET_PURCHASE_REQUEST_BY_ID',
			payload: {
				requestDetails: {
						id: 1,
						loginToken: session.loginTokenDetails.token
						}
					}
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
			console.log(JSON.stringify(formData))
		}	

  render() {
	var currObj = this
  const { orderManagementdetails, dispatch } = this.props

	var dataObject = orderManagementdetails.OrderData
	
	data = dataObject
	console.log('data'+ JSON.stringify(dataObject))
			var OrderData = []
						

function priceFormatter(cell, row){
  return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { currObj.getOrderById(cell,row, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv></actionDiv>)
}
var products = [{
      number: 1,
      name: "name1",
      manufacturer: 'manufacturer1',
      vendor: 'vendor1',
      category:'category1',
      Qty:2,
      price:20
      
  }, {
      number: 2,
      name: "name2",
      manufacturer: 'manufacturer2',
      vendor: 'vendor2',
      category:'category2',
      Qty:2,
      price:20
  },
  {
      number: 3,
      name: "name3",
      manufacturer: 'manufacturer3',
      vendor: 'vendor3',
      category:'category3',
      Qty:2,
      price:20
  }];
  return (
     
		<wrapper style = {[style.wrapper, style.displayBlock]} >
			<DashboardHeader/>
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className="container" style={style.displayBlock}>
					<headerRow>
						<headingArea className="col-xs-12 col-sm-5 col-md-4" style={style.headerText}>
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
						<tabArea className="col-sm-8 col-md-9" style={style.mobilepadding}>
							<Tabs defaultActiveKey={1}>
								<Tab eventKey={1} title="Order Info">
									<formArea>
										<formBackground className="col-md-12" style={style.inventoryBg}> 
											
                                            <labelDiv className='col-xs-12 col-sm-12 col-md-4'>
												<divColumn style  = {style.col100} > 
												Id : {data.id}
												</divColumn>
												
												<divColumn style  = {style.col100} > 
											    Date Created : {data.date_created}
												</divColumn>
                                                
                                                <divColumn style  = {style.col100} > 
											    Created By : John Smith
												</divColumn>
                                                </labelDiv>
                                                
                                                <labelDiv className='col-xs-12 col-sm-12 col-md-5'>
												<divColumn style  = {style.col100} > 
												Location : {data.street_1}
												</divColumn>
												
												<divColumn style  = {style.col100} > 
											    Vendor : ResMed
												</divColumn>
                                                
                                                <divColumn style  = {style.col100}> 
											    Terms : Net 90 2-4 Day Lead Time
												</divColumn>
                                                </labelDiv>
                                                
                                                <labelDiv className='col-xs-12 col-sm-12 col-md-3'>
												<divColumn style  = {style.colBold}> 
												Status : Pending
												</divColumn>
                                                </labelDiv>
                                                
                                            <bottomDiv className='row' style={style.displayInline}>
                                            <textDiv className='col-xs-12 col-sm-12 col-md-3' style  = {[style.textCenter, style.floatRight]}> <divColumn style  = {style.colBold} > 
																						Amount : $3,420.00
																						</divColumn></textDiv>
                                            <buttonDiv className='col-xs-12 col-sm-9 col-md-8' style={[style.padding0, style.textCenter]}> 
                                            <headingButton style={style.orderManagementBtn}> 
                                            <button style={[style.greenBtn, style.btnSave1]}>Modify Request
                                            </button> 
                                            </headingButton>
                                           
                                             <headingButton style={style.orderManagementBtn}> 
                                            <button style={[style.greenBtn, style.btnSave1]}>VOID Request
                                            </button> 
                                            </headingButton>

                                             <headingButton style={style.orderManagementBtn}> 
                                            <button style={[style.greenBtn, style.btnSave1]}>Approve Request
                                            </button> 
                                            </headingButton>
                                            </buttonDiv> 
                                            </bottomDiv>                                            
			
										</formBackground>
									</formArea>
										</Tab>

                                        
 


                                  <Tab eventKey={2} title="Items">
										<formBackground className="col-md-12" style={[style.orderManagementBg, style.padding0]}>

                                        <itemsProducts className='col-xs-12' style ={[style.ItemsH1, style.padding0]}>Items</itemsProducts>  
                                        
                                            <responsive style={style.tableResponsive}>
                                            <BootstrapTable data={products}   pagination={true}>

                                            <TableHeaderColumn dataSort={true} className='columHeight'  dataField='number' isKey={true} >Number</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'   dataField='name'>Name</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'   dataField='manufacturer'>Manufacturer</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'   dataField='vendor'>Vendor</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'  dataField='category'>Category</TableHeaderColumn>
                                            
                                            <TableHeaderColumn dataSort={true} className='columHeight'  dataField='Qty'>Qty</TableHeaderColumn>
                                            
                                            <TableHeaderColumn dataSort={true} className='columHeight'  dataField='price'>Price</TableHeaderColumn>

                                            </BootstrapTable>
                                            </responsive>
                                             
                                            <bottomDiv className='row'>  
                                            <buttonArea className='col-xs-12 col-sm-4 col-md-4' style={style.textCenter}>  <headingButton style={style.saveProducts}> 
                                            <button style={[style.greenBtn, style.btnSave1]}>Approve Request
                                            </button> 
                                            </headingButton> </buttonArea> 
                                            <textBox className='col-xs-12 col-sm-4 col-md-4 pull-right' style={[style.colBold, style.textCenter]} >  Sub-total: $3,920.00  </textBox> 
                                            </bottomDiv>

										</formBackground>
                                            
										</Tab> 
                                        
                                        
                                        
                                           <Tab eventKey={3} title="History">
										<formBackground className="col-md-12" style={[style.orderManagementBg, style.padding0]}>

                                        <productItems className='col-xs-12' style ={[style.ItemsH1, style.padding0]} >Items</productItems>                                        

                                            <BootstrapTable data={products} pagination={true}>

                                            <TableHeaderColumn dataSort={true} className='columHeight'  dataField='number' isKey={true} >Date</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'   dataField='name'>User</TableHeaderColumn>

                                            <TableHeaderColumn dataSort={true} className='columHeight'   dataField='manufacturer'>Action</TableHeaderColumn>

                                            </BootstrapTable>

										</formBackground>
                                            
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
