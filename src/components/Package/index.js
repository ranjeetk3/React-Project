// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './style.css'
// components
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import FormInput from '../FormInput'
import Footer from '../Footer'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import SubMenu from '../SubMenu'
import DashboardHeaderTitle from '../DashboardHeaderTitle'
import DashboardHeader from '../DashboardHeader'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import ChatBox from '../ChatBox'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker');
var currentObj = this
// exports
export class Package extends Form 
{
    constructor(props) 
    {
        super(props)
    }
componentWillMount(){
  const  {dispatch, session} = this.props
    dispatch({
      type: 'GET_PACKAGE',
	  payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
}	

// Delete Package By Package Id
deletePackage(cell, e) {
  e.preventDefault()
        const { form, dispatch, session } = this.props
          dispatch({
            type: 'DELETE_PACKAGE',
            payload: {
              packageId: {
               id: cell,
			   loginToken: session.loginTokenDetails.token
              }
            }
        })
  alert("Package deleted!")
 }

// Update Package By Id
getPackageById(cell, e){
	e.preventDefault()
        const {dispatch, session } = this.props
          dispatch({
            type: 'GET_PACKAGE_ITEM',
            payload: {
              packageId: {
               id: cell,
			   loginToken: session.loginTokenDetails.token
              }
            }
        })
}	
 
// Start Funtion For Add Delete Icon in Table rows
deleteIconAdd(cell, row){
  return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { currentObj.getPackageById(cell, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv><deleteDiv> <a href = 'javascript:void(0)' onClick={(e) => { currentObj.deletePackage(cell, e) }}  ><img src="http://localhost/img/deleteIcon.png"  /></a></deleteDiv></actionDiv>)
} 

render() 
{
    var self = this
    currentObj = this
    var packageArray = {
      'id': 0,
      'product_code': '0',
      'name': '0',
      'price': '0'
    }
    if(self.props.packageDetails.data != null) {
      packageArray = self.props.packageDetails.data
    }
	  
    return (
	<wrapper style = {[style.wrapper, style.displayBlock]}>
	<DashboardHeader/>
	<DashboardHeaderTitle/>
	<contentSection style = {style.contentSection} >
	<contentTop className='container' style = {style.contentTop}>
	<rowDiv className='row'>
	<DashboardLeftSidebar/>
	
	<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-8  col-md-4'> 
	<SubMenu/>
	<packageWrapper className="col-xs-12 col-sm-12 col-md-8" style = {style.mpadding}>	
    <pastInvoicesTable style = {[style.pastInvoicesTable, style.displayBlock]} className = 'col-xs-12 col-sm-12  col-md-12'>
    <pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
    <heading style = {style.heading} className='col-md-12'>Package</heading>
    <tableData className='col-md-11'>
    <headingButton style = {style.button} className='col-md-12'> 
    
    <invoicesSelect style = {[style.invoicesSelect, style.padding0]} className = 'col-xs-12 col-sm-3 col-md-4'>
    <Link to="/add_package" style = {style.btnSearch} className = 'btn btn-success'>Add</Link>
    </invoicesSelect>

    </headingButton>
    </tableData>
    </pastInvoicesHeading>
	
<addPackageTable style={[style.tableResponsive]}>
<BootstrapTable data={packageArray}   pagination={true} search={true} >
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' isKey={true} dataField='id' hidden = {true}>id</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='name'>Package Name</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='product_code'>Product Code</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='price'>Price</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "100" dataFormat={this.deleteIconAdd} dataField="id">Action</TableHeaderColumn>
</BootstrapTable>
</addPackageTable>
</pastInvoicesTable> 

    <lastDiv style = {style.divHeight} >   </lastDiv>
    </packageWrapper>
	</contentSectionMiddle>
						</rowDiv>
						<ChatBox/>
					</contentTop>
				</contentSection>	
			</wrapper>)
  }
}

Package.propTypes = {
}

function mapStateToProps(state) 
{
    return{
        session: state.session,
        packageDetails: state.getPackage
    }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Package))
