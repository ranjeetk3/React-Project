// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import FormLine from '../FormLine'
import ReloadingGraphic from '../ReloadingGraphic'

// exports
export class AchForm extends Form {
  constructor(props) {
    super(props)
    this.state = {bankNameStatus:'', accountNumberStatus:'',confirmAccountNumberStatus:'',
      routingNumberStatus:'', confirmRoutingNumberStatus:'', promoCodeStatus:'', accountHolderName:'Ranjeet', bankAddress:'New Delhi' , bankCity:'Delhi' ,bankPhone:'9999999999' ,accountHolderType:'individual' ,bankZip:'841416' ,amount:'300'
    }
  }
  
  setFieldValue(field, e) {
		const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_ACH_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
		e.preventDefault()
		
    switch (field) {
      case 'bankName':
          this.setState({bankNameStatus:this.checkEmpty(value)})
          //this.setState({bankNameStatus:this.checkbankName(value)})
          break
      case 'accountNumber':
        this.setState({accountNumberStatus:this.checkEmpty(value)})
        this.setState({accountNumberStatus:this.checkAccountNumber(value)})
        break
      case 'confirmAccountNumber':
        this.setState({confirmAccountNumberStatus:this.checkEmpty(value)})
        this.setState({confirmAccountNumberStatus:this.checkConfirmAccountNumber(value)})
        break
      case 'routingNumber':
				this.setState({routingNumberStatus:this.checkEmpty(value)})
        this.setState({routingNumberStatus:this.checkRoutingNumber(value)})
        break
      case 'confirmRoutingNumber':
        this.setState({confirmRoutingNumberStatus:this.checkEmpty(value)})
        this.setState({confirmRoutingNumberStatus:this.checkConfirmRoutingNumber(value)})
        break
      case 'promoCode':
        this.setState({promoCodeStatus:this.checkEmpty(value)})
        //this.setState({promoCodeStatus:this.checkPromoCode(value)})
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
	
	 checkAccountNumber(value) {
    let status
    var accountNum = /^[0-9]{8,17}$/
    if((!value.match(accountNum)) || (value.match('00000000000000000')) ) { 
        status = 'error'
    } else {
      status = 'correct'
			 this.setState({accountValue:value})
    }
    return status
  }
	
	checkConfirmAccountNumber(value) {
    let status
    var confirmAccountNum = /^[0-9]{8,17}$/
    if(!value.match(confirmAccountNum) || value != (this.state.accountValue)) { 
        status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
	
	 checkRoutingNumber(value) {
    let status
    var routingNum = /^[0-9]{9,9}$/
    if((!value.match(routingNum)) || (value.match('000000000')) ) { 
        status = 'error'
    } else {
      status = 'correct'
			this.setState({routingValue:value})
    }
    return status
  }
	
	checkConfirmRoutingNumber(value) {
    let status
    var confirmRoutingNum = /^[0-9]{9,9}$/
    if(!value.match(confirmRoutingNum) || value != (this.state.routingValue)) { 
        status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
	
  submit(e) {
    const { form, dispatch, session} = this.props
		e.preventDefault()
    if (this.state.bankNameStatus == 'error' || this.state.accountNumberStatus == 'error' || this.state.confirmAccountNumberStatus == 'error' || this.state.routingNumberStatus == 'error' || this.state.confirmRoutingNumberStatus == 'error' || 
		this.state.bankNameStatus == '' || this.state.accountNumberStatus == '' || this.state.confirmAccountNumberStatus == '' || this.state.routingNumberStatus == '' || this.state.confirmRoutingNumberStatus == '' ||
		this.state.bankNameStatus == null || this.state.accountNumberStatus == null || this.state.confirmAccountNumberStatus == null || this.state.routingNumberStatus == null || this.state.confirmRoutingNumberStatus == null ) {
      return false
    } else {
      dispatch({
        type: 'POST_ACH_DETAILS',
        payload: {
          achDetails: {
			loginToken: session.loginTokenDetails.token,
			accountHolderName: this.state.accountHolderName,
            bankName: form.data.bankName,
            accountNumber: form.data.accountNumber,
            routingNumber: form.data.routingNumber,
			bankAddress: this.state.bankAddress,
			bankCity: this.state.bankCity,
			bankZip: this.state.bankZip,
			bankPhone: this.state.bankPhone,
			accountHolderType: this.state.accountHolderType,
			amount: this.state.amount
          }
        }
    })
		 dispatch({
        type: 'ACH_FORM_STARTED'
				})
    }
  }

  render() {
	const { form } = this.props
	var message = []
		if(form.achData !=null) {
		  var msg = form.achData.code
			if(msg =='200') {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardSuccess} >Payment success.< /message></msgBg>)
			}
			else if(msg =='226') {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardError} >{form.achData.message}< /message></msgBg>)
			} else {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardError} >Internal Server error ! 500< /message></msgBg>)
				}
		}
    return (
            <form-heading style={[style.formHeading.wrapper, style.displayBlock]}>
						{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
								{message}
              <heading style={[style.formHeading.h2, style.displayBlock]}>ACH Bank Account Details</heading>
			   <form>
                <FormLine>
                <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.bankNameStatus} customStyle={style.inputBig}>
                  <FormInput type='text' value={form.data.bankName} placeholder='Bank Name'  onChange={(e) => { this.setFieldValue('bankName', e) }} />
                </FormBlock>
              </FormLine>
              <FormLine>
                <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.accountNumberStatus} customStyle={style.inputBig}>
                  <FormInput type='text' value={form.data.accountNumber} placeholder='Account Number'  onChange={(e) => { this.setFieldValue('accountNumber', e) }}  />
                </FormBlock>
              </FormLine>
              <FormLine>
                <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.confirmAccountNumberStatus} customStyle={style.inputBig}>
                  <FormInput type='text' value={form.data.confirmAccountNumber} placeholder='Confirm Account Number'  onChange={(e) => { this.setFieldValue('confirmAccountNumber', e) }}  />
                </FormBlock>
              </FormLine>
              <FormLine>
                <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.routingNumberStatus} customStyle={style.inputBig}>
                  <FormInput type='text' value={form.data.routingNumber} placeholder='Routing Number'  onChange={(e) => { this.setFieldValue('routingNumber', e) }}  />
                </FormBlock>
              </FormLine>
              <FormLine>
                <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.confirmRoutingNumberStatus} customStyle={style.inputBig}>
                  <FormInput type='text' value={form.data.confirmRoutingNumber} placeholder='Confirm Routing Number'  onChange={(e) => { this.setFieldValue('confirmRoutingNumber', e) }}  />
                </FormBlock>
              </FormLine>
              <line style = {[style.line, style.displayBlock]}> </line>
              <fields-container style={style.fieldsContainer}>
                  <promo style={[style.col50, style.promoText]}>
                    Have a promo code?
                  </promo>
                  <FormLine customStyle={style.col50}>
                    <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.promoCodeStatus} customStyle={style.promo}>
                      <FormInput type='text' value={form.data.promoCode} placeholder='LYFE7'  onChange={(e) => { this.setFieldValue('promoCode', e) }}  />
                    </FormBlock>
                  </FormLine>
                </fields-container>
                <FormLine>
                  <btn-next style = {style.displayBlock}>
                    <Button type='submit' onClick={(e) => { this.submit(e) }} isWorking={false} text='Pay $1188.00' customStyle={[style.btnLogin, style.displayBlock, style.bold]}/>
                  </btn-next>
                </FormLine>
				</form>
                <tearm style={[style.promoText, style.displayBlock]}>
                    Upon clicking the pay button, you are agreeing to the Terms and Conditions
								</tearm>
            </form-heading>
    )
  }
}

AchForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.achForm
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(AchForm))
