// dependencies
var FontAwesome = require('react-fontawesome');
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
// components
import LyferxLogo from '../LyferxLogo'
import LoginForm from '../LoginForm'
import Footer from '../Footer'
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// exports
export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {token:'',email:'',verify:''}
  }
 
componentWillMount() {  
	var redirect = this.props.location
		if(!redirect == '' || !redirect == null) {
			var querystring = this.props.location.hash
			var qstring = querystring.slice(querystring.indexOf('?') + 1).split('&')
			for (var i = 0; i < qstring.length; i++) {
			  var urlparam = qstring[i].split('=')
			  if (urlparam[0] == 'email') {
				this.setState({email:urlparam[1]})
			  }
			  if (urlparam[0] == 'token') {
				this.setState({token:urlparam[1]})
			  }
			  if (urlparam[0] == 'verify') {
				this.setState({verify:urlparam[1]})
			  }
			}
		}
}
  
  render() {
	const { form, verifyEmail } = this.props
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
	var messageEmailStatus = verifyEmail.messageStatus
	var messageEmailStyle = messageEmailStatus.status === 1 ? 'success' : messageEmailStatus.status === 0 ? 'danger' : ''
    return (
      < wrapper >
        < aside style = {style.leftSection} >
          <enroll-panel style = {[style.enrollPanel, style.displayBlock]} >
            <enroll-col style = {[style.enrollCol, style.displayBlock]}>
              < icon-col style = {style.iconCol} >
                <img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/assets/loader.png' style = {style.icon2} />
              < /icon-col>
              <page-title style = {[style.h2, style.displayBlock]}>Welcome to LyfeRx</page-title>
              <paragraph style = {[style.p, style.displayBlock]}>
                Enrollment is quick and easy. Let&#8217;s get started.
                If you&#8217;re already a member, please login.
              </paragraph>
             <icon style={style.iconPos}><FontAwesome name='arrow-circle-o-right' /></icon>
              < entroll-ink >
                <Link to="/signup" style = {style.btnEnroll} activeClassName="active">Enroll</Link>
              < /entroll-ink>
            </enroll-col>
          </enroll-panel>
        < /aside>

        < aside style = {style.rightSection} >
            < logo-container style = {style.header.logo} >
              < LyferxLogo customStyle = {[style.header.imgRes, style.header.logoImg]}/ >
            < /logo-container>
			{messageStyle != '' ? <ListGroup style={style.alertBox}>
			<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
			</ListGroup> : ''}
			{messageEmailStyle != '' ? <ListGroup style={style.alertBox} >
			<ListGroupItem bsStyle={messageEmailStyle}>{messageEmailStatus.message}</ListGroupItem>
			</ListGroup> : ''}
            <login-panel style={[style.loginPanel, style.displayBlock]}>
              <paragraph style = {[style.p2, style.displayBlock]}> 
              Login to your account
              </paragraph>
              <login-column style={[style.loginCol, style.displayBlock]}>
               <LoginForm email={this.state.email} token={this.state.token} verify={this.state.verify} />
              </login-column>
            </login-panel>
            <Footer / >
        < /aside>
        <clear style={style.clr}></clear>
      < /wrapper>
    )
  }
}

LoginPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.loginForm,
	verifyEmail: state.signUpEmailVerification
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(LoginPage))
