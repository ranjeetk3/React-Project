// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'

// components
import Form from '../Form'
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
      this.setFieldValue = this.setFieldValue.bind(this)
  }
  setFieldValue(field, e) {
    const { dispatch } = this.props
    dispatch({
      type: 'SET_SECURITY_FORM_FIELD_VALUE',
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
    if ((form.data.securityQuestionFirst == null) || (form.data.securityQuestionFirst == '')
      || (form.data.securityAnswerFirst == null) || (form.data.securityAnswerFirst == '')
      || (form.data.securityQuestionSecond == null) || (form.data.securityQuestionSecond == '')
      || (form.data.securityAnswerSecond == null) || (form.data.securityAnswerSecond == '')
      || (form.data.securityQuestionThird == null) || (form.data.securityQuestionThird == '')
      || (form.data.securityAnswerThird == null) || (form.data.securityAnswerThird == '')) {
      return false
    } else {
      dispatch({
        type: 'SECURITY_IN_USER',
        payload: {
          user: {
            securityQuestionFirst: form.data.securityQuestionFirst,
            securityAnswerFirst: form.data.securityAnswerFirst,
            securityQuestionSecond: form.data.securityQuestionSecond,
            securityAnswerSecond: form.data.securityAnswerSecond,
            securityQuestionThird: form.data.securityQuestionThird,
            securityAnswerThird: form.data.securityAnswerThird
          }
        } 
      })
    }
  }
  render() {
    const { form } = this.props
    const securityQuestion=[{text:'Select your Security Question',value:''},{text:'What is your childhood nickname ?',value:'What is your childhood nickname ?'},{text:'What is the name of your first girlfriend/boyfriend ?',value:'What is the name of your first girlfriend/boyfriend ?'},{text:'What is the make and model of your first car ?',value:'What is the make and model of your first car ?'}]
    return (
        <wrapper style={style.wrapper}>
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
          <form-section style={[style.form, style.displayBlock]}>
            <heading style={[style.heading, style.displayBlock]}>We sent you an email.</heading>
            <content-section style={style.passwordReset}>
            <content-paragraph style={[style.paragraph, style.displayBlock]}>
            For security purposes, we&#8217;ve sent you an email. In the email you&#8217;ll find a link for resetting your password.
            </content-paragraph>
                <clr style={style.clr}></clr>
                <btn-confirm style = {[style.confirm, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? "I didn't get it. Please resend the link." : "I didn't get it. Please resend the link."} customStyle= {style.btnConfirm} />
                </btn-confirm>
              <clr style={style.clr}></clr>
            </content-section>
          </form-section>
         < Footer footerType = 'forgotPassword' />
        </wrapper>
    )
  }
}

ForgotResetPassword.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.securityQuestionForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ForgotResetPassword))
