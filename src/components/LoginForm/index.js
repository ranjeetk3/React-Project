// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
import color from 'color'
import { Link } from 'react-router'

// components
import Button from '../Button'
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import FormInput from '../FormInput'
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// style
import style from './style'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/fonts.css'
// exports
export class LoginForm extends Form {
  constructor(props) {
    super(props)
    this.setFieldValue = this.setFieldValue.bind(this)
    this.state = {emailStatus:'', passwordStatus:''}
  }
  setFieldValue(field, e) {
    const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_LOGIN_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: e.target.value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'email':
        this.setState({emailStatus:this.checkEmpty(value)})
        this.setState({emailStatus:this.checkEmail(value)})
        break
      case 'password':
        this.setState({passwordStatus:this.checkEmpty(value)})
        //this.setState({passwordStatus:this.checkPassword(value)})
        break
      default:
        break
    }
  }
  
  componentDidMount() {  	
		const { email, token, verify, dispatch } = this.props
		if(verify == 'signup') {
			if(!email=='' || !token=='') {
				dispatch({
				  type: "SIGNUP_EMAIL_VERIFICATION",
				  payload: {
					signUpEmailVerify: {
					  email: email,
					  token: token
					}
				  } 
				})
			}
		}
		if(verify == 'forget') {
			if(!email=='' || !token=='') {
				dispatch({
				  type: "POST_PASSWORD_EMAIL_VERIFICATION",
				  payload: {
					passwordEmailVerification: {
					  email: email,
					  token: token
					}
				  } 
				})
			}
		}
		/*if(!email=='' || !token=='') {
			dispatch({
			  type: "POST_PASSWORD_EMAIL_VERIFICATION",
			  payload: {
				passwordEmailVerification: {
				  email: email,
				  token: token
				}
			  } 
			})
		} */
	} 
  
  submit(e) {
    const { form, dispatch } = this.props
    e.preventDefault()
        if (this.state.emailStatus == 'error' || this.state.passwordStatus == 'error'
        || (form.data.email == null) || (form.data.email == '')
        || (form.data.password == null) || (form.data.password == '')
        ) {
      return false
    } else {
      dispatch({
        type: 'LOG_IN_USER',
        payload: {
          user: {
            email: form.data.email,
            password: form.data.password
          }
        }
      })
    }
	dispatch({
        type: 'LOGIN_RESET'
    })
	this.setState({emailStatus:'',passwordStatus:''})
  }
  checkEmpty(value) {
    let status
    if ((value == null) || (value == '')) {
      status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
  checkEmail(value) {
    let status
    var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!value.match(emailFormat)) { 
      status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
  checkPassword(value) {
    let status
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/
    if ((!value.match(password))) {
        status = 'error'
    } else { 
      status = 'correct'
    }
    return status
  }
  render() {
    const { form } = this.props
    return (
      <form>
	  {form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <FormLine>
          <FormBlock title='User Name' validationIconStyle={style.validationIcon} customStyle={style.inputBig} validationStatus = {this.state.emailStatus}>
            <FormInput type="text" placeholder="Email" value={form.data.email} onChange={(e) => { this.setFieldValue('email', e) }} customStyle={style.inputField}/>
          </FormBlock>
        </FormLine>
        <FormLine>
          <FormBlock title='Password' validationIconStyle={style.validationIcon} customStyle={style.inputBig} validationStatus = {this.state.passwordStatus}>
            <FormInput type="password" placeholder="Password" value={form.data.password} onChange={(e) => { this.setFieldValue('password', e) }} customStyle={style.inputField}/>
          </FormBlock>
        </FormLine>
        <left-column style={style.leftCol}>
          <Link to='/password_reset_request_page' style={style.forget} > Forgot Password?</Link>
        </left-column>
        <right-column style= { style.rightCol }>
          <Button type="submit" onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Logging In' : 'Log In'} customStyle= {style.btnLogin}/>
        </right-column>
        <clear style={style.clr}></clear>
      </form>
    )
  }
}

LoginForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.loginForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(LoginForm))
