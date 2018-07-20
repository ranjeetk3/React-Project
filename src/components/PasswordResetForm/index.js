// THIS FORM WAS DUPLICATED FROM THE SIGNUP FORM AND NEEDS TO BE CUSTOMIZED.

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
export class PasswordResetForm extends Form {
  constructor(props) {
    super(props)
    this.setFieldValue = this.setFieldValue.bind(this)
    this.state = {
      error: null
    }
    const self = this
    setTimeout(() => {
      self.setState({
        error: 'You must provide your first name.'
      })
    }, 1000)
  }
  setFieldValue(field, e) {
    const { dispatch } = this.props
    dispatch({
      type: "SET_SIGNUP_FORM_FIELD_VALUE",
      params: {
        field: field,
        value: e.target.value
      }
    })
    e.preventDefault()
  }  
  submit(e) {
    const { form, dispatch } = this.props
    e.preventDefault()
    if (!form.data.firstName) {
      return false
    }
    dispatch({
      type: "CREATE_USER",
      payload: {
        user: {
          firstName: form.data.firstName,
          lastName: form.data.lastName,
          email: form.data.emailAddress
        }
      } 
    })
  }
  render() {
    const { form } = this.props
    const styles = [ style.base ]
    const inputStyle = [ style.input ]
    const lineStyle = [ style.line ]
    const submitButtonStyle = style.submitButton
    const placeholderStyles = style.placeholder
    return (
      <form style={styles}>
	  {form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <Style rules={placeholderStyles}/>
        <FormLine customStyle={lineStyle}>
          <FormBlock>
            <FormInput type="password" placeholder="Password" value={form.data.password} onChange={(e) => { this.setFieldValue('password', e) }} doesMatch={form.data.password === form.data.passwordConfirmation} isDisabled={form.isSubmitting} customStyle={inputStyle}/>
          </FormBlock>
        </FormLine>
        <FormLine customStyle={lineStyle}>
          <FormBlock>
            <FormInput type="password" placeholder="Re-type Password" value={form.data.passwordConfirmation} onChange={(e) => { this.setFieldValue('passwordConfirmation', e) }} doesMatch={form.data.password === form.data.passwordConfirmation} isDisabled={form.isSubmitting} customStyle={inputStyle}/>
          </FormBlock>
        </FormLine>
        <FormLine ordinal="last" align="right">
          <Button type="submit" onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Saving' : 'Save'} customStyle={submitButtonStyle}/>
        </FormLine>
      </form>
    )
  }
}

PasswordResetForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.passwordResetForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PasswordResetForm))




