// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link} from 'react-router'
import { Label,Table, Col} from 'react-bootstrap'
// style
import style from './style.js'
import '../../css/fonts.css'
// components
import Form from '../Form'

// exports
export class DashboardLeftSidebar extends Form {
  constructor(props) {
    super(props)
		 this.state = {toggle:true, sidebar:false}
  }
	toggle(field,e) {
		if (field == 'true') {
				this.setState({toggle:true})
			} else {
				this.setState({toggle:false})
			}
	}
	active(e) {
		this.setState({sidebar:true})
	}
			
  render() {
    return (
				<main style = {style.maxHeight}>
				{this.state.toggle == true ? 
				<Col xs={12} sm={4} md={2} style = {style.paddingLeft}>
				<aside style = {[style.contentSectionLeft, style.paddingLeft]} className = 'col-sm-12'> 
				<content-section-left-toppart style = {style.contentSectionLeftToppart} >
				<a href = 'javascript:void(0)' onClick={(e) => { this.toggle('false',e) }} >
				<close-txt style = {style.closeTxt} > CLOSE </close-txt> 
				<pic style = {style.img} >  </pic>
				</a>
				</content-section-left-toppart>
				
				<content-section-left-innerpart style = {style.contentSectionLeftInnerpart} > 
				<content-section-left-links > 
				<content-section-left-links-heading style = {style.contentSectionLeftLinksHeading} > MAIN MENU</content-section-left-links-heading>
				<ul style = {style.contentSectionLeftLinksUl} > 
				<li style = {style.contentSectionLeftLinksUlLi} ><a href="#" style = {style.link} >Overview </a> </li>
				<li style = {[style.contentSectionLeftLinksUlLi, style.tasks ]} ><a href="#" style = {style.link} >Tasks </a> </li>
				<li style = {style.contentSectionLeftLinksUlLi}  ><a href="#" style = {style.link} >Respritory Technicians </a> </li>
				<li style = {style.contentSectionLeftLinksUlLi}  > <a href="#" style = {style.link} >My Members </a></li>
				<li style = {style.contentSectionLeftLinksUlLi} > <a href="#" style = {style.link} >What's New </a></li>
				</ul> 
				<divider style = {[style.divider, style.displayBlock]} > </divider>
				</content-section-left-links>
				
				<content-section-left-product> 
				<content-section-left-product-heading style = {[style.productHeading, style.displayBlock]} > YOUR PRODUCTS</content-section-left-product-heading> 
				<ul style = {style.productUl} > 
				{this.state.sidebar==false ? <member-data style = {[style.productUlLi, style.memberData, style.displayBlock]} onClick={(e) => { this.active(e) }}  ><Link to="/subMenu" style = {style.productUlLiA} >Member Data</Link></member-data>  : <member-data style = {[style.productUlLi, style.memberData, style.displayBlock, style.activeSidebar]}  onClick={(e) => { this.active(e) }} ><Link to="/subMenu" style = {[style.productUlLiA]} >Member Data</Link> </member-data> }
				
				<tutorials style = {[style.productUlLi, style.tutorials, style.displayBlock]} ><a href="#" style = {style.productUlLiA} >Tasks </a> </tutorials>
				<analytics style = {[style.productUlLi, style.analytics, style.displayBlock]} ><a href="#" style = {style.productUlLiA} >Analytics </a> </analytics>
				<infographics style = {[style.productUlLi, style.infographics, style.displayBlock]} > <a href="#" style = {style.productUlLiA} >Infographics </a></infographics>
				</ul> 
				<divider style = {[style.divider, style.displayBlock]} > </divider>
				</content-section-left-product>
				
				<content-section-left-dashboard> 
				<content-section-left-product-heading style = {[style.productHeading, style.displayBlock]}> DASHBOARD</content-section-left-product-heading>
				<ul style = {style.dashboardUl}> 
				<messages style = {[style.dashboardUlLi, style.messages, style.displayBlock]} ><a href="#" style = {style.dashboardUlLiA}>Messages </a> </messages>
				<li style = {style.dashboardUlLi}><a href="#" style = {style.dashboardUlLiA}>Connections </a> </li>
				<integrations style = {[style.dashboardUlLi, style.integrations, style.displayBlock]}><a href="#" style = {style.dashboardUlLiA}>Integrations </a> </integrations>
				<li style = {style.dashboardUlLi}> <Link to="/accountSettings" style = {style.dashboardUlLiA} >Account Settings </Link></li>
				<li style = {style.dashboardUlLi}> <Link to="/accountSettings" style = {style.dashboardUlLiA}>App Settings </Link></li>
				<li style = {style.dashboardUlLi}> <Link to="/profile_dashboard" style = {style.dashboardUlLiA}>Demo1 </Link></li>
				<li style = {style.dashboardUlLi}> <Link to="/invoice" style = {style.dashboardUlLiA}>Demo2 </Link></li>
				<li style = {style.dashboardUlLi}> <Link to="/manufacturer" style = {style.dashboardUlLiA}>Demo3 </Link></li>
				</ul> 
				<divider style = {[style.divider, style.displayBlock]} > </divider>
				</content-section-left-dashboard>				
				</content-section-left-innerpart>
				</aside></Col> 
				:<Col xs={12} sm={2} md ={1} style = {style.paddingLeft}><a href = 'javascript:void(0)' onClick={(e) => { this.toggle('true',e) }} style = {style.paddingLeft} >	
				<menuTab style={[style.menuTab, style.flip]}>MENU</menuTab>
                </a></Col>}
				</main>
				
    )
  }
}

DashboardLeftSidebar.propTypes = {
 
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(DashboardLeftSidebar))
