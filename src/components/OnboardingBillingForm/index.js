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
import CreditCardForm from '../CreditCardForm'
import AchForm from '../AchForm'

// exports
export class OnboardingBillingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_ONBOARDING_BILLING_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })

  }
  
  
	onSwap(field,e) {
	if (field == 'ACH') {
			this.setState({formSection:field})
			this.setState({color:'gray'})
		} else {
			this.setState({formSection:field})
			this.setState({color:'blue'})
			}
	}
	
	
  render() {
    return (
      <wrapper>
        <heading style={[style.thanks, style.displayBlock]} >
          <thanksHeading style={[style.heading, style.displayBlock]}>We&#8217;ve made pricing simple. No hidden fees.</thanksHeading>
        </heading>
        <form>
          <qus-form style = {[style.qusCol, style.displayBlock]}>
            <content style = {[style.content, style.displayBlock]}>
              <left-section style = {[style.left, style.displayBlock]}>
							{this.state.color=='gray'?<Button type='button' value ='CreditCard' onClick={(e) => { this.onSwap('CreditCard',e) }} isWorking={false} text='Credit Card' customStyle={[style.btnLogin, style.buttonBlue]} />:<Button type='button' value ='CreditCard' onClick={(e) => { this.onSwap('CreditCard',e) }} isWorking={false} text='Credit Card' customStyle={[style.btnLogin, style.buttonGray]} />}
                
              </left-section>
              <right-section style = {[style.right, style.displayBlock]}>
							{this.state.color=='gray'?  <Button type='button' value ='ACH' onClick={(e) => { this.onSwap('ACH',e) }} isWorking={false} text='ACH' customStyle={[style.btnLogin, style.buttonGray]}/>:  <Button type='button' value ='ACH' onClick={(e) => { this.onSwap('ACH',e) }} isWorking={false} text='ACH' customStyle={[style.btnLogin, style.buttonBlue]}/>}
               
              </right-section>
              <clr style={style.clr}></clr>
            <summary style={[style.summary.wrapper, style.displayBlock]}>
                <total-user style={[style.summary.p, style.displayBlock]}>Total users: 12</total-user>
                <price-per-user style={[style.summary.p, style.displayBlock]}>Price per user: $99/month</price-per-user>
                <total-cost style={[style.summary.h3, style.displayBlock]}>Total monthly cost: $1188.00</total-cost>
            </summary>
						{this.state.formSection=='ACH'? <AchForm />:<CreditCardForm />}
						
              < Footer footerType = 'onBoarding' />
            </content>
          </qus-form>
        </form>
      </wrapper>
    )
  }
}

OnboardingBillingForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
		
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OnboardingBillingForm))
