// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'

// style
import style from './style.js'
import './style.css'
// components
import Form from '../Form'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import { Nav,Navbar,Button,Image,Col,NavbarCollapse,NavDropdown,MenuItem,Collapse,Well} from 'react-bootstrap'

// exports
export class DashboardHeaderTitle extends Form {
  constructor(props) {
    super(props)
		this.state = {}
  }
  render() {
    return (
			<Col sm = {12} style = {style.headerTopWhite}> 
			<col01 className = 'col-xs-12 col-sm-4  col-md-4' style = {style.headText} >Administration Dashboard </col01>
			<Col sm = {4} md = {5} className = 'hidden-xs' >&nbsp; </Col>
			<col02 style = {style.headerTopWhiteTextLink}  className='pull-right col-xs-12 col-sm-3  col-md-2'>
				<automaticSaved>  
					<span  style = {style.greenCircle} > &nbsp; </span>  
					<a href='#' style = {style.automaticSaved}>Automatically Saved </a>
					</automaticSaved> 
				</col02>
			</Col>
    )
  }
}

DashboardHeaderTitle.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(DashboardHeaderTitle))
