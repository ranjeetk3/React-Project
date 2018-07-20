// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import '../../css/tableStyle.css'
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
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');


// exports
export class purchaseOrder extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'pastInvoice', profile:false, customFields:0}
		
  }
	
	componentDidMount() {
			const { dispatch,session } = this.props
			dispatch({
			type: 'GET_ORDERS',
			payload: {
				loginToken: session.loginTokenDetails.data
			}
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
  	
	getPaginationData(page, e) {
		const { dispatch } = this.props
		dispatch({
			type: 'GET_PAGINATION_DATA',
			payload: {
				page: page,
			}
		})
		e.preventDefault()
	}

getPastmonthSearchData(field,e) {
	const { dispatch } = this.props
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
		console.log("DateRange:" + startDate + " " +endDate)
		this.getData(startDate, endDate)
		} else if(value == 'Quarter'){
			this.setState({customFields:0})
			var date = this.pastQuarter();
			startDate = date[0]
			endDate = date[1]
			console.log("DateRange:" + startDate + " " +endDate)
			this.getData(startDate, endDate)
			
		} else if(value == 'custom'){
			this.setState({customFields:1})
		} else {
			this.setState({customFields:0})
			const { dispatch } = this.props
			dispatch({
			type: 'GET_ORDERS'
			})
		}
}

getData(startDate, endDate ) 
{
const { dispatch } = this.props
dispatch({
			type: "GET_DATE_RANGE_SEARCH_DATA",
			payload: {
				data: {
				startDate: startDate,
				endDate: endDate
				}
			}			
		})

}

getDateRangeSearchData(e) {
const { form, dispatch } = this.props
		console.log("DateRange:" + form.data.startDate + " " + form.data.endDate)
		dispatch({
			type: "GET_DATE_RANGE_SEARCH_DATA",
			payload: {
				data: {
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
	
	// Update Package By Id
	getPurchaseRequestById(cell, e){
	console.log('Data'+cell.id)
		const { dispatch, session} = this.props
		dispatch({
			type: 'GET_PURCHASE_REQUEST_BY_ID',
			payload: {
				requestDetails: {
						id: cell.id,
						//loginToken: session.loginTokenDetails.token
						}
					}
        })
		e.preventDefault()
	}	
	
// Start Funtion For Add Delete Icon in Table rows
deleteIconAdd(cell, row){
  return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { this.getPurchaseRequestById(cell, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv></actionDiv>)
} 
	
  render() {
	const { form } = this.props
	const pastInvoices=[{text:'Past Year',value:'Year'},{text:'Past Quarter',value:'Quarter'},{text:'All',value:'all'},{text:'Custom Range',value:'custom'}]
			console.log('form data ' + JSON.stringify(form.data))
			var dataObject = form.OrderData
			var OrderData = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						OrderData.push({
								vendor_name: row.company_name,
								location: row.type,
								subtotal: row.subtotal,
								order_status: row.order_status,
								date_created: row.date_created,
								date_expected: row.date_expected,
								id: row.id
							})
							count = parseInt(count)+1
						}
        }
				
	
		const selectRowProp = {
			mode: 'radio',
			clickToSelect: true,
			onSelect: this.getPurchaseRequestById
		};
		
		console.log("products" + JSON.stringify(OrderData))
    return (
		<wrapper style = {[style.wrapper, style.displayBlock]} > 
			<DashboardHeader/>
							<content-section >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className="row">
								 <DashboardLeftSidebar/> 	
								<contentSectionMiddle style = {style.contentSectionMiddle} className = 'col-xs-12 col-sm-8  col-md-8'> 
									<box style = {style.box}>

										<bottomLine style = {style.boxBottomLine}>
											
										
											{this.state.showhide=='pastInvoice' ? <pastInvoices style = {[style.boxTextIcon, style.pastInvoices, style.active]} > </pastInvoices> 
											: <pastInvoices style = {[style.boxTextIcon, style.pastInvoices]} > </pastInvoices> }
											
											
												<boxText ><a href='#' onClick={(e) => { this.editProfile('pastInvoice',e) }} style = {style.boxText}> List Of Past Invoices   </a> </boxText> 
										</bottomLine>
										
										<billingInformationBottomLine style = {style.boxBottomLine}>
											
											
											
											{this.state.showhide=='billing' ? <billingInformation style = {[style.boxTextIcon, style.billingInformation, style.active]} > </billingInformation> 
											: <billingInformation style = {[style.boxTextIcon, style.billingInformation]} > </billingInformation>  }
											
											
										<boxbillingInformationText ><a href='#' onClick={(e) => { this.editProfile('billing',e) }} style = {style.boxText}> Billing Information   </a> </boxbillingInformationText> 
										</billingInformationBottomLine>
										
										<companyHierarchyBottomLine style = {style.boxBottomLine}>
											
											{this.state.showhide=='companyHierarchy' ? <companyHierarchy style = {[style.boxTextIcon, style.companyHierarchy, style.active]} > </companyHierarchy> 
											: <companyHierarchy style = {[style.boxTextIcon, style.companyHierarchy]} > </companyHierarchy>  }
											
											<boxcompanyHierarchyText ><a href='#' onClick={(e) => { this.editProfile('companyHierarchy',e) }} style = {style.boxText}> Company Hierarchy    </a> </boxcompanyHierarchyText> 
										</companyHierarchyBottomLine>
										
										<softwareOptionBottomLine style = {style.boxBottomLine}>
											
											{this.state.showhide=='softwareOptions' ? <softwareOption style = {[style.boxTextIcon, style.softwareOption,style.active]} > </softwareOption> 
											: <softwareOption style = {[style.boxTextIcon, style.softwareOption]} > </softwareOption>   }
											
											
											<boxsoftwareOptionText ><Link to ='#' onClick={(e) => { this.editProfile('softwareOptions',e) }}  style = {style.boxText}> Software Options     </Link> </boxsoftwareOptionText> 
										</softwareOptionBottomLine>

										<useSettingBottomLine style = {style.boxBottomLine}>
											{this.state.showhide=='userSetting' ? <userSetting style = {[style.boxTextIcon, style.userSetting, style.active]} > </userSetting>  
											:<userSetting style = {[style.boxTextIcon, style.userSetting]} > </userSetting>    }
											
												<boxuseSettingText ><Link to ='#' onClick={(e) => { this.editProfile('userSetting',e) }} style = {style.boxText}> User Setting  </Link> </boxuseSettingText> 
										</useSettingBottomLine>
										
									</box>
						
							<pastInvoicesTable style = {[style.pastInvoicesTable, style.displayBlock]}>
							<pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
							<heading style = {style.heading}>Purchase Orders</heading>
							<form1 className='col-sm-10 col-md-9 pull-right'>
							<calendarinput className='pull-right'>
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
							</calendarinput>
							</form1>
							</pastInvoicesHeading>
								<searchBox className='col-sm-12 col-md-9'> 
									<searchBlockField style={style.selectSection1}>
										<searchBox style = {style.selectBox}>
							
											<FormInput style = {style.select} type="text" placeholder="Vendor"  customStyle={style.inputField} />											
										</searchBox>

										<searchBox style = {style.selectBox}>

											<FormInput style = {style.select} type="text" placeholder="Status"  customStyle={style.inputField}  />											

										</searchBox>

										<searchBox style = {style.selectBox}>

											<FormInput  style = {style.select} type="text" placeholder="Location"  customStyle={style.inputField}  />

										</searchBox>

									</searchBlockField>
								</searchBox> 
								
								<BootstrapTable data={OrderData}  selectRow={ selectRowProp }  pagination={true}  search={true}   >
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" isKey={true} dataField="id" >P.O.ID</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="order_status">Status</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="date_created" >Date Created</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="location">Location</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="vendor_name" >Vendor</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "100" dataFormat={this.deleteIconAdd} dataField="id">Action</TableHeaderColumn>
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

purchaseOrder.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.orderManagement
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(purchaseOrder))
