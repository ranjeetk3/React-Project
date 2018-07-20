// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'

// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import SignupPage from '../SignupPage'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// style
import style from './style'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'

// exports
export class RegistrationForm extends Form {
    constructor(props) {
        super(props)
        this.setFieldValue = this.setFieldValue.bind(this)
        this.state = {passwordType:'password',rePasswordType:'password', salutationStatus:'', firstNameStatus:'',lastNameStatus:'',
      phoneNumberStatus:'', emailAddressStatus:'', emailAddressConfirmationStatus:'', passwordStatus:'', passwordConfirmationStatus:'', companyRoleStatus:''}
    }
 setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_SIGNUP_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
	    case 'salutation':
          this.setState({salutationStatus:this.checkEmpty(value)})
          break
        case 'firstName':
          this.setState({firstNameStatus:this.checkEmpty(value)})
          this.setState({firstNameStatus:this.checkString(value)})
          break
		case 'lastName':
          this.setState({lastNameStatus:this.checkEmpty(value)})
		  this.setState({lastNameStatus:this.checkString(value)})
          break
        case 'phoneNumber':
          this.setState({phoneNumberStatus:this.checkEmpty(value)})
          this.setState({phoneNumberStatus:this.checkPhonNumber(value)})
          break
		case 'emailAddress':
          this.setState({emailAddressStatus:this.checkEmpty(value)})
          this.setState({emailAddressStatus:this.checkEmail(value)})
          break
        case 'emailAddressConfirmation':
          this.setState({emailAddressConfirmationStatus:this.checkEmpty(value)})
          this.setState({emailAddressConfirmationStatus:this.checkEmailConfirmation(value)})
          break
        case 'password':
          this.setState({passwordStatus:this.checkEmpty(value)})
          this.setState({passwordStatus:this.checkPassword(value)})
          break
        case 'passwordConfirmation':
          this.setState({passwordConfirmationStatus:this.checkEmpty(value)})
          this.setState({passwordConfirmationStatus:this.checkConfirmPassword(value)})
          break
		case 'companyRole':
          this.setState({companyRoleStatus:this.checkEmpty(value)})
		  this.setState({companyRoleStatus:this.checkString(value)})
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
  
  checkPassword(value) {
    let status
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/
    if ((!value.match(password))) {
        status = 'error'
    } else { 
      status = 'correct'
      this.setState({passwordValue:value})
    }
    return status
  }
  checkConfirmPassword(value) {
    let status
    var confirmPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/
    if(!value.match(confirmPassword) || value != (this.state.passwordValue)) { 
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
	  this.setState({emailValue:value})
    }
    return status
  }
  
  checkEmailConfirmation(value) {
    let status
    var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!value.match(emailFormat) || value != (this.state.emailValue)) { 
      status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
  
	
    submit(e) {
        const { form, dispatch } = this.props
		dispatch({
		  type: 'SIGNUP_STARTED'
		})	
        e.preventDefault()
        if ((this.state.salutationStatus == 'error') || (this.state.firstNameStatus == 'error') || (this.state.lastNameStatus == 'error') || (this.state.phoneNumberStatus == 'error') 
		   || (this.state.emailAddressStatus == 'error') || (this.state.passwordStatus == 'error')|| (this.state.companyRoleStatus == 'error') || (this.state.salutationStatus == '') || 
		   (this.state.firstNameStatus == '') || (this.state.lastNameStatus == '') || (this.state.phoneNumberStatus == '') 
		   || (this.state.emailAddressStatus == '') || (this.state.passwordStatus == '')|| (this.state.companyRoleStatus == '')) {
            return false
        } else {
           dispatch({
                type: "CREATE_USER",
                payload: {
                    user: {
                        salutation: form.data.salutation,
                        firstName: form.data.firstName,
                        lastName: form.data.lastName,
                        phoneNumber: form.data.phoneNumber,
                        email: form.data.emailAddress,
                        password: form.data.password,
                        companyRole: form.data.companyRole
                    }
                }
            })
        }
    }
    render() {
    const { form } = this.props
		var messageStatus = form.messageStatus
		var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
		const salutation=[{text:'Salutation',value:''},{text:'Mr.',value:'Mr.'},{text:'Ms.',value:'Ms.'},{text:'Mrs.',value:'Mrs.'}]
		var salutationList = []
		if (salutation.length != 0) {
			for (var i = 0; i < salutation.length; i++) {
				salutationList.push(
					< option value = {salutation[i]['value']} > {salutation[i]['text']} < /option>
				)
			}
		}
        const submitButtonStyle = style.submitButton
        return (
		<aside>
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<form>
				{messageStyle != '' ? <ListGroup>
						<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
					</ListGroup> : ''}
				<FormLine customStyle={style.col50}>
					<FormBlock title='Salutation' validationStatus = {this.state.salutationStatus} validationIconStyle = {style.validationIcon} >
						<select style={style.dropDownList} value={form.data.salutation} onChange={(e) => { this.setFieldValue('salutation', e) }} >
							{salutationList}
						< /select>
					</FormBlock>
				</FormLine>
				<fields-container style={style.fieldsContainer}>
				<FormLine customStyle={style.col50}>
					<FormBlock title='First name' validationStatus = {this.state.firstNameStatus}  validationIconStyle = {style.validationIcon} >
						<FormInput type='text' value={form.data.firstName} onChange={(e) => { this.setFieldValue('firstName', e) }} />
					</FormBlock>
				</FormLine>
				<FormLine customStyle={style.col50}>
					<FormBlock title='Last name' validationStatus = {this.state.lastNameStatus}  validationIconStyle = {style.validationIcon} >
						<FormInput type='text' value={form.data.lastName} onChange={(e) => { this.setFieldValue('lastName', e) }} />
					</FormBlock>
				</FormLine>
				</fields-container>
				<FormLine>
					<FormBlock title='Please enter your phone number' validationStatus = {this.state.phoneNumberStatus}  validationIconStyle = {style.validationIcon}>
						<FormInput type='text' value={form.data.phoneNumber} onChange={(e) => { this.setFieldValue('phoneNumber', e) }} />
					</FormBlock>
				</FormLine>
				<FormLine>
					<FormBlock title='Please enter your email' validationStatus = {this.state.emailAddressStatus}  validationIconStyle = {style.validationIcon} >
						<FormInput type='text' value={form.data.emailAddress} onChange={(e) => { this.setFieldValue('emailAddress', e) }} />
					</FormBlock>
				</FormLine>
				<FormLine>
					<FormBlock title='Please re-enter your email' validationStatus = {this.state.emailAddressConfirmationStatus}  validationIconStyle = {style.validationIcon}>
						<FormInput type='text' value={form.data.emailAddressConfirmation} onChange={(e) => { this.setFieldValue('emailAddressConfirmation', e) }} />
					</FormBlock>
				</FormLine>
				<FormLine>
					<FormBlock title='Please choose a password (Must be at least 8 characters)' validationStatus = {this.state.passwordStatus}  validationIconStyle = {style.validationIcon}>
						<FormInput type={this.state.passwordType} value={form.data.password} onChange={(e) => { this.setFieldValue('password', e) }} doesMatch={form.data.password === form.data.passwordConfirmation}/>
					</FormBlock>
				</FormLine>
				<FormLine>
					<FormBlock title='Please re-enter your password' validationStatus = {this.state.passwordConfirmationStatus}  validationIconStyle = {style.validationIconPass}>
						<FormInput type={this.state.rePasswordType} value={form.data.passwordConfirmation} onChange={(e) => { this.setFieldValue('passwordConfirmation', e) }} doesMatch={form.data.password === form.data.passwordConfirmation}/>
						<FormInput type="checkbox" onChange={(e) => this.setState({passwordType:(this.state.passwordType=='password'?'text':'password')})} customStyle ={style.checkbox} />{this.state.passwordType=='password'?'Show password':'Hide password'}
					</FormBlock>
				</FormLine>
				<FormLine>
					<FormBlock title='Please enter your role' validationStatus = {this.state.companyRoleStatus}  validationIconStyle = {style.validationIcon}>
						<FormInput type='text' value={form.data.companyRole} onChange={(e) => { this.setFieldValue('companyRole', e) }} />
					</FormBlock>
				</FormLine>
				
				
                <FormLine customStyle={[style.formCol, style.displayBlock, style.center]}>
                     <Button type="submit" onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting==true ? 'Submitting' : 'Submit'} customStyle={submitButtonStyle}/>
                </FormLine>
            </form>
			</aside>
        )
    }
}

RegistrationForm.propTypes = {
}

function mapStateToProps(state) {
    return {
        session: state.session,
        form: state.registrationForm
    }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(RegistrationForm))
