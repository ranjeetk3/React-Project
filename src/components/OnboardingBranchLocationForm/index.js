// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'

// style
import style from './style.js'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// exports
var jsonCompanyDetails = []
export class OnboardingBranchLocationForm extends Component {
  constructor(props) {
    super(props)
		this.deleteList = this.deleteList.bind(this)
    this.state = {typeStatus:'',parentCompanyStatus:'', branchNameStatus:'', branchAddressStatus:'', streetStatus:'', cityStatus:'', stateStatus:'', zipCodeStatus:'', phoneNumberStatus:'', extensionStatus:'', faxNumberStatus:'', companyEmailStatus:'', companyWebsiteStatus:'', einNumberStatus:'', npiNumberStatus:'', tpiNumberStatus:'', medicareSupplierNumberStatus:'',companyBranchDetails:'', displayNone:'', message:''
    }
  }
  
  setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_BRANCH_LOCATION_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
		
    e.preventDefault()
		switch (value) {
			case 'Warehouse':
				this.setState({displayNone:'displayNone'})
				break
			case 'Sub-Company':
				this.setState({displayNone:''})
				break
			case 'Branch':
				this.setState({displayNone:''})
				break					
		 default:
        break
    }
		switch (field) {
			case 'type':
				this.setState({typeStatus:this.checkEmpty(value)})
				break
			case 'parentCompany':
				this.setState({parentCompanyStatus:this.checkEmpty(value)})
				break
      case 'branchName':
          this.setState({branchNameStatus:this.checkEmpty(value)})
          break
      case 'branchAddress':
        this.setState({branchAddressStatus:this.checkEmpty(value)})
        break
      case 'street':
        this.setState({streetStatus:this.checkEmpty(value)})
        break
			case 'city':
        this.setState({cityStatus:this.checkEmpty(value)})
				this.setState({cityStatus:this.checkString(value)})
        break
      case 'state':
				this.setState({stateStatus:this.checkEmpty(value)})
        break
      case 'zipCode':
        this.setState({zipCodeStatus:this.checkEmpty(value)})
				var regex = new RegExp("^[0-9-]+$")
        if (regex.test(value) && value.length <= 10) {
          this.setState({zipCodeStatus:'correct'})
        } else {
          this.setState({zipCodeStatus:'error'})
        }
        break
			case 'phoneNumber':
        this.setState({phoneNumberStatus:this.checkEmpty(value)})
				this.setState({phoneNumberStatus:this.checkPhonNumber(value)})
        break
			case 'extension':
        var extFormat = /^[0-9]{1,10}$/
        if((value.match(extFormat))) { 
          this.setState({extensionStatus:'correct'})
        } else {
          this.setState({extensionStatus:'error'})
        }
        if (value == '') {
          this.setState({extensionStatus:''})
        }
        break
			case 'faxNumber':
        this.setState({faxNumberStatus:this.checkEmpty(value)})
				this.setState({faxNumberStatus:this.checkPhonNumber(value)})
        break
			case 'companyEmail':
        this.setState({companyEmailStatus:this.checkEmpty(value)})
				this.setState({companyEmailStatus:this.checkEmail(value)})
        break
			case 'companyWebsite':
				this.setState({companyWebsiteStatus:this.checkWebsite(value)})
        break
			case 'npiNumber':
				var regex = new RegExp("^[a-zA-Z0-9]+$")
					if (regex.test(value)) {
						this.setState({npiNumberStatus:'correct'})
					} else {
						this.setState({npiNumberStatus:'error'})
					}
				if (value == '') {
				 this.setState({npiNumberStatus:''})
        }
        break
			case 'medicareSupplierNumber':
			  var regex = new RegExp("^[a-zA-Z0-9]+$")
					if (regex.test(value) && value.length <= 20) {
						this.setState({medicareSupplierNumberStatus:'correct'})
					} else {
						this.setState({medicareSupplierNumberStatus:'error'})
					}
					if (value == '') {
						this.setState({medicareSupplierNumberStatus:''})
					}
        break
			case 'einNumber':
			  var einFormat = /^[0-9]{1,9}$/
					if((value.match(einFormat))) { 
						this.setState({einNumberStatus:'correct'})
					} else {
						this.setState({einNumberStatus:'error'})
					}
					if (value == '') {
						this.setState({einNumberStatus:''})
					}
        break
			case 'tpiNumber':
			  var tpiFormat = new RegExp("^[0-9-]+$")
					if((value.match(tpiFormat))) { 
						this.setState({tpiNumberStatus:'correct'})
					} else {
						this.setState({tpiNumberStatus:'error'})
					}
					if (value == '') {
						this.setState({tpiNumberStatus:''})
					}
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
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
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
	addAnotherBranch(e) {
	const { form, dispatch } = this.props
	e.preventDefault()
	if(form.data.branchAddress == '' || form.data.street == '' || form.data.city == '' || form.data.state == '' || form.data.zipCode == '' || form.data.phoneNumber == '' || form.data.faxNumber == '') {
	return false
	} else {
	var companyBranchDetails = {
					parentId: form.data.parentCompany,
					type: form.data.type,
					name: form.data.branchName,
					street_1: form.data.branchAddress,
					street_2: form.data.street,
					city: form.data.city,
					state: form.data.state,
					postalCode: form.data.zipCode,
					phoneNumber: form.data.phoneNumber,
					extension: form.data.extension,
					faxNumber: form.data.faxNumber,
					companyEmail: form.data.companyEmail,
					companyWebsiteUrl: form.data.companyWebsite,
					ein: form.data.einNumber,
					npi: form.data.npiNumber,
					tpiNumber: form.data.tpiNumber,
					medicareSupplier: form.data.medicareSupplierNumber 
				}
		var phNum = companyBranchDetails.phoneNumber
		for (var key in jsonCompanyDetails) {
			var keyValue = key
			var row  = jsonCompanyDetails[key]
			if(phNum == row.phoneNumber) {
				return false
			}
		}
		jsonCompanyDetails.push(companyBranchDetails)
		this.setState({CompanyDetailsLength:jsonCompanyDetails.length})
		this.setState({CompanyDetailsGrid:jsonCompanyDetails})
			dispatch({
				type: 'BRANCH_LOCATION_RESET_FORM'
			})
      this.setState({typeStatus:''})
      this.setState({parentCompanyStatus:''})
      this.setState({branchNameStatus:''})
      this.setState({branchAddressStatus:''})
      this.setState({streetStatus:''})
      this.setState({cityStatus:''})
      this.setState({stateStatus:''})
      this.setState({zipCodeStatus:''})
      this.setState({phoneNumberStatus:''})
      this.setState({extensionStatus:''})
      this.setState({faxNumberStatus:''})
      this.setState({companyEmailStatus:''})
      this.setState({companyWebsiteStatus:''})
      this.setState({npiNumberStatus:''})
      this.setState({medicareSupplierNumberStatus:''})
      this.setState({einNumberStatus:''})
      this.setState({tpiNumberStatus:''})
		}
	}
	
	deleteList(rowVar, e) {
	 e.preventDefault()
	 var rows = this.state.CompanyDetailsGrid
	 var throwout = rows.splice(rowVar, 1)
	 this.setState({CompanyDetailsLength:rows.length})
	 this.setState({CompanyDetailsGrid:rows})
	}
	
  componentWillMount() {
    const { dispatch, session} = this.props
    dispatch({
      type: 'GET_ONBOARDING_COMPANIES',
      payload: {
		loginToken: session.loginTokenDetails.token
      }
    })
  }	
	
  submit(e) {
    const { form, dispatch, session } = this.props
    e.preventDefault()
      dispatch({
        type: 'POST_BRANCH_LOCATION_DETAILS',
        payload: {
          companyBranchDetails: {
				userDetails: this.state.CompanyDetailsGrid,
				loginToken: session.loginTokenDetails.token
          }
        }
    })
	this.setState({CompanyDetailsLength:''})
	this.setState({CompanyDetailsGrid:''})
  }
  
  render() {
    const { form, companies } = this.props
		var messageStatus = form.messageStatus
		var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
		var gridsValue = this.state.CompanyDetailsGrid
		var detailsLength = this.state.CompanyDetailsLength
		var tableGrid = []
		var rowVar =0
		 if (detailsLength != 0) {
		      for (var key in gridsValue) {
					var keyValue = key
					var row  = gridsValue[key]
          tableGrid.push(<tr style = {[style.employee.tr]} >
						<td style ={[style.employee.td, style.displayBlock]}>{row.type}</td>
						<td style ={[style.employee.td, style.displayBlock]}>{row.street_1} {row.city} {row.state} {row.postal_code} {row.street_2}</td>
						<td style ={[style.employee.td, style.displayBlock]}>{row.phoneNumber}</td>
						<td style ={[style.employee.td, style.displayBlock]}>{row.faxNumber}</td>
						<td style ={[style.employee.td, style.displayBlock, style.employee.right]}><a href ='#' id = {keyValue} onClick={(e) => { this.deleteList(keyValue, e) }}><img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/delete.png'/></a></td>
					</tr>
        )
      }
		}
		
		const typeList=[{text:'Please Choose',value:''},{text:'Sub-Company',value:'Sub-Company'},{text:'Branch',value:'Branch'},{text:'Warehouse',value:'Warehouse'}]
		var typeListValue = []
		 if (typeList.length != 0) {
      for (var i = 0; i < typeList.length; i++) {
        typeListValue.push(
          < option value = {typeList[i]['value']} > {typeList[i]['text']} < /option>
        )
      }
    }
		var usStates = [{text:'Please Choose',value:''},{ text: 'ALABAMA', value: 'AL'}, { text: 'ALASKA', value: 'AK'}, { text: 'AMERICAN SAMOA', value: 'AS'}, { text: 'ARIZONA', value: 'AZ'}, { text: 'ARKANSAS', value: 'AR'}, { text: 'CALIFORNIA', value: 'CA'}, { text: 'COLORADO', value: 'CO'}, { text: 'CONNECTICUT', value: 'CT'}, { text: 'DELAWARE', value: 'DE'}, { text: 'DISTRICT OF COLUMBIA', value: 'DC'}, { text: 'FEDERATED STATES OF MICRONESIA', value: 'FM'}, { text: 'FLORIDA', value: 'FL'}, { text: 'GEORGIA', value: 'GA'}, { text: 'GUAM', value: 'GU'}, { text: 'HAWAII', value: 'HI'}, { text: 'IDAHO', value: 'ID'}, { text: 'ILLINOIS', value: 'IL'}, { text: 'INDIANA', value: 'IN'}, { text: 'IOWA', value: 'IA'}, { text: 'KANSAS', value: 'KS'}, { text: 'KENTUCKY', value: 'KY'}, { text: 'LOUISIANA', value: 'LA'}, { text: 'MAINE', value: 'ME'}, { text: 'MARSHALL ISLANDS', value: 'MH'}, { text: 'MARYLAND', value: 'MD'}, { text: 'MASSACHUSETTS', value: 'MA'}, { text: 'MICHIGAN', value: 'MI'}, { text: 'MINNESOTA', value: 'MN'}, { text: 'MISSISSIPPI', value: 'MS'}, { text: 'MISSOURI', value: 'MO'}, { text: 'MONTANA', value: 'MT'}, { text: 'NEBRASKA', value: 'NE'}, { text: 'NEVADA', value: 'NV'}, { text: 'NEW HAMPSHIRE', value: 'NH'}, { text: 'NEW JERSEY', value: 'NJ'}, { text: 'NEW MEXICO', value: 'NM'}, { text: 'NEW YORK', value: 'NY'}, { text: 'NORTH CAROLINA', value: 'NC'}, { text: 'NORTH DAKOTA', value: 'ND'}, { text: 'NORTHERN MARIANA ISLANDS', value: 'MP'}, { text: 'OHIO', value: 'OH'}, { text: 'OKLAHOMA', value: 'OK'}, { text: 'OREGON', value: 'OR'}, { text: 'PALAU', value: 'PW'}, { text: 'PENNSYLVANIA', value: 'PA'}, { text: 'PUERTO RICO', value: 'PR'},
    { text: 'RHODE ISLAND', value: 'RI'}, { text: 'SOUTH CAROLINA', value: 'SC'}, { text: 'SOUTH DAKOTA', value: 'SD'}, { text: 'TENNESSEE', value: 'TN'},
    { text: 'TEXAS', value: 'TX'}, { text: 'UTAH', value: 'UT'}, { text: 'VERMONT', value: 'VT'}, { text: 'VIRGIN ISLANDS', value: 'VI'}, { text: 'VIRGINIA', value: 'VA'}, { text: 'WASHINGTON', value: 'WA'}, { text: 'WEST VIRGINIA', value: 'WV'}, { text: 'WISCONSIN', value: 'WI'}, { text: 'WYOMING', value: 'WY' }]
		var usStatesList = []
		 if (usStates.length != 0) {
      for (var i = 0; i < usStates.length; i++) {
        usStatesList.push(
          < option value = {usStates[i]['value']} > {usStates[i]['text']} < /option>
        )
      }
    }

	
	//create array of companies of loggedin user
    const companiesArray = companies.companies
    var companiesList = []
    companiesList.push(
      < option value = '' > Please Choose < /option>
    )
    if (companiesArray.length != 0) {
      var companiesDataArray = companiesArray.data
      for (var i = 0; i < companiesDataArray.length; i++) {
        companiesList.push(
          < option value = {companiesDataArray[i]['CompanyID']}> {companiesDataArray[i]['CompanyName']} < /option>
        )
      }
    }
	
    return (
      <wrapper>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <heading style={[style.thanks, style.displayBlock]} >
          <thanksHeading style={[style.heading, style.displayBlock]}>Let’s add any additional branch locations you may have. <Link to='/onBoardingUsersForm' style={style.btnEnroll} > Skip </Link></thanksHeading>
        </heading>
        <form>
		
				 <qus-form style = {[style.qusCol, style.displayBlock]}>
            <content style = {[style.content, style.displayBlock]}>
			{messageStyle != '' ? <ListGroup style={style.alertMessage}>
			<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
			</ListGroup> : ''}
						 <left-qus style = {[style.left, style.displayBlock]}>
							 {this.state.displayNone=='displayNone' ? '':
								<FormLine>
									<FormBlock title='Parent Company' validationIconStyle={style.validationIcon} validationStatus = {this.state.parentCompanyStatus}>
                     < select style={style.dropDownList} value={form.data.parentCompany} onChange={(e) => { this.setFieldValue('parentCompany', e) }} >
                      {companiesList}
                    < /select>
									</FormBlock>
								</FormLine>
							 }
							  <FormLine>
									<FormBlock title='Type' validationIconStyle={style.validationIcon} validationStatus = {this.state.typeStatus}>
										< select style={style.dropDownList} value={form.data.type} onChange={(e) => { this.setFieldValue('type', e) }} >
                      {typeListValue}
                    < /select>
									</FormBlock>
								</FormLine>
								{this.state.displayNone=='displayNone' ? '':
                <FormLine>
                  <FormBlock title='Branch/Location Name' validationIconStyle={style.validationIcon} validationStatus = {this.state.branchNameStatus} >
                    <FormInput type='text' value={form.data.branchName} onChange={(e) => { this.setFieldValue('branchName', e) }}  />
                  </FormBlock>
                </FormLine>
								}
                <FormLine>
                  <FormBlock title='Branch/Location Address' validationIconStyle={style.validationIcon} validationStatus = {this.state.branchAddressStatus}>
                    <FormInput type='text' value={form.data.branchAddress} onChange={(e) => { this.setFieldValue('branchAddress', e) }}  />
                  </FormBlock>
                </FormLine>
                
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col35}>
                    <FormBlock title='Suite/Building' validationIconStyle={style.validationIcon} validationStatus = {this.state.streetStatus}>
                     <FormInput type='text' value={form.data.street} onChange={(e) => { this.setFieldValue('street', e) }} />
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col65}>
                    <FormBlock title='city' validationIconStyle={style.validationIcon} validationStatus = {this.state.cityStatus}>
                      <FormInput type='text' value={form.data.city} onChange={(e) => { this.setFieldValue('city', e) }} />
                    </FormBlock>
                  </FormLine>
                </fields-container>
								
							 <FormLine>
									<FormBlock title='State' validationIconStyle={style.validationIcon} validationStatus = {this.state.stateStatus}>
										< select style={style.dropDownList} value={form.data.state} onChange={(e) => { this.setFieldValue('state', e) }} >
											{usStatesList}
										< /select>
									</FormBlock>
								</FormLine>
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col35}>
                    <FormBlock title='Zip Code' validationIconStyle={style.validationIcon} validationStatus = {this.state.zipCodeStatus}>
                      <FormInput type='text' value={form.data.zipCode} onChange={(e) => { this.setFieldValue('zipCode', e) }}  />
                    </FormBlock>
                  </FormLine>
                </fields-container>
              </left-qus>
							<right-qus style = {[style.right, style.displayBlock]}>
							{this.state.displayNone=='displayNone' ? 
							 <FormLine>
                  <FormBlock title='Main phone number' validationIconStyle={style.validationIcon} validationStatus = {this.state.phoneNumberStatus}>
                    <FormInput type='text' value={form.data.phoneNumber} onChange={(e) => { this.setFieldValue('phoneNumber', e) }}  />
                  </FormBlock>
							</FormLine>:
              <fields-container style={style.fieldsContainer}>
                <FormLine customStyle={style.col65}>
                  <FormBlock title='Main phone number' validationIconStyle={style.validationIcon} validationStatus = {this.state.phoneNumberStatus}>
                    <FormInput type='text' value={form.data.phoneNumber} onChange={(e) => { this.setFieldValue('phoneNumber', e) }}  />
                  </FormBlock>
                </FormLine>

                <FormLine customStyle={style.col35}>
                  <FormBlock title='Ext.' validationIconStyle={style.validationIcon} validationStatus = {this.state.extensionStatus}>
                    <FormInput type='text' value={form.data.extension} onChange={(e) => { this.setFieldValue('extension', e) }} />
                  </FormBlock>
                </FormLine>
              </fields-container>   
              }
                <FormLine>
                  <FormBlock title='Fax number' validationIconStyle={style.validationIcon} validationStatus = {this.state.faxNumberStatus}>
                     <FormInput type='text' value={form.data.faxNumber} onChange={(e) => { this.setFieldValue('faxNumber', e) }} />
                  </FormBlock>
                </FormLine>
								<FormLine>
                  <FormBlock title='Company Email' validationIconStyle={style.validationIcon} validationStatus = {this.state.companyEmailStatus}>
                     <FormInput type='text' value={form.data.companyEmail} onChange={(e) => { this.setFieldValue('companyEmail', e) }} />
                  </FormBlock>
                </FormLine>
								{this.state.displayNone=='displayNone' ? '':
								<FormLine>
                  <FormBlock title='Company Website' validationIconStyle={style.validationIcon} validationStatus = {this.state.companyWebsiteStatus}>
                     <FormInput type='text' value={form.data.companyWebsite} onChange={(e) => { this.setFieldValue('companyWebsite', e) }} />
                  </FormBlock>
                </FormLine>
								}
								{this.state.displayNone=='displayNone' ? '':
								<FormLine>
                  <FormBlock title='EIN Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.einNumberStatus}>
                     <FormInput type='text' value={form.data.einNumber} onChange={(e) => { this.setFieldValue('einNumber', e) }} />
                  </FormBlock>
                </FormLine>
								}
								{this.state.displayNone=='displayNone' ? '':
								<FormLine>
                  <FormBlock title='NPI Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.npiNumberStatus}>
                     <FormInput type='text' value={form.data.npiNumber} onChange={(e) => { this.setFieldValue('npiNumber', e) }} />
                  </FormBlock>
                </FormLine>
								}
								{this.state.displayNone=='displayNone' ? '':
								<FormLine>
                  <FormBlock title='TPI Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.tpiNumberStatus}>
                     <FormInput type='text' value={form.data.tpiNumber} onChange={(e) => { this.setFieldValue('tpiNumber', e) }} />
                  </FormBlock>
                </FormLine>
								}
								{this.state.displayNone=='displayNone' ? '':
								<FormLine>
                  <FormBlock title='Medicare Supplier Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.medicareSupplierNumberStatus}>
                     <FormInput type='text' value={form.data.medicareSupplierNumber} onChange={(e) => { this.setFieldValue('medicareSupplierNumber', e) }} />
                  </FormBlock>
                </FormLine>
								}
              <FormLine>
                <btn-next style = {[style.next, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.addAnotherBranch(e) }} icon ={<img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/plus.png' />} text={form.isSubmitting ? ' Proccessing' : ' Add Another Branch'} customStyle={[style.btnLogin]}/>
                </btn-next>
              </FormLine>
              </right-qus>
              <clr style={style.clr}></clr>
								{this.state.message}
								<employ-added style={ style.employee.added }>
								 <employ-head style={ style.employee.head }>
									 <permission style={ style.employee.permission }>{detailsLength} Branch/Locations Added</permission>
								</employ-head>
								<access-table style={ style.employee.tableAdd }>
									 <table style= {[style.employee.table]}>
										 <thead style= {[style.employee.thead, style.displayBlock]}>
												 <tr style = {[style.employee.tr]}>
													 <th style = {[style.employee.th, style.displayBlock]}>Type</th>
													 <th style = {[style.employee.th, style.displayBlock]}>Address</th>
													 <th style = {[style.employee.th, style.displayBlock]}>Phone</th>
													 <th style = {[style.employee.th, style.displayBlock]}>Fax</th>
													 <th style = {[style.employee.th, style.displayBlock, style.employee.right]}>Remove</th>
												 </tr>
										 </thead>
										 <tbody style = {[ style.displayBlock, style.employee.tbody ]}>
												{tableGrid}
										 </tbody>
									</table>
						 </access-table>		  
						 </employ-added>
              <FormLine customStyle={ style.employee.btnWrap }>
                <btn-next style = {[style.next, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Proccessing' : 'Done'} customStyle={[style.btnLogin, style.btnAdj]}/>
                </btn-next>
              </FormLine>
              < Footer footerType = 'onBoarding' />
						</content>
          </qus-form>
        </form>
      </wrapper>
    )
  }
}

OnboardingBranchLocationForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.onboardingBranchLocationForm,
	companies: state.companyDetailsForm,
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OnboardingBranchLocationForm))
