// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import { Link } from 'react-router'

// components
import Form from '../Form'
import Footer from '../Footer'
import LyferxLogo from '../LyferxLogo'
import LoginPage from '../LoginPage'
import SignupPage from '../SignupPage'
// style
import style from './style.js'
import '../../css/fonts.css'
// exports
export class ResetPasswordSuccess extends Form {
  constructor(props) {
      super(props)
  }

  render() {
	const { form } = this.props
		setTimeout(() => {
            if(!this.state.loginPage) 
        {
          this.setState({loginPage:'LoginPage'})
        }
        }, 5000)
        
       if (this.state.loginPage == 'LoginPage') {
            return (<LoginPage />)
        } else {
			return (
				<wrapper style={style.wrapper}>
				  < logo-container style={[style.logo, style.displayBlock]} >
				  < LyferxLogo customStyle = {style.header.imgRes} / >
				  < /logo-container>
				  <form-section style={[style.form, style.displayBlock]}>
					<heading style={[style.heading, style.displayBlock]}>Thank you. Your password has been successfully reset.</heading>
					<sub-heading style={[style.heading, style.displayBlock]}>You’re being redirected to your dashboard in 5 seconds. If you’re not automatically redireted, please 
					<Link to='/login' style={style.link} > click here.</Link>
					</sub-heading>
				  </form-section>
				 < Footer footerType = 'forgotPassword' />
				</wrapper>
			) 
		}	
  }		
}

ResetPasswordSuccess.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.securityQuestionForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ResetPasswordSuccess))
