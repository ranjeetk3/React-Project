// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

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
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

// exports
export class CompanyDetailsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {nameStatus:'', streetFirstStatus:'',streetSecondStatus:'',
      cityStatus:'', stateStatus:'', postalCodeStatus:'', phoneNumberStatus:'', extensionStatus:'', faxNumberStatus:'',
      einStatus:'', npiStatus:'', medicareNumberStatus:'', medicaidNumberStatus:''
    }
  }
  
  setFieldValue(field, e) {
    const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_COMPANYINFO_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'name':
        this.setState({nameStatus:this.checkEmpty(value)})
        var nameFormat = /^[a-zA-Z].*/
        if(!value.match(nameFormat)) { 
          this.setState({nameStatus:'error'})
        } else {
          this.setState({nameStatus:'correct'})
        }
        break
      case 'phoneNumber':
          this.setState({phoneNumberStatus:this.checkEmpty(value)})
          this.setState({phoneNumberStatus:this.checkPhonNumber(value)})
          break
      case 'street_1':
        this.setState({streetFirstStatus:this.checkEmpty(value)})
        this.setState({streetFirstStatus:this.checkAddress(value)})
        break
      case 'street_2':
        this.setState({streetSecondStatus:this.checkEmpty(value)})
        this.setState({streetSecondStatus:this.checkAddress(value)})
        break
      case 'street_3':
        this.setState({streetThirdStatus:this.checkAddress(value)})
        if (value == '') {
          this.setState({streetThirdStatus:''})
        }
        break
      case 'city':
        this.setState({cityStatus:this.checkEmpty(value)})
        this.setState({cityStatus:this.checkString(value)})
        break
      case 'state':
        this.setState({stateStatus:this.checkEmpty(value)})
        this.setState({stateStatus:this.checkString(value)})
        break
      case 'faxNumber':
        this.setState({faxNumberStatus:this.checkEmpty(value)})
        this.setState({faxNumberStatus:this.checkPhonNumber(value)})
        break
      case 'extension':
        var einFormat = /^[0-9]{1,10}$/
        if((value.match(einFormat))) { 
          this.setState({extensionStatus:'correct'})
        } else {
          this.setState({extensionStatus:'error'})
        }
        if (value == '') {
          this.setState({extensionStatus:''})
        }
        break
      case 'postalCode':
        this.setState({postalCodeStatus:this.checkEmpty(value)})
        var regex = new RegExp("^[0-9-]+$")
        if (regex.test(value) && value.length <= 10) {
          this.setState({postalCodeStatus:'correct'})
        } else {
          this.setState({postalCodeStatus:'error'})
        }
        break
      case 'ein':
        this.setState({einStatus:this.checkEmpty(value)})
        var einFormat = /^[0-9]{1,9}$/
        if((value.match(einFormat))) { 
          this.setState({einStatus:'correct'})
        } else {
          this.setState({einStatus:'error'})
        }
        break
      case 'npi':
        this.setState({npiStatus:this.checkEmpty(value)})
        var regex = new RegExp("^[a-zA-Z0-9]+$")
        if (regex.test(value)) {
          this.setState({npiStatus:'correct'})
        } else {
          this.setState({npiStatus:'error'})
        }
        break
      case 'medicareNumber':
        this.setState({medicareNumberStatus:this.checkEmpty(value)})
        var regex = new RegExp("^[a-zA-Z0-9]+$")
        if (regex.test(value) && value.length <= 20) {
          this.setState({medicareNumberStatus:'correct'})
        } else {
          this.setState({medicareNumberStatus:'error'})
        }
        break
      case 'medicaidNumber':
        this.setState({medicaidNumberStatus:this.checkEmpty(value)})
        var regex = new RegExp("^[a-zA-Z0-9]+$")
        if (regex.test(value) && value.length <= 20) {
          this.setState({medicaidNumberStatus:'correct'})
        } else {
          this.setState({medicaidNumberStatus:'error'})
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
  checkAddress(value) {
    let status
    var addressFormat = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/
    if(!value.match(addressFormat)) { 
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
  submit(e) {
    const { form, dispatch, session } = this.props
    e.preventDefault()
    if (this.state.nameStatus == 'error' || this.state.streetFirstStatus == 'error' || this.state.streetSecondStatus == 'error' ||
      this.state.cityStatus == 'error' || this.state.stateStatus == 'error' || this.state.postalCodeStatus == 'error' || this.state.phoneNumberStatus == 'error' || this.state.extensionStatus == 'error' || this.state.faxNumberStatus == 'error' ||
      this.state.einStatus == 'error' || this.state.npiStatus == 'error' || this.state.medicareNumberStatus == 'error' || this.state.medicaidNumberStatus == 'error' ||
      (form.data.name == null) || (form.data.name == '')
        || (form.data.street_1 == null) || (form.data.street_1 == '')
        || (form.data.street_2 == null) || (form.data.street_2 == '')
        || (form.data.city == null) || (form.data.city == '')
        || (form.data.state == null) || (form.data.state == '')
        || (form.data.postalCode == null) || (form.data.postalCode == '')
        || (form.data.phoneNumber == null) || (form.data.phoneNumber == '')
        || (form.data.faxNumber == null) || (form.data.faxNumber == '')
        || (form.data.ein == null) || (form.data.ein == '')
        || (form.data.npi == null) || (form.data.npi == '')
        || (form.data.medicareNumber == null) || (form.data.medicareNumber == '')
        || (form.data.medicaidNumber == null) || (form.data.medicaidNumber == '')
        ) {
      return false
    } else {
      dispatch({
        type: 'SAVE_COMPANY_INFORMATION',
        payload: {
          companyDetails: {
            name: form.data.name,
            street_1: form.data.street_1,
            street_2: form.data.street_2,
            city: form.data.city,
            state: form.data.state,
            postalCode: form.data.postalCode,
            phoneNumber: form.data.phoneNumber,
            extension: form.data.extension,
            faxNumber: form.data.faxNumber,
            ein: form.data.ein,
            npi: form.data.npi,
            medicareNumber: form.data.medicareNumber,
            medicaidNumber: form.data.medicaidNumber,
			loginToken: session.loginTokenDetails.token
          }
        }
    })
		dispatch({
			type: 'POST_SOFTWARE_OPTIONS',
			 payload: {
				loginToken: session.loginTokenDetails.token
			 }
		})	
    }
  }
  
  render() {
    const { form } = this.props
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
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
    return (
      <wrapper>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <heading style={[style.thanks, style.displayBlock]} >
          <thanksHeading style={[style.heading, style.displayBlock]}>We just need a few pieces of information to complete your company profile.</thanksHeading>
        </heading>
        <qus-form style = {[style.qusCol, style.displayBlock]}>
          <content style = {[style.content, style.displayBlock]}>
            <form>
			{messageStyle != '' ? 
			<ListGroup style={style.alertMessage}> 
			<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
			</ListGroup> : ''}
              <left-qus style = {[style.left, style.displayBlock]}>
                <FormLine>
                  <FormBlock title='Company Name' validationIconStyle={style.validationIcon} validationStatus = {this.state.nameStatus} >
                    <FormInput type='text' value={form.data.name} onChange={(e) => { this.setFieldValue('name', e) }} isDisabled={form.isSubmitting}/>
                  </FormBlock>
                </FormLine>

                <FormLine>
                  <FormBlock title='Please enter your company address' validationIconStyle={style.validationIcon} validationStatus = {this.state.streetFirstStatus}>
                    <FormInput type='text' value={form.data.street_1} onChange={(e) => { this.setFieldValue('street_1', e) }} isDisabled={form.isSubmitting}/>
                  </FormBlock>
                </FormLine>
                
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col35}>
                    <FormBlock title='Suite/Building' validationIconStyle={style.validationIcon} validationStatus = {this.state.streetSecondStatus}>
                     <FormInput type='text' value={form.data.street_2} onChange={(e) => { this.setFieldValue('street_2', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col65}>
                    <FormBlock title='city' validationIconStyle={style.validationIcon} validationStatus = {this.state.cityStatus}>
                      <FormInput type='text' value={form.data.city} onChange={(e) => { this.setFieldValue('city', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>
                </fields-container>
            
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col50}>
                    <FormBlock title='State' validationIconStyle={style.validationIcon} validationStatus = {this.state.stateStatus}>
						< select style={style.dropDownList} value={form.data.state} onChange={(e) => { this.setFieldValue('state', e) }} >
							{usStatesList}
						< /select>
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col50}>
                    <FormBlock title='Zip Code' validationIconStyle={style.validationIcon} validationStatus = {this.state.postalCodeStatus}>
                      <FormInput type='text' value={form.data.postalCode} onChange={(e) => { this.setFieldValue('postalCode', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>
                </fields-container>
              </left-qus>

              <right-qus style = {[style.right, style.displayBlock]}>
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col65}>
                    <FormBlock title='Main phone number' validationIconStyle={style.validationIcon} validationStatus = {this.state.phoneNumberStatus}>
                      <FormInput type='text' value={form.data.phoneNumber} onChange={(e) => { this.setFieldValue('phoneNumber', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col35}>
                    <FormBlock title='Ext.' validationIconStyle={style.validationIcon} validationStatus = {this.state.extensionStatus}>
                      <FormInput type='text' value={form.data.extension} onChange={(e) => { this.setFieldValue('extension', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>
                </fields-container>   
              
                <FormLine>
                  <FormBlock title='Fax number' validationIconStyle={style.validationIcon} validationStatus = {this.state.faxNumberStatus}>
                     <FormInput type='text' value={form.data.faxNumber} onChange={(e) => { this.setFieldValue('faxNumber', e) }} isDisabled={form.isSubmitting} />
                  </FormBlock>
                </FormLine>
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col50}>
                    <FormBlock title='EIN' validationIconStyle={style.validationIcon} validationStatus = {this.state.einStatus}>
                      <FormInput type='text' value={form.data.ein} onChange={(e) => { this.setFieldValue('ein', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col50}>
                    <FormBlock title='NPI' validationIconStyle={style.validationIcon} validationStatus = {this.state.npiStatus}>
                      <FormInput type='text' value={form.data.npi} onChange={(e) => { this.setFieldValue('npi', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>
                </fields-container>
            
                <fields-container style={style.fieldsContainer}>
                  <FormLine customStyle={style.col50}>
                    <FormBlock title='Medicare Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.medicareNumberStatus}>
                      <FormInput type='text' value={form.data.medicareNumber} onChange={(e) => { this.setFieldValue('medicareNumber', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>

                  <FormLine customStyle={style.col50}>
                    <FormBlock title='Medicaid Number' validationIconStyle={style.validationIcon} validationStatus = {this.state.medicaidNumberStatus}>
                      <FormInput type='text' value={form.data.medicaidNumber} onChange={(e) => { this.setFieldValue('medicaidNumber', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                  </FormLine>
                </fields-container>
              </right-qus>
              <clr style={style.clr}></clr>
              <FormLine>
                <btn-next style = {[style.next, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Submitting' : 'Next'} customStyle={style.btnLogin}/>
                </btn-next>
              </FormLine>
            </form>
            < Footer footerType = 'onBoarding' />
          </content>
        </qus-form>
      </wrapper>
    )
  }
}

CompanyDetailsForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.companyDetailsForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(CompanyDetailsForm))
