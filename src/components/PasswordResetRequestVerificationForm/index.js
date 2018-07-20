// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'

// components
import LoadingGraphic from '../LoadingGraphic'
import Form from '../Form'

// style
import style from './style'
import '../../css/fonts.css'
// exports
export class PasswordResetRequestVerificationForm extends Form {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.submit()
  }
  submit() {
    const { email, token, dispatch } = this.props
    dispatch({
      type: "VERIFY_PASSWORD_RESET_REQUEST",
      payload: {
        verificationData: {
          email: email,
          token: token
        }
      } 
    })
  }
  render() {
    const { form } = this.props
    if (form.isSubmitting) {
      return <LoadingGraphic type="logo"/>
    } else if (form.error) {
      return <error-message style={style.error}>{form.error}</error-message>
    } else {
      return <div></div>
    }
  }
}

PasswordResetRequestVerificationForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.passwordResetRequestVerificationForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PasswordResetRequestVerificationForm))




