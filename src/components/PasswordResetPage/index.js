// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import LyferxLogo from '../LyferxLogo'
import PasswordResetForm from '../PasswordResetForm'
import PasswordResetRequestVerificationForm from '../PasswordResetRequestVerificationForm'

// exports
export class PasswordResetPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { query } = this.props
    const pageStyles = [ style.page ]
    let form, message, helpLinks
    switch (this.state.isTokenValid) {
      case null: 
        form = <PasswordResetRequestVerificationForm email={query.email} token={query.token}/>
        message = 'Verifying token...'
        helpLinks = null
        break
      case true: 
        form = <PasswordResetForm />
        message = 'Please enter a new password.'
        helpLinks = null
        break
    }

    return (
      <password-reset-page style={pageStyles} >
        <content style={style.content}>
          <page-header style={style.header.core}>
            <logo-container style={style.header.logo}>
              <LyferxLogo/>
            </logo-container>
            <page-title style={style.header.title}>Reset Password</page-title>
            <form-instructions style={style.header.instructions}>{message}</form-instructions>
          </page-header>
          <page-body style={style.body.core}>
            {form}
            {helpLinks}
          </page-body>
        </content>
      </password-reset-page>
    )
  }
}

PasswordResetPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PasswordResetPage))




