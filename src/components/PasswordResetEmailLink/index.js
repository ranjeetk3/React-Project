// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'

// components
import Button from '../Button'
import Footer from '../Footer'
import ReloadingGraphic from '../ReloadingGraphic'
// style
import style from './style'
import '../../css/fonts.css'
// exports
export class PasswordResetEmailLink extends Component {
  constructor(props) {
    super(props)
	
  }
  submit(e) {
    const { session, dispatch } = this.props
    e.preventDefault()
    dispatch({
      type: 'PASSWORD_RESET_VERIFY_EMAIL',
      payload: {
        user: {
          email: session.passwordResetUser.data.email
        }
      } 
    })
	
  }
  render() {
    const { session, form } = this.props
    const type = form.type
    const message = form.message
    if (type == 'error') {
       return (
        <wrapper style={style.wrapper}>
          <form-section style={[style.form, style.displayBlock]}>
            <content-section style={style.passwordReset}>
            <content-paragraph style={[style.paragraph, style.displayBlock]}>
            {message}
            </content-paragraph>
              <clr style={style.clr}></clr>
            </content-section>
          </form-section>
         < Footer footerType = 'forgotPassword' />
        </wrapper>
    )
    } else {
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
}

PasswordResetEmailLink.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.passwordResetRequestForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PasswordResetEmailLink))
