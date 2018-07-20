// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'
var FontAwesome = require('react-fontawesome')

// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import DropDownList from '../DropDownList'
import FormLine from '../FormLine'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
// style
import style from './style'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
// exports
var selectedSecurityQuesitons = []
export class OnboardingSecurityQuestionsForm extends Form {
  constructor(props) {
    super(props)
    this.state = {securityQuestionFirstStatus:'', securityQuestionSecondStatus:'',
      securityQuestionThirdStatus:'', securityAnswerFirstStatus:'', securityAnswerSecondStatus:'',
      securityAnswerThirdStatus:'', userId:3
    }
  }
  componentWillMount() {
    const { dispatch, session } = this.props
	if(session.loginTokenDetails != null) {
		dispatch({
		  type: 'GET_ONBOARDING_SECURITY_QUESTIONS',
		   payload: {
			  accessToken: {
				loginToken: session.loginTokenDetails.token
			  }
			} 
		})
	}
  }
  
  setFieldValue(field, e) {
    const { dispatch} = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_ONBOARDING_QUESTIONS_FIELD_VALUE',
      params: {
        field: field,
        value: e.target.value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'securityQuestionFirst':
        this.setState({securityQuestionFirstStatus:this.checkEmpty(value)})
        selectedSecurityQuesitons.push(value)
        break
      case 'securityQuestionSecond':
        this.setState({securityQuestionSecondStatus:this.checkEmpty(value)})
        selectedSecurityQuesitons.push(value)
        break
      case 'securityQuestionThird':
        this.setState({securityQuestionThirdStatus:this.checkEmpty(value)})
        selectedSecurityQuesitons.push(value)
        break
      case 'securityAnswerFirst':
        this.setState({securityAnswerFirstStatus:this.checkEmpty(value)})
        break
      case 'securityAnswerSecond':
        this.setState({securityAnswerSecondStatus:this.checkEmpty(value)})
        break
      case 'securityAnswerThird':
        this.setState({securityAnswerThirdStatus:this.checkEmpty(value)})
        break
      default:
        break
    }
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
  submit(e) {
    const { form, dispatch, session } = this.props
    e.preventDefault()
    if (this.state.securityQuestionFirstStatus == 'error' || this.state.securityQuestionSecondStatus == 'error' || this.state.securityQuestionThirdStatus == 'error' ||
      this.state.securityAnswerFirstStatus == 'error' || this.state.securityAnswerSecondStatus == 'error' || this.state.securityAnswerThirdStatus == 'error' ||
      (form.data.securityQuestionFirst == null) || (form.data.securityQuestionFirst == '')
      || (form.data.securityQuestionSecond == null) || (form.data.securityQuestionSecond == '')
      || (form.data.securityQuestionThird == null) || (form.data.securityQuestionThird == '')
      || (form.data.securityAnswerFirst == null) || (form.data.securityAnswerFirst == '')
      || (form.data.securityAnswerSecond == null) || (form.data.securityAnswerSecond == '')
      || (form.data.securityAnswerThird == null) || (form.data.securityAnswerThird == '')) {
      return false
    } else {
      dispatch({
        type: 'SAVE_ONBOARDING_QUESTIONS',
        payload: {
          securityData: {
            userId: this.state.userId,
			loginToken: session.loginTokenDetails.token,
            securityQuestionFirst: form.data.securityQuestionFirst,
            securityAnswerFirst: form.data.securityAnswerFirst,
            securityQuestionSecond: form.data.securityQuestionSecond,
            securityAnswerSecond: form.data.securityAnswerSecond,
            securityQuestionThird: form.data.securityQuestionThird,
            securityAnswerThird: form.data.securityAnswerThird
          }
        } 
      })
    }
  }
  render() {
    const { form } = this.props
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
    const questionArray = form.questions
    var securityQuestions = []
    securityQuestions.push(
      < option value = '' > Select Questions < /option>
    )
    if (questionArray.length != 0) {
      var questionsDetailsArray = questionArray.data
      for (var i = 0; i < questionsDetailsArray.length; i++) {
        if (selectedSecurityQuesitons.length != 0) {
          selectedSecurityQuesitons.map(function (quesitonsId) {
          })
          //continue
        }
        securityQuestions.push(
          < option value = {questionsDetailsArray[i]['id']} id={'quesiton-' + questionsDetailsArray[i]['id']}> {questionsDetailsArray[i]['question']} < /option>
        )
        //securityQuestions.push({text:questionsDetailsArray[i]['question'], value:questionsDetailsArray[i]['id']})
      }
    }
    return (
      <wrapper>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <heading style={[style.thanks, style.displayBlock]} >
          <thanksHeading style={[style.heading, style.displayBlock]}>Thanks for signing up! First, let&#8217;s add an extra level of security to your account.</thanksHeading>
        </heading>
        <qus-form style = {[style.qusCol, style.displayBlock]}>
          <content style = {[style.content, style.displayBlock]}>
            <form>
			{messageStyle != '' ? 
			<ListGroup style={style.alertMessage}>
			<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
			</ListGroup> : ''}
              <left-qus style = {[style.left, style.displayBlock]}>
                <FormLine>
                  <FormBlock title='Security question 1' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityQuestionFirstStatus} >
                    < select style={style.dropDownList} value={form.data.securityQuestionFirst} onChange={(e) => { this.setFieldValue('securityQuestionFirst', e) }} id='quesiton1'>
                      {securityQuestions}
                    < /select>
                  </FormBlock>
                </FormLine>
                <FormLine>
                  <FormBlock title='Security question 2' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityQuestionSecondStatus} >
                    < select style={style.dropDownList} value={form.data.securityQuestionSecond} onChange={(e) => { this.setFieldValue('securityQuestionSecond', e) }} id='quesiton2'>
                      {securityQuestions}
                    < /select>
                  </FormBlock>
                </FormLine>
                <FormLine>
                  <FormBlock title='Security question 3' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityQuestionThirdStatus} >
                    < select style={style.dropDownList} value={form.data.securityQuestionThird} onChange={(e) => { this.setFieldValue('securityQuestionThird', e) }} id='quesiton3'>
                      {securityQuestions}
                    < /select>
                  </FormBlock>
                </FormLine>
              </left-qus>

              <right-qus style = {[style.right, style.displayBlock]}>
                <FormLine>
                  <FormBlock title='Answer' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityAnswerFirstStatus}>
                    <FormInput type='text' value={form.data.securityAnswerFirst} onChange={(e) => { this.setFieldValue('securityAnswerFirst', e) }}/>
                  </FormBlock>
                </FormLine>
                <FormLine>
                  <FormBlock title='Answer' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityAnswerSecondStatus}>
                    <FormInput type='text' value={form.data.securityAnswerSecond} onChange={(e) => { this.setFieldValue('securityAnswerSecond', e) }}/>
                  </FormBlock>
                </FormLine>
                <FormLine>
                  <FormBlock title='Answer' validationIconStyle={style.validationIcon} validationStatus = {this.state.securityAnswerThirdStatus}>
                    <FormInput type='text' value={form.data.securityAnswerThird} onChange={(e) => { this.setFieldValue('securityAnswerThird', e) }} />
                  </FormBlock>
                </FormLine>
              </right-qus>
              <clr style={style.clr}></clr>
              <btn-next style = {[style.next, style.displayBlock]}>
                <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Next' : 'Next'} customStyle={style.btnLogin}/>
              </btn-next>
            </form>
            < Footer footerType = 'onBoarding' />
          </content>
        </qus-form>
      </wrapper>
    )
    

  }
}

OnboardingSecurityQuestionsForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.onboardingSecurityQuestionsForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OnboardingSecurityQuestionsForm))
