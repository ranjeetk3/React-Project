// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'

// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeader from '../DashboardHeader'
import UserMenu from '../UserMenu'
import SliderCheckbox from '../SliderCheckbox'
import ChatBox from '../ChatBox'
import { Col, Button, ListGroup, ListGroupItem} from 'react-bootstrap'


// exports
export class SoftwareOptions extends Form {
  constructor(props) {
    super(props)
	this.state = {showhide:'pastInvoice'}
  }
  componentWillMount() {
    const { dispatch, session } = this.props
	dispatch({
		type: 'SOFTWARE_OPTIONS_STARTED'
	})
    dispatch({
      type: 'GET_SOFTWARE_OPTIONS',
		payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
  }
  
  submit(e) {
    const { form, dispatch, session } = this.props
	
    var dataArray = []
    e.preventDefault()
	var self = this
    var elements = findDOMNode(self.refs.form).elements
    for (var i = 0; i < elements.length; i++) {
      if ((elements[i].type == 'checkbox') && (elements[i].value == 'true')) {
        dataArray.push(elements[i].id)
      }
    }
    dispatch({
      type: "SAVE_SOFTWARE_OPTIONS",
      payload: {
        data: {
		  loginToken: session.loginTokenDetails.token,
          companyId:session.companyIdForSoftwareOptions.company_id,
          softwareOptionsArray:dataArray
        }
      }
    })
  }
  setCurrentLevel(field, e) {
    if (field == 'pastInvoice') {
        this.setState({showhide:'pastInvoice'})
      } 
    if (field == 'billing') {
        this.setState({showhide:'billing'})
      }
    if (field == 'companyHierarchy') {
        this.setState({showhide:'companyHierarchy'})
      }
    if (field == 'softwareOptions') {
        this.setState({showhide:'softwareOptions'})
      }
    if (field == 'userSetting') {
      this.setState({showhide:'userSetting'})
    }
  }
  render() {
const inactiveSliderStyle = [style.slider, style.round]
const inactiveRoundStyle = [style.sliderBefore]
const activeSliderStyle = [style.checked]
const activeRoundStyle = [style.checkedBefore]
const { form } = this.props
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''  
	var muduleData = form.data
	if (muduleData.length != 0) {
		var modulesJson = muduleData.module
		var permissionArray = []
		var moduleCounter = 1
		for (var key in modulesJson) {
			var row = modulesJson[key]
			permissionArray.push(<sotwareText style={[style.sotwaretext, style.displayBlock, moduleCounter%2 == 0 ? style.whitebg : '']}>
				<sotwareHeading style={style.col80}>{row.name}</sotwareHeading> 
				<sliderSection style={[style.col15, style.pullRight]}>
					<SliderCheckbox checkboxValue={row.value} id={key} key={key}/>
				</sliderSection>
				</sotwareText>
			)
			moduleCounter++
		}
	}
    return (
		<wrapper style = {[style.wrapper, style.displayBlock]} >
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
							<content-section style = {style.contentSection} >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className="row">
								 <DashboardLeftSidebar/>
							<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-8  col-md-4'> 
							<UserMenu/> 
              
              <softwareOptionWrapper className = 'col-xs-12 col-sm-12 col-md-5' style={style.softwareWrapper}>
				
                <softwareright style={style.softwareright}>
				<form ref='form'>
				{messageStyle != '' ? <ListGroup style={style.alertBox}>
				<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
				</ListGroup> : ''}	
                  <headerSection>
                  <softwareOptionHeader style={style.h1}>Software Options</softwareOptionHeader>
                  </headerSection>
					<innerbg style={[style.innerbg, style.displayBlock]}>
					{permissionArray}
					</innerbg>
					<Button bsStyle="success" bsSize="small" onClick={(e) => { this.submit(e) }} style={style.greenBtn}>
					{form.isSubmitting ? 'Submitting' : 'Submit'}
					</Button>
				  </form>
                </softwareright>
            
              </softwareOptionWrapper>
				</contentSectionMiddle>
				</rowDiv>
				<ChatBox />
			</contentTop>
			</content-section>
				</wrapper>
    )
  }
}

SoftwareOptions.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.softwareOptions
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(SoftwareOptions))
