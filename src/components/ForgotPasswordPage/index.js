// dependencies
var FontAwesome = require('react-fontawesome')
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import LyferxLogo from '../LyferxLogo'
import ForgotPasswordForm from '../ForgotPasswordForm'
import ReloadingGraphic from '../ReloadingGraphic'
import Footer from '../Footer'

// exports
export class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const pageStyles = [ style.page ]
    return (
        < wrapper >
                < aside style = {style.leftSection} >
                    <enroll-panel style = {[style.enrollPanel, style.displayBlock]} >
                        <enroll-col style = {[style.enrollCol, style.displayBlock]}>
                            < icon-col style = {style.iconCol} >
                                <ReloadingGraphic / >
                            < /icon-col>
                            <page-title style = {[style.h2, style.displayBlock]}>Welcome to LyfeRx</page-title>
                            <paragraph style = {[style.p, style.displayBlock]}>
                                Registration is quick and easy. Let&#8217;s get started.
                                If you&#8217;re already a member, please login.
                            </paragraph>
                           <icon style={style.iconPos}><FontAwesome name='arrow-circle-o-right' /></icon>
                            < entroll-ink >
                                <Link to='/signup' style = {style.btnEnroll} activeClassName='active'>Register</Link>
                            < /entroll-ink>
                        </enroll-col>
                    </enroll-panel>
                < /aside>
            
                < aside style = {style.rightSection} >
                    < logo-container style = {style.header.logo} >
                        < LyferxLogo customStyle = {[style.header.imgRes, style.header.logoImg]}/ >
                    < /logo-container>
                    <login-panel style={[style.loginPanel, style.displayBlock]}>
                       <paragraph style = {[style.p2, style.displayBlock]}> 
                       Forgot password
                       </paragraph>
                       <login-column style={[style.loginCol, style.displayBlock]}>
                            <ForgotPasswordForm/>
                       </login-column>
                    </login-panel>
                    <Footer / >
                < /aside>
            <clear style={style.clr}></clear>
        < /wrapper>
    )
  }
}

ForgotPasswordPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ForgotPasswordPage))
