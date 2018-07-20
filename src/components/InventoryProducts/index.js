// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

// components
import Form from '../Form'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeader from '../DashboardHeader'
import ReloadingGraphic from '../ReloadingGraphic'
import SubMenu from '../SubMenu'
import ChatBox from '../ChatBox'
import { Label, Table, Col, Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

// exports
export class InventoryProducts extends Form {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		const { dispatch, session } = this.props
		dispatch({
			type: 'GET_PRODUCTS',
			payload: {
				loginToken: session.loginTokenDetails.token
			} 
		})
	}
 
	
	render() {
		const { form } = this.props
		var products = form.productData
		return (
			<abc>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<wrapper style = {[style.wrapper, style.displayBlock]} >
				
				<DashboardHeader/>
				<content-section >
					<contentTop className='container' style = {style.contentTop}>
					<rowDiv className="row">
						<DashboardLeftSidebar/> 	
						<contentSectionMiddle style = {style.contentSectionMiddle} className = 'col-xs-12 col-sm-8  col-md-8'> 
							<SubMenu/>
							<pastInvoicesTable style = {[style.pastInvoicesTable, style.displayBlock, style.padding0]} className = 'col-xs-12 col-sm-12  col-md-12'>
								<pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
									<heading style = {style.heading} className='col-md-12'>Products</heading>
									<tableData className='col-xs-12 col-sm-12 col-md-11'>
										<headingButton style = {style.button} className='col-md-12'> 
											<invoicesSelect style = {[style.invoicesSelect, style.padding0]} className = 'col-xs-12 col-sm-3 col-md-4'>
												<Link to="/inventory_product_form" style = {style.btnSearch} className = 'btn btn-success'>Add</Link>
											</invoicesSelect>
										</headingButton>
									</tableData>
								</pastInvoicesHeading>
								<BootstrapTable data={products}   pagination={true} search={true} className='table-responsive'>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' isKey={true} dataField='id' hidden={true}>id</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80'  dataField='number'>Number</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='name'>Name</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='price'>Price</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='100' dataField='manufacutererName'>manufacuterer</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='vendorName'>Vendor</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='100' dataField='categoryName'>Category</TableHeaderColumn>
								</BootstrapTable>
							</pastInvoicesTable>	
							<lastDiv style = {style.divHeight} >   </lastDiv>
						</contentSectionMiddle>
					</rowDiv>
					<ChatBox />
					</contentTop>
				</content-section>
			</wrapper>
			</abc>
		)
	}
}

InventoryProducts.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.productManagement
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(InventoryProducts))
