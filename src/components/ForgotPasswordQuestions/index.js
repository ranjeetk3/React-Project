// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium, { Style } from 'radium'

// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import Footer from '../Footer'
import LyferxLogo from '../LyferxLogo'
import ReloadingGraphic from '../ReloadingGraphic'
// style
import style from './style'
import '../../css/fonts.css'
// exports
export class ForgotPasswordQuestions extends Form {
  constructor(props) {
      super(props)
     this.state = {securityQuestionFirstStatus:'', securityQuestionSecondStatus:'',securityQuestionThirdStatus:'',
      securityAnswerFirstStatus:'', securityAnswerSecondStatus:'', securityAnswerThirdStatus:'', answerFirst:'',
	  answerSecond:'', answerThird:'', firstValue:'', secondValue:'', answerThird:'',userId:''
    }
  }
  componentWillMount() {
    const { user, form, dispatch } = this.props
	if(!user.userData =='') {
	var userId = user.userData.id
     dispatch({
        type: 'GET_QUESTION_BY_USERID',
        payload: {
          userDetails: {
            id:userId
          }
        } 
    })}
  }  

 setFieldValue(field, e) {
    const { form, dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_FORGET_PASSWORD_QUESTIONS_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })

	window.lc =form.questionData
	var answerFirst = form.questionData[0].answer
	var answerSecond = form.questionData[1].answer
	var answerThird = form.questionData[2].answer
	switch (value) {
		case answerFirst:
          this.setState({firstValue:value})
          break
        case answerSecond:
          this.setState({secondValue:value})
          break
        case answerThird:
          this.setState({thirdValue:value})
          break
      default:
        break
    }
    switch (field) {
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
    const { user, form, dispatch } = this.props
    var userId = user.userData.id
	if ((this.state.firstValue == '') || (this.state.firstValue == '') || (this.state.firstValue == '')) {
        return false
        } else {
      dispatch({
        type: 'POST_SECURITY_ANSWER',
        payload: {
          securityAnswer: {
			id:userId,
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
    const {user, form } = this.props
    var securityQuestions = []
    securityQuestions.push(
      < option value = '' > Select your Security Question < /option> 
    )
    if (form.questionData != null) {
      var questionResponse = form.questionData
      for (var i = 0; i < (questionResponse).length; i++) {
      securityQuestions.push(< option value = {questionResponse[i]['question_id']} > {questionResponse[i]['question']} < /option>)
      }
    }  
	window.lc = form.questionData
    
    return (
        <wrapper style={style.wrapper}>
          < logo-container style={[style.logo, style.displayBlock]} >
          < LyferxLogo/ >
          < /logo-container>
		  {form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
          <form-section style={[style.form, style.displayBlock]}>
            <heading-section style={[style.headingSection, style.displayBlock]}>
            <heading style={[style.heading, style.displayBlock]}>Security Verification</heading>
            <paragraph style={[style.paragraph, style.displayBlock]}>Please answer your security questions.</paragraph>
            </heading-section>
            <content-section style = {[style.content, style.displayBlock]}>
              <left-section style={style.leftSection}>
                <FormLine>
                   <FormBlock title='Security question 1' validationStatus = {this.state.securityQuestionFirstStatus} >
                     < select style={style.dropDownList} value={form.data.securityQuestionFirst} onChange={(e) => { this.setFieldValue('securityQuestionFirst', e) }} id='quesiton1'>
                      {securityQuestions}
                    < /select>
                   </FormBlock>
                 </FormLine>
         
                <FormLine>
                   <FormBlock title='Security question 2' validationStatus = {this.state.securityQuestionSecondStatus} >
                      < select style={style.dropDownList} value={form.data.securityQuestionSecond} onChange={(e) => { this.setFieldValue('securityQuestionSecond', e) }} id='quesiton2'>
                      {securityQuestions}
                    < /select>
                   </FormBlock>
                 </FormLine>
         
                 <FormLine>
                   <FormBlock title='Security question 3' validationStatus = {this.state.securityQuestionThirdStatus} >
                      < select style={style.dropDownList} value={form.data.securityQuestionThird} onChange={(e) => { this.setFieldValue('securityQuestionThird', e) }} id='quesiton3'>
                      {securityQuestions}
											< /select>
                   </FormBlock>
                 </FormLine>
              </left-section>
      
              <right-section style={style.rightSection}>
              
                <FormLine>
                   <FormBlock title='Answer' validationStatus = {this.state.securityAnswerFirstStatus} >
                     <FormInput type='text' name='securityAnswerFirst' value={form.data.securityAnswerFirst} onChange={(e) => { this.setFieldValue('securityAnswerFirst', e) }} isDisabled={form.isSubmitting} />
                   </FormBlock>
                </FormLine>
                
               <FormLine>
                   <FormBlock title='Answer' validationStatus = {this.state.securityAnswerSecondStatus} >
                     <FormInput type='text' name='securityAnswerSecond' value={form.data.securityAnswerSecond} onChange={(e) => { this.setFieldValue('securityAnswerSecond', e) }} isDisabled={form.isSubmitting} />
                   </FormBlock>
                </FormLine>
             
               <FormLine>
                   <FormBlock title='Answer' validationStatus = {this.state.securityAnswerThirdStatus} >
                     <FormInput type='text' name='securityAnswerThird' value={form.data.securityAnswerThird} onChange={(e) => { this.setFieldValue('securityAnswerThird', e) }} isDisabled={form.isSubmitting} />
                   </FormBlock>
                </FormLine>
             
              </right-section>
                <clr style={style.clr}></clr>
             <FormLine>
                <btn-next style = {[style.next, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text={form.isSubmitting ? 'Submitting' : 'Next'} customStyle={style.btnNext}/>
                </btn-next>
              </FormLine>
              <clr style={style.clr}></clr>
            </content-section>
          </form-section>
         < Footer footerType = 'forgotPassword' />
        </wrapper>
    )
  }
}

ForgotPasswordQuestions.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.forgotPasswordQuestions,
	user:state.forgotPasswordEmailVerify
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ForgotPasswordQuestions))
