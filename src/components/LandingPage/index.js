import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
// components
import ReloadingGraphic from '../ReloadingGraphic'
import Footer from '../Footer'
import LyferxLogo from '../LyferxLogo'

// exports
export class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      sessionTokenValue:'xygshgfds5tgwegdr4t34644634', // dummy token value for testing purposes
      userId:2 // dummy user id for testing purposes
    }
  }
  componentDidMount() {
    localStorage.setItem('SESSION_TOKEN', this.state.sessionTokenValue)
    localStorage.setItem('USER_ID', this.state.userId)
    const userId = localStorage.getItem('USER_ID')
    const sessionToken = localStorage.getItem('SESSION_TOKEN')
    const { dispatch } = this.props
    dispatch({
      type: 'CHECK_LOCAL_STORAGE',
      payload: {
        userToken: {
          userId: userId,
          sessionToken: sessionToken
        }
      }
    })
  }
  render() {
    return (
      < wrapper >
        < aside style = {style.leftSection} >
        < /aside>

        < aside style = {style.rightSection} >
          < logo-container style = {style.header.logo} >
            < LyferxLogo customStyle = {[style.header.imgRes, style.header.logoImg]}/ >
          < /logo-container>
          < enroll-panel style = {[style.enrollPanel, style.displayBlock]} >
            < enroll-col style = {[style.enrollCol, style.displayBlock]} >
              < icon-col style = {style.iconCol} >
                <ReloadingGraphic / >
              < /icon-col>
              < page-title style = {[style.h2, style.displayBlock]} > Loading... < /page-title>
              < paragraph style = {[style.p, style.displayBlock]} >
                Please be patient as we check for an active sesstion.
              < /paragraph>
            < /enroll-col>
          < /enroll-panel>
          <Footer/ >
        < /aside>
        <clear style={style.clr}></clear>
      < /wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(LandingPage))
