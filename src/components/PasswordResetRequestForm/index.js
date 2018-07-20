// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'

// components
import Button from '../Button'
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import FormInput from '../FormInput'
import ReloadingGraphic from '../ReloadingGraphic'
// style
import style from './style'
import '../../css/fonts.css'
// exports
export class PasswordResetRequestForm extends Form {
  constructor(props) {
    super(props)
     this.state = {emailAddressStatus:''}
  }
  setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'PASSWORD_RESET_REQUEST_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
        case 'emailAddress':
          this.setState({emailAddressStatus:this.checkEmpty(value)})
          this.setState({emailAddressStatus:this.checkEmail(value)})
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
  submit(e) {
    const { form, dispatch } = this.props
    e.preventDefault()
    if (this.state.emailAddressStatus == 'error' || form.data.emailAddress == null || form.data.emailAddress == '') {
      return false
    } else {
		dispatch({
		type: 'PASSWORD_RESET_VERIFY_EMAIL',
		payload: {
		  user: {
			email: form.data.emailAddress
		  }
		} 
		})
		dispatch({
			type: 'PASSWORD_RESET_REQUEST_STARTED'
		})
    }
  }
  render() {
    const { form } = this.props
    return (
      <form style={style.formContainer}>
	  {form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <FormLine>
          <FormBlock title='Please enter your email' customStyle={style.inputBig} titleCustomStyle={style.title} validationStatus={this.state.emailAddressStatus}>
            <FormInput type='text' value={form.data.emailAddress}  onChange={(e) => { this.setFieldValue('emailAddress', e) }}  style={this.state.emailAddressStatus == 'error' ? style.errorBorder : ''}/>
          </FormBlock>
        </FormLine>
        <FormLine customStyle={[style.displayBlock, style.btnContainer]}>    
            <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting == true ? 'Submitting' : 'Submit'} customStyle= {style.btnLogin}/>
        </FormLine>
      </form>
    )
  }
}

PasswordResetRequestForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.passwordResetRequestForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PasswordResetRequestForm))
