// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'

// components
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import Button from '../Button'
import FormInput from '../FormInput'
import DropDownList from '../DropDownList'
import Footer from '../Footer'
import LyferxLogo from '../LyferxLogo'
import ReloadingGraphic from '../ReloadingGraphic'
// style
import style from './style'
import '../../css/fonts.css'
// exports
export class ForgotResetPassword extends Form {
  constructor(props) {
      super(props)
     this.state = { passwordStatus:'', confirmPasswordStatus:''}
  }
  
 setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_FORGET_RESET_PASSWORD_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'password':
          this.setState({passwordStatus:this.checkEmpty(value)})
          this.setState({passwordStatus:this.checkPassword(value)})
          break
        case 'confirmPassword':
          this.setState({confirmPasswordStatus:this.checkEmpty(value)})
          this.setState({confirmPasswordStatus:this.checkConfirmPassword(value)})
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
  
  submit(e) {
    const { form, session, dispatch } = this.props
		if ((this.state.passwordStatus == 'error') || (this.state.confirmPasswordStatus == 'error')) {
            return false
        } else {
      dispatch({
        type: 'POST_PASSWORD_RESET',
        payload: {
          passwordReset: {
			id:session.userId.data.id,
            password: form.data.password
          }
        } 
      })
	}
  }
  render() {
    const { form } = this.props
    return (
          <form-section style={[style.form, style.displayBlock]}>
		  {form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
            <heading-section style={[style.headingSection, style.displayBlock]}>
            <heading style={[style.heading, style.displayBlock]}>Password Reset</heading>
            </heading-section>
            <content-section style={style.passwordReset}>
              <FormLine>
              <FormBlock title='Please choose a password (Must be at least 8 characters)' validationStatus = {this.state.passwordStatus}>
                <FormInput type='password' value={form.data.password} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} />
              </FormBlock>
              </FormLine>
              <FormLine>
              <FormBlock title='Please re-enter your password' validationStatus = {this.state.confirmPasswordStatus}>
                <FormInput type='password' value={form.data.confirmPassword} onChange={(e) => { this.setFieldValue('confirmPassword', e) }} isDisabled={form.isSubmitting} />
              </FormBlock>
              </FormLine>
                <clr style={style.clr}></clr>
                <btn-confirm style = {[style.confirm, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Confirm' : 'Confirm'} customStyle= {style.btnConfirm} />
                </btn-confirm>
              <clr style={style.clr}></clr>
            </content-section>
          </form-section>
    )
  }
}

ForgotResetPassword.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.forgetResetPassword
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ForgotResetPassword))
