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
import DropDownList from '../DropDownList'
import Footer from '../Footer'
import FormLine from '../FormLine'
import AchForm from '../AchForm'
import ReloadingGraphic from '../ReloadingGraphic'

// exports
export class CreditCardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {cardNameStatus:'', cardNumberStatus:'', cvcStatus:'', promoCodeStatus:'', cardNumberType:'https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/free.png', expiryMonthStatus:'', expiryYearStatus:'',cardHolderName:'Ranjeet', billingStreetAddress:'New Delhi' , routingNumber:'Delhi' ,billingCity:'Noida' ,billingState:'New Delhi' ,billingZipCode:'841416' ,amount:'159'
    }
  }

 setFieldValue(field, e) {
		const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_CREDITCARD_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
		e.preventDefault()
		
    switch (field) {
      case 'cardName':
          this.setState({cardNameStatus:this.checkEmpty(value)})
          break
      case 'cardNumber':
        this.setState({cardNumberStatus:this.checkEmpty(value)})
				this.setState({cardNumberStatus:this.checkCardNumber(value)})
				this.setState({cardNumberType:this.checkCardNumberType(value)})
        break
      case 'expiryMonth':
        this.setState({expiryMonthStatus:this.checkEmpty(value)})
        break
			case 'expiryYear':
        this.setState({expiryYearStatus:this.checkEmpty(value)})
        break
      case 'cvc':
				this.setState({cvcStatus:this.checkEmpty(value)})
				this.setState({cvcStatus:this.checkCvc(value)})
        break
      case 'promoCode':
        this.setState({promoCodeStatus:this.checkEmpty(value)})
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
	
	checkCardNumber(value) {
    let status
    var cardNum = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    if((!value.match(cardNum))) { 
        status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
	
	checkCvc(value) {
    let status
    var cvc = 	/^[0-9]{1,4}$/
    if((!value.match(cvc))) { 
        status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }

	checkCardNumberType(value) {
    // visa
    var re = /^4/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/visa.png";

    // Mastercard
    re = /^5[1-5]/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/mastercard.png";

    // AMEX
    re = /^3[47]/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/amex.png";

    // Discover
    re = /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/discover.png";

    // Diners
    re = /^36/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/diners.png";

    // Diners - Carte Blanche
    re = /^30[0-5]/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/diners.png";

    // JCB
    re = /^35(2[89]|[3-8][0-9])/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/jcb.png";

    // Visa Electron
    re = /^(4026|417500|4508|4844|491(3|7))/
    if (value.match(re) != null)
        return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/visa.png";

    return "https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/creditCards/free.png"
  }
	
	onSwap(field,e)
	{
    if (field == 'CreditCard') {
			return(<AchForm/>)
    } else {
    
    }
	}
		
	
  submit(e) {
    const { form, dispatch, session } = this.props
		e.preventDefault()
    if (this.state.cardNameStatus == 'error' || this.state.cardNumberStatus == 'error' || this.state.expiryMonthStatus == 'error' || this.state.expiryYearStatus == 'error' || this.state.cvcStatus == 'error' || 
	this.state.cardNameStatus == '' || this.state.cardNumberStatus == '' || this.state.expiryMonthStatus == '' || this.state.expiryYearStatus == '' || this.state.cvcStatus == ''||
	this.state.cardNameStatus == null || this.state.cardNumberStatus == null || this.state.expiryMonthStatus == null || this.state.expiryYearStatus == null || this.state.cvcStatus == null) {
      return false
    } else {
      dispatch({
        type: 'POST_CREDITCARD_DETAILS',
        payload: {
          creditDetails: {
			loginToken: session.loginTokenDetails.token,
            cardNumber: form.data.cardNumber,
            cardExpMonth: form.data.expiryMonth,
			cardExpYear: form.data.expiryYear,
			cardCvvCode: form.data.cvc,
			cardHolderName:this.state.cardHolderName,
			billingStreetAddress:this.state.billingStreetAddress,
			routingNumber:this.state.routingNumber,
			billingCity:this.state.billingCity,
			billingState:this.state.billingState,
			billingZipCode:this.state.billingZipCode,
			amount:this.state.amount
          }
        }
    })
		 dispatch({
        type: 'CREDITCARD_FORM_STARTED'
				})
    }
  }


  render() {
		const { form } = this.props
		var submitting = form.isSubmitting
		var message = []
		if(form.cardData !=null) {
		  var msg = form.cardData.code
			if(msg =='200') {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardSuccess} >Payment success.< /message> </msgBg>)
			}
			else if(msg =='226') {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardError} >{form.cardData.message}< /message></msgBg>)
			} else {
				message.push(<msgBg style = {style.messageBg} ><message style = {style.cardError}>Internal Server error ! 500< /message> </msgBg>)
				}
		}
	  var monthList = [{text:'Exp. Month',value:''},{text:'Jan',value:'01'},{text:'Feb',value:'02'},{text:'Mar',value:'03'},{text:'Apr',value:'04'},{text:'May',value:'05'},{text:'Jun',value:'06'},{text:'Jul',value:'07'},{text:'Aug',value:'08'},{text:'Sep',value:'09'},{text:'Oct',value:'10'},{text:'Nov',value:'11'},{text:'Dec',value:'12'}]
	  var months = []
		 if (monthList.length != 0) {
      for (var i = 0; i < monthList.length; i++) {
			months.push(
			  < option value = {monthList[i]['value']} > {monthList[i]['text']} < /option>
			)
		  }
		}
	  
	  var d = new Date()
	  var startYear = d.getFullYear()
	  var years = []
				years.push(< option value = '' > Exp. Year < /option>)
				for(var i=0; i<10; i++)
				{		
					var allYear = startYear + i
					 years.push(< option key = {i} value = {allYear} > {allYear} < /option>)
				}
			
    return (
              <form-heading style={[style.formHeading.wrapper, style.displayBlock]}>
							{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
									{message}
                <heading style={[style.formHeading.h2, style.displayBlock]}>Credit Card Details</heading>
					<form>
                <FormLine>
                  <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.cardNameStatus} customStyle={style.inputBig}>
                    <FormInput type='text' value={form.data.cardName} placeholder='Name on Card'  onChange={(e) => { this.setFieldValue('cardName', e) }}/>
                  </FormBlock>
                </FormLine>
                <FormLine customStyle={ style.posRel }>
                  <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.cardNumberStatus} customStyle={style.inputBig}>
                    <FormInput type='text' value={form.data.cardNumber} placeholder='Card Number' onChange={(e) => { this.setFieldValue('cardNumber', e) }}  customStyle={[style.icon.common, style.icon.card]}/>
                  </FormBlock>
									<img src={this.state.cardNumberType} style={ style.cards } />
                </FormLine>
                <fields-container style={[style.fieldsContainer, style.inputBig]}>
                  <FormLine customStyle={style.col55}>
                    <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.expiryMonthStatus}>
					 < select  value = {form.data.expiryMonth} onChange={(e) => { this.setFieldValue('expiryMonth', e) }} style={style.dropDownList} >
						{months}
					< /select>
                    </FormBlock>
                  </FormLine>
									<FormLine customStyle={style.col50}>
                    <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.expiryYearStatus}>
											< select  value = {form.data.expiryYear} onChange={(e) => { this.setFieldValue('expiryYear', e) }} style={style.dropDownList} >
												{years}
											< /select>
                    </FormBlock>
                  </FormLine>                  
                </fields-container>
								<fields-container style={[style.fieldsContainer, style.inputBig]}>
								<FormLine customStyle={style.col50}>
                    <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.cvcStatus}>
                      <FormInput type='password' value={form.data.cvc} placeholder='CVC' onChange={(e) => { this.setFieldValue('cvc', e) }}  customStyle={[style.icon.common, style.icon.cvc]}/>
                    </FormBlock>
                 </FormLine>
								  </fields-container>
                <line style = {[style.line, style.displayBlock]}> </line>
                <fields-container style={style.fieldsContainer}>
                  <promo style={[style.col50, style.promoText]}>
                    Have a promo code?
                  </promo>

                  <FormLine customStyle={style.col50}>
                    <FormBlock validationIconStyle={style.validationIcon} validationStatus = {this.state.promoCodeStatus} customStyle={style.promo}>
                      <FormInput type='text' value={form.data.promoCode} placeholder='LYFE7' onChange={(e) => { this.setFieldValue('promoCode', e) }}  />
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

CreditCardForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
	form: state.creditCardForm
		
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(CreditCardForm))
