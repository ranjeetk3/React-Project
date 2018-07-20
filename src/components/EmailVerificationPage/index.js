// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import EmailVerfificationForm from '../EmailVerificationForm'

// exports
export class EmailVerificationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {token:'',email:''}
    }
  componentWillMount() {  
    var querystring = this.props.location.hash
    var qstring = querystring.slice(querystring.indexOf('?') + 1).split('&')
    for (var i = 0; i < qstring.length; i++) {
      var urlparam = qstring[i].split('=')
      if (urlparam[0] == 'email') {
        this.setState({email:urlparam[1]})
      }
      if (urlparam[0] == 'token') {
        this.setState({token:urlparam[1]})
      }
    }
  }  
  render() {
    const pageStyles = [ style.page ]
    return (
      <email-verification-page style={pageStyles} >
        <content style={style.content}>
          <EmailVerfificationForm email={this.state.email} token={this.state.token}  />
        </content>
          <footer style = {[style.footer, style.displayBlock]}>
            <copyright style = {[style.copyRight, style.displayBlock]}>&copy; 2016 LyfeRx LLC.</copyright>
          </footer>
      </email-verification-page>
    )
  }
}

EmailVerificationPage.propTypes = {
}
function mapStateToProps(state) {
  return {
    session: state.session,
    query: state.routing.locationBeforeTransitions.query
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(EmailVerificationPage))




