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
import ChatBox from '../ChatBox'
import { Label, Table, Col, Tabs, Tab, Button } from 'react-bootstrap'
import EditableDiv from 'react-wysiwyg-editor'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

// exports
export class AddManufacturer extends Form {
  constructor(props) {
    super(props)	
		this.state = {companyNameStatus:'',countryStatus:'', streetAddressStatus:'', cityStatus:'', stateStatus:'', zipStatus:'',
		salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'',
		bldgUnitSuiteStatus:''}

}

	componentDidMount() {
			const { dispatch, session } = this.props
			dispatch({
			type: 'GET_MANUFACTURER',
				payload: {
					loginToken: session.loginTokenDetails.token
				}
			})
  }
	clearForm(e) {
		const { dispatch, session } = this.props
			dispatch({
				type: 'CLEAR_FORM_FOR_MANUFACTURER',
				payload: {
					loginToken: session.loginTokenDetails.token
				}
			})
		e.preventDefault() 
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
	submit(e) {
		const { form, dispatch, session } = this.props
			dispatch({
				type: 'ADD_MANUFACTURER',
				payload: {
					addManufacturerDetails: {
					 loginToken: session.loginTokenDetails.token,
					 companyName: form.data.companyName,
					 country: form.data.country,
					 streetAddress: form.data.streetAddress,
					 bldgUnitSuite: form.data.bldgUnitSuite,
					 city: form.data.city,
					 state: form.data.state,
					 zip: form.data.zip,
					 salesPhone: form.data.salesPhone,
					 emailAddress: form.data.emailAddress,
					 supportPhone: form.data.supportPhone,
					 tollFreePhone: form.data.tollFreePhone,
					 fax: form.data.fax,
					 website: form.data.website
					}
				}
		})
		
	 this.setState({companyNameStatus:'',countryStatus:'',streetAddressStatus:'',cityStatus:'',
	 stateStatus:'',zipStatus:'',salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'',
	 tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', bldgUnitSuiteStatus:''})
	}

		update(e) {
			const { form, dispatch, session } = this.props
				dispatch({
					type: 'UPDATE_MANUFACTURER',
					payload: {
						manufacturerDetails: {
						 loginToken: session.loginTokenDetails.token,
						 id:form.data.id,
						 companyName: form.data.companyName,
						 country: form.data.country,
						 streetAddress: form.data.streetAddress,
						 bldgUnitSuite: form.data.bldgUnitSuite,
						 city: form.data.city,
						 state: form.data.state,
						 zip: form.data.zip,
						 salesPhone: form.data.salesPhone,
						 emailAddress: form.data.emailAddress,
						 supportPhone: form.data.supportPhone,
						 tollFreePhone: form.data.tollFreePhone,
						 fax: form.data.fax,
						 website: form.data.website
						}
					}
			})
			
			 this.setState({companyNameStatus:'',countryStatus:'',streetAddressStatus:'',cityStatus:'',
			 stateStatus:'',zipStatus:'',salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'',
			 tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', bldgUnitSuiteStatus:''})
		}
		

  render() {
  
  const { manufacturerDetails, form, dispatch, session } = this.props
	var dataObject = manufacturerDetails.manufacturerData
				var manufacturerData = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						manufacturerData.push({
								companyName: row.companyName,
								city: row.city,
								state: row.state,
								country:row.country,
								salesPhone: row.salesPhone,
								supportPhone: row.supportPhone,
								tollFreePhone: row.tollFreePhone,
								faxNo:row.fax,
								emailAddress:row.emailAddress,
								streetAddress:row.streetAddress,
								bldgUnitSuite:row.bldgUnitSuite,
								website:row.website,
								zip:row.zip,
								id: row.id
							})
							count = parseInt(count)+1
						}
        }
	function deleteManufacture(cell, e) {
					dispatch({
						type: 'DELETE_MANUFACTURER',
						payload: {
							manufacturerId: {
							 id: cell,
							 loginToken: session.loginTokenDetails.token
							}
						}
				})
		}
		
	function getManufacturerById(cell, e) {
				dispatch({
						type: 'GET_MANUFACTURER_BY_ID',
						payload: {
							manufacturerId: {
							 id: cell,
							 loginToken: session.loginTokenDetails.token
							}
						}
				})
				dispatch({
				type: 'GET_MANUFACTURER',
				payload: {
					loginToken: session.loginTokenDetails.token
				}
				})
		}
	


function priceFormatter(cell, row){
  return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { getManufacturerById(cell, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv><deleteDiv> <a href = 'javascript:void(0)' onClick={(e) => { deleteManufacture(cell, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/delete.png"  /></a></deleteDiv></actionDiv>)
}
	
  return (
		<wrapper style = {[style.wrapper, style.displayBlock]} >
			<DashboardHeader/>
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className="container" style={style.displayBlock}>
					<headerRow>
						<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
							Add Manufacture
						</headingArea>
						<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
							<saveButtonArea style={style.saveButtonArea}>
								<Button type='submit' onClick={(e) => { this.clearForm(e) }} style={style.blueButton} >+ Add New Manufacture</Button>
							</saveButtonArea>
							<backButton style={style.saveButtonArea}>
								<Link to='/manufacturer' style={style.blueButton}>Back</Link>
							</backButton>
						</headerLink>
						
						
					</headerRow>
				</headerContainer>
			</headerSection>
			<topArea className="container" style={style.displayBlock}>
					<rowArea className="row">
						<tabArea className="col-xs-12 col-sm-8 col-md-9">
									<formArea>
									<formHeading style={style.formHeading}>New Manufacture</formHeading> 
										<formBackground className="col-md-12" style={style.inventoryBg}> 
											<divColumn style  = {style.col50} >
												<FormInput type='hidden' value ='' id='id'/>
												<FormLine>
														<FormBlock title='Company Name' validationStatus = {this.state.companyNameStatus} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} id = "companyName" type='text' value = {form.data.companyName} onChange={(e) => { this.setFieldValue('companyName', e) }} placeholder="Company Name" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} > 
													<FormLine>
														<FormBlock title='Street Address' validationStatus = {this.state.streetAddressStatus} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield}  type='text' id = "streetAddress" value = {form.data.streetAddress} onChange={(e) => { this.setFieldValue('streetAddress', e) }} placeholder="Street Address" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} > 
												<FormLine>
													<FormBlock title='Bldg.Unit/Suite' validationStatus = {this.state.bldgUnitSuiteStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.bldgUnitSuite} id = "bldgUnitSuite" onChange={(e) => { this.setFieldValue('bldgUnitSuite', e) }} placeholder="Bldg.Unit/Suite" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
												<FormLine>
													<FormBlock title='City' validationStatus = {this.state.cityStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield}  type='text' value = {form.data.city} id = "city" onChange={(e) => { this.setFieldValue('city', e) }} placeholder="City" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
												<FormLine>
													<FormBlock title='State' validationStatus = {this.state.stateStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.state} id = "state" onChange={(e) => { this.setFieldValue('state', e) }} placeholder="State" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} > 
												
													<FormLine>
														<FormBlock title='Zip' validationStatus = {this.state.zipStatus} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} type='text' value = {form.data.zip} id = "zip" onChange={(e) => { this.setFieldValue('zip', e) }} placeholder="Zip" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
														<FormBlock title='Sales Phone' validationStatus = {this.state.salesPhoneStatus} titleCustomStyle={style.titleStyle}>
														<FormInput Style={style.inputfield} type='text' value = {form.data.salesPhone} id = "salesPhone" onChange={(e) => { this.setFieldValue('salesPhone', e) }} placeholder="Sales Phone" customStyle={style.inventoryInput}/>
														</FormBlock>
													</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
												<FormLine>
													<FormBlock title='Support Phone' validationStatus = {this.state.supportPhoneStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.supportPhone} id = "supportPhone" onChange={(e) => { this.setFieldValue('supportPhone', e) }} placeholder="Support Phone" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Toll Free Phone' validationStatus = {this.state.tollFreePhoneStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.tollFreePhone} id = "tollFreePhone" onChange={(e) => { this.setFieldValue('tollFreePhone', e) }} placeholder="Toll Free Phone" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Fax' validationStatus = {this.state.faxStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.fax} id = "fax" onChange={(e) => { this.setFieldValue('fax', e) }} placeholder="Fax" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Email Address' validationStatus = {this.state.emailAddressStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.emailAddress} id = "emailAddress" onChange={(e) => { this.setFieldValue('emailAddress', e) }} placeholder="Email Address" customStyle={style.inventoryInput}/>
													</FormBlock>
												</FormLine>
												</divColumn>
												
												<divColumn style  = {style.col50} >
													<FormLine>
													<FormBlock title='Website' validationStatus = {this.state.websiteStatus} titleCustomStyle={style.titleStyle}>
													<FormInput Style={style.inputfield} type='text' value = {form.data.website} id = "website" onChange={(e) => { this.setFieldValue('website', e) }} placeholder="Website" customStyle={style.inventoryInput}/>
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
							<formHeading style={style.formHeading}>All Manufactures</formHeading> 
							<tableArea className="col-md-12 table-responsive" style={style.inventoryTableBg}>															
								<BootstrapTable data={manufacturerData} pagination={true}  search={true}   >
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="companyName" isKey={true}>Name</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true}  className='columHeight columBorder' width = "80" dataField="city" >City</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="state" >State</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder'  width = "80" dataField="country" >Country</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="salesPhone">Sales No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="supportPhone">Support no</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="tollFreePhone">Toll Free No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="faxNo">Fax No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="emailAddress">Email</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="bldgUnitSuite">Bldg.Unit/Suite</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true}  dataField="streetAddress">Street Address</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="zip">zip</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" hidden={true} dataField="website">website</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataFormat={priceFormatter} dataField="id">Action</TableHeaderColumn>
								</BootstrapTable>
							</tableArea>
						</dataListingSection>
					</tableRow>
				</tableContainer>
				<ChatBox />
      </wrapper>
    )
  }
}

AddManufacturer.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.addManufacturer,
    manufacturerDetails: state.manufacturer
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(AddManufacturer))
