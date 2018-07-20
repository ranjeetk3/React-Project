// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './tableStyle.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
import FormInput from '../FormInput'
import Footer from '../Footer'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeader from '../DashboardHeader'
import UserMenu from '../UserMenu'
import ChatBox from '../ChatBox'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

// exports
export class Invoice extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'pastInvoice', profile:false, customFields:0}
		
  }
	
	
  
componentDidMount() {
    const { dispatch, session } = this.props
    dispatch({
    type: 'GET_INVOICE',
		payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
	dispatch({
		type: 'INVOICE_STARTED'
	})
}
	
  setFieldValue(field, e) {
	
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_INVOICE_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    
  }
	
 pastQuarter()   
  {  
		var date = new Date()
		var year = date.getFullYear(); 
		var month = date.getMonth() + 1 
		var currentQuarterValue = (Math.ceil(month / 3))
		if(currentQuarterValue == 1) {
			var pastQuarterValue  = 4
			year = year -1;
		} else {
			var pastQuarterValue  = currentQuarterValue - 1
		}
		var pastQuarterArray = [];
		
		switch(pastQuarterValue)
		{
			case 1:
				pastQuarterArray.push(year+'-01-01');
				pastQuarterArray.push(year+'-03-31');
			break;
			case 2:
				pastQuarterArray.push(year+'-04-01');
				pastQuarterArray.push(year+'-06-31');
			break;
			case 3:
				pastQuarterArray.push(year+'-07-01');
				pastQuarterArray.push(year+'-09-30');
			break;
			case 4:
				pastQuarterArray.push(year+'-10-01');
				pastQuarterArray.push(year+'-12-31');
			break;
		}

    return pastQuarterArray;  
  }  
  	


getPastmonthSearchData(field,e) {
	const { dispatch, session } = this.props
	var value = e.target.value
	dispatch({
		type: 'SET_INVOICE_FORM_FIELD_VALUE',
			params: {
				field: field,
				value: value
			}
		})
	if(value == 'Year'){
		this.setState({customFields:0})
		var currentTime = new Date()
		var month = currentTime.getMonth() + 1
		var day = currentTime.getDate()
		var lastYear = currentTime.getFullYear() -1	
		var currentYear = currentTime.getFullYear()	
		var startDate = lastYear + "-" + month + "-" + day
		var endDate = currentYear + "-" + month + "-" + day
		this.getData(startDate, endDate)
		} else if(value == 'Quarter'){
			this.setState({customFields:0})
			var date = this.pastQuarter();
			startDate = date[0]
			endDate = date[1]
			this.getData(startDate, endDate)
			
		} else if(value == 'custom'){
			this.setState({customFields:1})
		} else {
			this.setState({customFields:0})
			const { dispatch } = this.props
			dispatch({
			type: 'GET_INVOICE',
				payload: {
					loginToken: session.loginTokenDetails.token
				}
			})
		}
}

getData(startDate, endDate ) 
{
const { dispatch, session} = this.props
dispatch({
			type: "GET_DATE_RANGE_SEARCH_DATA",
			payload: {
				data: {
					loginToken: session.loginTokenDetails.token,
					startDate: startDate,
					endDate: endDate
				}
			}			
		})

}




getDateRangeSearchData(e) {
const { form, dispatch, session } = this.props
		dispatch({
			type: "GET_DATE_RANGE_SEARCH_DATA",
			payload: {
				data: {
					loginToken: session.loginTokenDetails.token,
					startDate: form.data.startDate,
					endDate: form.data.endDate
				}
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
	const pastInvoices=[{text:'Past Year',value:'Year'},{text:'Past Quarter',value:'Quarter'},{text:'All',value:'all'},{text:'Custom Range',value:'custom'}]
		var pastInvoicesList = []
		 if (pastInvoices.length != 0) {
      for (var i = 0; i < pastInvoices.length; i++) {
        pastInvoicesList.push(
          < option value = {pastInvoices[i]['value']} > {pastInvoices[i]['text']} < /option>
        )
      }
    }
        
        var dataObject = form.invoiceData
				var products = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						products.push({
								invoice_no: row.invoice_no,
								date_sent: row.date_sent,
								date_received: row.date_received,
								invoice_date:row.invoice_date,
								amount: row.amount,
								status: row.status,
								name: row.name,
								date_due:row.date_due
							})
							count = parseInt(count)+1
						}
        } 
    return (
		<wrapper style = {[style.wrapper, style.displayBlock]} > 
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
							<content-section >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className="row">
								 <DashboardLeftSidebar/> 	
								<contentSectionMiddle style = {style.contentSectionMiddle} className = 'col-xs-12 col-sm-8  col-md-8'> 
								<UserMenu/> 
							<pastInvoicesTable style = {style.pastInvoicesTable}>
							<pastInvoicesHeading className='col-xs-12 col-sm-3 col-md-3' style = {[style.pastInvoicesHeading, style.displayBlock]}>
							<heading style = {style.heading}>Past Invoices </heading>
							</pastInvoicesHeading>
							<form1 className='col-sm-10 col-md-9 pull-right'>
							<invoicesSelect style = {style.invoicesSelect} className = 'col-xs-12 col-sm-3 col-md-4'>
							  <dropDown style = {style.select}>
							    < select style={style.dropDownList} value={form.data.pastData}  className = 'select' onChange={(e) => { this.getPastmonthSearchData('pastData', e) }} >
								  {pastInvoicesList}
								< /select>
								</dropDown> 
							</invoicesSelect>
							{this.state.customFields == 1 ?
							<calendarinput style = {[style.calendarinputContainer, style.calendar]} className='col-xs-12 col-sm-8 col-md-8 pull-right'> <h2 style ={style.heading2}>Range</h2> 
							<checkbox style = {[style.checkbox, style.check]}>
								<label className ='label'>
									
								</label>	
							</checkbox> 
							<calendar style={style.calendarwidth}>
							<datePicker style={style.inputGroup}> <DatePicker
											dateFormat="YYYY/MM/DD"
											selected={this.state.startDate}
											onChange={this.handleChange} className="datepicker"  />  
												</datePicker>
							<datePicker style={style.inputGroup}>				
											<DatePicker
											dateFormat="YYYY/MM/DD"
											selected={this.state.startDate}
											onChange={this.handleChange} className="datepicker" />
							</datePicker>
							<Button type="submit"  style = {style.btnSearch} onClick={(e) => { this.getDateRangeSearchData(e) }} text= "Search" className = 'btn'> Search </Button>
							</calendar>
							</calendarinput> : ''} 
							</form1>
					
								<BootstrapTable striped={true}  hover={true}  condensed={true} data={products} pagination={true} search={true} >
									<TableHeaderColumn  dataSort={true} className='columHeight' width = "120" dataField="invoice_no" isKey={true}>Invoice No</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true}  className='columHeight' width = "120" dataField="date_sent" >Date Sent</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="date_received" >Date Recv'd</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="invoice_date" >Invoice Date</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="amount">Inv. Amount</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="status">Inv. Status</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="name">Company</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = "120" dataField="date_due">Days Past Due</TableHeaderColumn>
								</BootstrapTable>
							</pastInvoicesTable>	
								<lastDiv style = {style.divHeight} >   </lastDiv>
								
								
				</contentSectionMiddle>
				</rowDiv>
				
			</contentTop>
			</content-section>					
				
			
				</wrapper>
		
    )
  }
}

Invoice.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.invoice
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Invoice))
