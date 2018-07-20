// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'


// style
import style from './style.js'
import '../../css/fonts.css'
// components
//import SecurityQuestionForm from '../SecurityQuestionForm'

// exports
export class SecurityQuestionPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { session } = this.props
    return (
      <wrapper>
        <heading style={[style.thanks, style.displayBlock]} >
            <thanksHeading style={[style.heading, style.displayBlock]}>Thanks for signing up! First, let&#8217;s add an extra level of security to your account.</thanksHeading>
        </heading>
      //  <SecurityQuestionForm />
      </wrapper>
    )
  }
}

SecurityQuestionPage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(SecurityQuestionPage))
