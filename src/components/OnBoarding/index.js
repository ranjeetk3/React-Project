// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import OnboardingSecurityQuestionsForm from '../OnboardingSecurityQuestionsForm'
import CompanyDetailsForm from '../CompanyDetailsForm'
import OnBoardingUsersForm from '../OnBoardingUsersForm'
import OnboardingBranchLocationForm from '../OnboardingBranchLocationForm'
import OnboardingBillingForm from '../OnboardingBillingForm'
// exports
const onBoardingSteps = [
  'Start',
  'Company Details',
  'Branch Location',
  'Users',
  'Billing'
]

var components = {
 0: OnboardingSecurityQuestionsForm,
 1: CompanyDetailsForm,
 2: OnboardingBranchLocationForm,
 3: OnBoardingUsersForm,
 4: OnboardingBillingForm
}

export class OnBoarding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onBoardingSteps: onBoardingSteps,
    }
  }
  render() {
    const { lastOnboardingSteps } = this.props
    var lastOnboardingStep = lastOnboardingSteps.lastOnboardingStep
	//var lastOnboardingStep = 3
    var CurrentPage = components[lastOnboardingStep]
    return (
      <wrapper style = {style.displayBlock}>
      <bg-col style = {[style.wrapper, style.displayBlock]}>
        <logo-col style = {[style.logoCol, style.center, style.displayBlock]}>
          <icon-col style = {[style.iconCol, style.displayBlock]} >
            <img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/logos/lyferx/logo-white%403x.png' width='280' />
          </icon-col>
        </logo-col>
        <tab-col style = {[style.tabCol, style.displayBlock]}>
          <content style = {[style.iconCol, style.displayBlock]}>
            <center style = {[style.center, style.displayBlock]}>
              <top-section>
              {onBoardingSteps.length > 0 ?
                onBoardingSteps.map(function (steps,index) {
                  return index != 0 ? 
                  (
                    <tab> 
                      <tab-line style={[style.tabLine]}>
                        <shadow style={[index <= lastOnboardingStep ? style.activated : style.shadow, style.displayBlock]}>
                        </shadow>
                      </tab-line>
                      <tab-content style={[style.tabContent]}>
                        <active style={[index <= lastOnboardingStep ? style.active : '', style.radius, style.displayBlock]}>
                          <tab-inner style={[style.tabInner]}>{steps}</tab-inner>
                        </active>
                      </tab-content>
                    </tab>
                ) : ( <tab-content style={[style.tabContent]}>
                  <active style={[ index <= lastOnboardingStep ? style.active : '', style.radius, style.displayBlock]}>
                    <tab-inner style={[style.tabInner]}>{steps}</tab-inner>
                  </active>
                  </tab-content>
                )
              }) : ''
            } 
            </top-section>
            </center>
          </content>
        </tab-col>
      </bg-col>
      <page>
      < CurrentPage />
      </page>
      < /wrapper>
    )
  }
}

OnBoarding.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    lastOnboardingSteps: state.onBoarding
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OnBoarding))
