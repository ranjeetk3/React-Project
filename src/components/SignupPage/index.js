// dependencies
var FontAwesome = require('react-fontawesome')

import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import LyferxLogo from '../LyferxLogo'
import RegistrationForm from '../RegistrationForm'
import ReloadingGraphic from '../ReloadingGraphic'
import Footer from '../Footer'

// exports
export class AuthPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { router, dispatch } = this.props
    // update Intercom.io
    window.Intercom('update')
  }
  render() {
	const { form } = this.props
    return (
        <wrapper>
          <aside style = {style.leftSection} >
            < registration-form-container style = {[style.mainContainer, style.displayBlock]} >
              < ragister-col-form style = {[style.ragisterColForm, style.displayBlock]} >
                < form-title style = {[style.formTitle, style.displayBlock]} > Let&#8217;s get started! < /form-title>
                < RegistrationForm / >
              < /ragister-col-form>
            < /registration-form-container>
          < /aside>

          < aside style = {style.rightSection} >
            < logo-container style = {style.header.logo} >
              < LyferxLogo customStyle = {[style.header.imgRes, style.header.logoImg]}/ >
            < /logo-container>
            < enroll-panel style = {[style.enrollPanel, style.displayBlock]} >
              < enroll-col style = {[style.enrollCol, style.displayBlock]} >
                < icon-col style = {style.iconCol} >
                  <img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/assets/loader.png' style = {style.icon2} />
                < /icon-col>
                < page-title style = {[style.h2, style.displayBlock]} > Welcome to LyfeRx < /page-title>
                < paragraph style = {[style.p, style.displayBlock]} >
                  Registration is quick and easy. Let&#8217;s get started.
                  If you&#8217;re already a member, please login.
                < /paragraph>
                <icon style={style.iconPos}><FontAwesome name='arrow-circle-o-right' /></icon>
                < entroll-ink >
                  <Link to='/login' style = {style.btnEnroll} activeClassName='active'>Login</Link>
                < /entroll-ink>
              < /enroll-col>
            < /enroll-panel>
            <Footer / >
          < /aside>
        <clear style={style.clr}></clear>
      < /wrapper>
    )
  }
}

AuthPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.routing,
	form: state.registrationForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(AuthPage))
