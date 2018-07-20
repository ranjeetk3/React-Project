// dependencies
var FontAwesome = require('react-fontawesome')
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'

// exports
export class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { footerType } = this.props
    let footer
    let wrapper
    switch (footerType) {
      case 'onBoarding':
        wrapper = [style.onBoardingFooter.footer, style.displayBlock]
        footer = <copyright style = {[style.copyRight, style.displayBlock]}>&copy; 2016 LyfeRx LLC.</copyright>
        break
      case 'forgotPassword':
          wrapper = [style.forgotPassword.wrapper, style.displayBlock]
          footer = <footer-section>
              <left-section style={[style.forgotPassword.contentCol, style.displayBlock]}>
            <ul-section style = {[style.forgotPassword.alignCenter, style.displayBlock]}>
              <li-sction style={style.forgotPassword.liContent}><a href='#' style={style.forgotPassword.linkContent}>About</a></li-sction>
              <li-sction style={style.forgotPassword.liContent}>|</li-sction>
              <li-sction style={style.forgotPassword.liContent}><a href='#' style={style.forgotPassword.linkContent}>FAQ</a></li-sction>
              <li-sction style={style.forgotPassword.liContent}>|</li-sction>
              <li-sction style={style.forgotPassword.liContent}><a href='#' style={style.forgotPassword.linkContent}>Demo</a></li-sction>
              <li-sction style={style.forgotPassword.liContent}>|</li-sction>
              <li-sction style={style.forgotPassword.liContent}><a href='#' style={style.forgotPassword.linkContent}>Contact Support</a></li-sction>
              </ul-section>
            </left-section>
            
            <right-sction style={[style.forgotPassword.contentCol, style.displayBlock]}>
            <copy-right style={[style.copyRight, style.displayBlock, style.forgotPassword.alignCenter]}>&copy; 2016 LyfeRx LLC.</copy-right>
            </right-sction>  
            <clear style={style.clr}></clear>
        </footer-section>
        break
      default:
        wrapper = [style.defaultFooter.wrapper, style.displayBlock]
        footer = <footer-section style={[style.defaultFooter.wrapper, style.displayBlock]}>
          <left-section style={style.defaultFooter.leftContent}>
              <li-sction style={style.defaultFooter.liContent}><a href='#' style={style.defaultFooter.linkContent}>About</a></li-sction>
              <li-sction style={style.defaultFooter.liContent}>|</li-sction>
              <li-sction style={style.defaultFooter.liContent}><a href='#' style={style.defaultFooter.linkContent}>FAQ</a></li-sction>
              <li-sction style={style.defaultFooter.liContent}>|</li-sction>
              <li-sction style={style.defaultFooter.liContent}><a href='#' style={style.defaultFooter.linkContent}>Demo</a></li-sction>
              <li-sction style={style.defaultFooter.liContent}>|</li-sction>
              <li-sction style={style.defaultFooter.liContent}><a href='#' style={style.defaultFooter.linkContent}>Contact Support</a></li-sction>
          </left-section>
          <right-sction style={style.defaultFooter.rightContent}>
              <copy-right style={style.copyRight}>&copy; 2016 LyfeRx LLC.</copy-right>
          </right-sction>  
          <clear style={style.clr}></clear>
      </footer-section>
        break
    }
    return (
      <footer style = { wrapper }>
        { footer }
      </footer>
    )
  }
}

Footer.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Footer))
