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
import { Nav,Navbar,Button,Image,Col,NavbarCollapse,NavDropdown,MenuItem,Collapse,Well} from 'react-bootstrap'

// exports
export class DashboardHeader extends Form {
  constructor(props) {
    super(props)
		this.state = {}
  }
  render() {
	const { session } = this.props
	console.log(session.loginTokenDetails)
	var name = session.loginTokenDetails.first_name +' '+ session.loginTokenDetails.last_name
    return (
		<main>
			<navbar  className = 'navbar' style = {style.navbarInverse}>
				<containerFluid className='container-fluid'>
					<navbarHeader className = 'navbar-header'>
						<Button  className='navbar-toggle'  onClick={ ()=> this.setState({ open: !this.state.open })} >
							<span className='icon-bar' style = {style.iconBar}></span>
							<span1 className='icon-bar' style = {style.iconBar}></span1>
							<span2 className='icon-bar' style = {style.iconBar}></span2>                        
						</Button>
						
					<a href = '#' style = {style.navBrand}><Image   src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/logos/lyferx/logo.png' responsive /></a>
					</navbarHeader>
				<Collapse className='collapse navbar-collapse' in={this.state.open} >
				<Well style = {style.well}>
				<ul className='nav navbar-nav' >
					<li>					
						<Link to="/profile_dashboard" style = {style.whiteLink} className='nav-color'>Dashboard</Link>
					</li>
					<li>
						<Link to='#' style = {style.whiteLink} className='nav-color'>Task</Link> <span style ={style.redCircle}> 2</span>
					</li>
					<li>
						<Link to='#' style = {style.whiteLink} className='nav-color'>Patient members</Link>
					</li>
				</ul>
				
				<ul className='nav navbar-nav navbar-right' style={style.navM}>
                <li><Link to = '/main_chat'> <Image src='http://localhost:8080/img/chatIcon.png' alt='user' responsive /></Link><span style ={style.greenMessageCircle}> 21</span></li>
                
                <li><Image src='http://localhost:8080/img/drop-icon.png' alt='user' responsive style ={style.imgPadding} /></li>
				<NavDropdown eventKey='4' style = {[style.headerLink, style.noneBackground, style.headerMobileLink]} title={name} id='nav-dropdown'>
          <MenuItem eventKey='4.1'>Logout</MenuItem>
        </NavDropdown>
				<li><Image src='http://localhost:8080/img/cery.png' alt='user' responsive /></li>
				</ul>
				</Well>
				</Collapse>
			</containerFluid>
			</navbar>
		</main>
    )
  }
}

DashboardHeader.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(DashboardHeader))
