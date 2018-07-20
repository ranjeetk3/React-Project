// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import { Link } from 'react-router'

// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import DropDownList from '../DropDownList'
import Footer from '../Footer'
import LyferxLogo from '../LyferxLogo'
import ForgotResetPassword from '../ForgotResetPassword'

// style
import style from './style'
import '../../css/fonts.css'
// exports
export class ForgetResetPasswordPage extends Form {
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
    
  render() {
    const { form } = this.props
    return (
        <wrapper style={style.wrapper}>
          <logo-container style={[style.logo, style.displayBlock]} >
            <LyferxLogo customStyle = {[style.header.imgRes]} / >
          </logo-container>
          <ForgotResetPassword/>
         <Footer footerType = 'forgotPassword' />
        </wrapper>
    )
  }
}

ForgetResetPasswordPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.ForgetResetPasswordPage
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ForgetResetPasswordPage))
