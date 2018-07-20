// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import LyferxLogo from '../LyferxLogo'
import RegistrationForm from '../RegistrationForm'

// exports
export class SignupSuccessPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const pageStyles = [ style.page ]
    return (
      <signup-success-page style={pageStyles} >
        <content style={style.content}>
          <page-header style={style.header}>
            <logo-container style={style.logo}>
              <LyferxLogo/>
            </logo-container>
            <page-title style={style.title}>Check your email</page-title>
          </page-header>
          <page-body>
            <signup-message style={style.message}>We have sent an email to verify your email address.  Please click on the link in the email to complete signup.</signup-message>
          </page-body>
        </content>
      </signup-success-page>
    )
  }
}

SignupSuccessPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(SignupSuccessPage))




