// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium, { Style } from 'radium'
import color from 'color'
// components
import Form from '../Form'
import ReloadingGraphic from '../ReloadingGraphic'
// style
import style from './style'
var FontAwesome = require('react-fontawesome')
import '../../css/fonts.css'
// exports
export class EmailVerificationForm extends Form {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.submit()  
  }
  
 submit() {
    const { email, token, dispatch } = this.props
    dispatch({
      type: "VERIFY_EMAIL_ADDRESS",
      payload: {
        verificationData: {
          email: email,
          token: token
        }
      } 
    })
  }
  render() {
    const { form} = this.props
    if (form.isSubmitting) {
      return  <msg>
                <page-header style={style.displayInline}><ReloadingGraphic / ></page-header>
                <heading style={style.heading2}> Working...</heading>
                <loading-msg style={style.displayBlock}>Please wait while we verify your email address.</loading-msg>
              </msg>
    } else if (form.error == 'This email address has already been verified.') {
      return  <msg><error style={style.displayBlock}>{form.error}</error>
                <Link to='/login'  style = {style.btnEnroll} >Login Now</Link>
              </msg>
    } else if (form.error == 'Thank you. Your email is now verified.') {
      return  <msg><error style={style.displayBlock}>{form.error}</error>
                <Link to='/login' style = {style.btnEnroll} >Continue</Link>
              </msg>
    }
    else {
      return <error><img src ='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/notification.png' style = {style.notify} />{form.error}</error>
    }
  }
}

EmailVerificationForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.emailVerificationForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(EmailVerificationForm))




