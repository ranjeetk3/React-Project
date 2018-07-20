// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import './tableStyle.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
//import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import UserMenu from '../UserMenu'
import CreditCardForm from '../CreditCardForm'
import AchForm from '../AchForm'
import DashboardHeader from '../DashboardHeader'
import { Label,Table, Col, Button, Modal, Popover,Tooltip,OverlayTrigger} from 'react-bootstrap'

// exports
export class BillingInvoice extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'pastInvoice', profile:false,modalSection:null}
		
  }
  componentDidMount() {
     const { dispatch, session } = this.props
	 	dispatch({
		type: 'CARD_DETAIL_STARTED'
		})
			dispatch({
				type: 'GET_CARD_DETAILS',
				payload: {
				loginToken: session.loginTokenDetails.token
				}
			})
			dispatch({
				type: 'GET_ACCOUNT_DETAILS',
				payload: {
				loginToken: session.loginTokenDetails.token
				}
			})
  }
	
	getInitialState(e) {
    return { 
		showModal: false,
		modalSection:Null
		};
  }

  close(e) {
    this.setState({ showModal: false });
  }

  open(data, e) {
		var modalSection = null;
		if(data == 'CD'){
			this.setState({ modalSection: <CreditCardForm/> });
		} else {
			this.setState({ modalSection: <AchForm/> });
		}
    this.setState({ showModal: true });
  }
	
  setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_PROFILE_DASHBOARD_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    
  }
   editProfile(field, e) {
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
	const { form } = this.props
		var tableGrid = []
		var acctableGrid = []
		var count = 1
			var cardLists = form.billingData
			var accLists = form.accountData
			var countObj = Object.keys(cardLists).length
			var accDetailsCount =  Object.keys(accLists).length
				for (var key in cardLists) {
					tableGrid.push(<tr style = {style.d0} key = {key} >
					<td  style = {[style.padding20, style.td]} >{cardLists[key].type}</td>
					<td style = {style.td} >{cardLists[key].card_number}</td>
					<td style = {style.td} >{cardLists[key].exp_month}</td>
					<td style = {style.td} >{cardLists[key].name}</td>
					<td style = {style.td} >Primary</td>
					</tr>)
					count = parseInt(count)+1
				}
				for (var key in accLists) {
					acctableGrid.push(<tr style = {style.d0} key = {key} >
					<td  style = {[style.padding20, style.td]} >{accLists[key].type}</td>
					<td style = {style.td} >{accLists[key].name}</td>
					<td style = {style.td} >{accLists[key].account_no}</td>
					<td style = {style.td} >{accLists[key].routing_number}</td>
					<td style = {style.td} >Primary</td>
					</tr>)
					count = parseInt(count)+1
				}
			
    return (
		<wrapper style = {[style.wrapper, style.displayBlock]} > 
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
							<content-section >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className="row">
								 <DashboardLeftSidebar/> 	
								<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-5  col-md-4'> 
									<UserMenu/>
						
							<rightCol style= {style.rightCol} className="col-xs-12 col-sm-12 col-md-7" >
							<colRightTable style= {[style.ColRightTable, style.padding0]} className="col-xs-12 col-sm-12 col-md-12">
								<colRightTableHeading style= {style.colRightTableHeading} className = 'col-xs-12 col-sm-8 col-md-6'> <credith1 style = {style.h1}>Credit and Debit Cards </credith1></colRightTableHeading>  
									<addBranch  style = {style.marginright} className="col-xs-12 col-sm-2 col-md-2 pull-right ">
									
									<Button  onClick={(e) => { this.open('CD',e) }} style = {style.btnStyle} bsStyle="success" bsSize="small">  +Add </Button>
									
									</addBranch> 
									<tableContainer style = {[style.tableContainer, style.marginBottom0]} className = 'table-responsive'>
										<table className = 'table' style={style.marginBottom0}>
											<thead style = {style.th}>
												<tr>
													<th style = {style.columHeight}>Card Type</th>
													<th style = {style.columHeight}>Ending Digits</th>
													<th style = {style.columHeight}>Expiry Date</th>
													<th style = {style.columHeight}>Name</th>
													<th style = {style.columHeight}>Primary</th>
												</tr>
											</thead>
											<tbody>
												{tableGrid}

											</tbody>
										</table>  
									</tableContainer>
								</colRightTable>
								
								
								<colRightTable style= {[style.ColRightTable,style.colRightsec,style.padding0]} className = 'col-xs-12 col-sm-12 col-md-12'>
								<colRightTableHeading style= {style.colRightTableHeading} className = 'col-xs-12 col-sm-8 col-md-6'> <credith1 style = {style.h1}>Checkings Accounts </credith1></colRightTableHeading>  
									<addBranch  style = {style.marginright} className="col-xs-12 col-sm-2 col-md-2 pull-right "> 
										<Button  onClick={(e) => { this.open('ACH',e) }} style = {style.btnStyle} bsStyle="success" bsSize="small"> 
											+Add 
										</Button>
									</addBranch> 
									<tableContainer style = {style.tableContainer}  className = 'table-responsive'>
										<table className = 'table'>
											<thead style = {[style.th, style.thNoWrap]}>
												<tr>
													<th style = {style.columHeight}>Bank Name</th>
													<th style = {style.columHeight} >Rounting Number</th>
													<th style = {style.columHeight}>Ending Digits</th>
													<th style = {style.columHeight} >Name</th>
													<th style = {style.columHeight} >Bank Phone</th>
													<th style = {style.columHeight}>Primary</th>
												</tr>
											</thead>
											<tbody>
												{acctableGrid}
												
											</tbody>
										</table>  
									</tableContainer>
								</colRightTable>
								</rightCol>
						</contentSectionMiddle>
					</rowDiv>
				</contentTop>
				</content-section>					
				<div>
        
        <Modal bsSize = 'sm' show={this.state.showModal} onHide={this.close} >
         <modalBg style={style.modalBg}> <Modal.Header closeButton onClick={(e) => { this.close() }}  >
            <Modal.Title style={style.whiteText}></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <customWidth style = {style.customWidth}>
						{this.state.modalSection}
						</customWidth>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e) => { this.close() }}>Close</Button>
          </Modal.Footer>
					</modalBg>
        </Modal>
				
				
				
      </div>
			
				</wrapper>
		
    )
  }
}

BillingInvoice.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.billingInfo
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(BillingInvoice))
