// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import '../../css/tableStyle.css'
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
import SubMenu from '../SubMenu'
import ChatBox from '../ChatBox'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require("react-bootstrap-date-picker");


// exports
export class Manufacturer extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'pastInvoice', profile:false, customFields:0}
		
  }
	
	
  
	componentDidMount() {
		const { dispatch, session } = this.props
		dispatch({
			type: 'MANUFACTURER_STARTED'
		})
		dispatch({
		type: 'GET_MANUFACTURER',
			payload: {
				loginToken: session.loginTokenDetails.token
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
		const { dispatch, session } = this.props
		dispatch({
			type: 'GET_PAGINATION_DATA',
			payload: {
				page: page,
				loginToken: session.loginTokenDetails.token
		 
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
			const { dispatch, session } = this.props
			dispatch({
			type: 'GET_MANUFACTURER',
			 payload: {
				loginToken: session.loginTokenDetails.token
			 }
			})
		}
}

getData(startDate, endDate ) 
{
const { dispatch, session } = this.props
dispatch({
			type: "GET_DATE_RANGE_SEARCH_DATA",
			payload: {
				data: {
				startDate: startDate,
				endDate: endDate,
				loginToken: session.loginTokenDetails.token
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
					startDate: form.data.startDate,
					endDate: form.data.endDate,
					loginToken: session.loginTokenDetails.token
				}
			}
		})

		e.preventDefault()
}
	

	
  render() {
	const { form } = this.props
	const pastInvoices=[{text:'Past Year',value:'Year'},{text:'Past Quarter',value:'Quarter'},{text:'All',value:'all'},{text:'Custom Range',value:'custom'}]
        var dataObject = form.manufacturerData
				var products = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						products.push({
								name: row.companyName,
								city: row.city,
								state: row.state,
								country:row.country,
								salesNo: row.salesPhone,
								supportNo: row.supportPhone,
								tollfreeNo: row.tollFreePhone,
								faxNo:row.fax,
								email:row.emailAddress
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
									<SubMenu/>
							<pastInvoicesTable style = {style.pastInvoicesTable}>
							<pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
							<heading style = {style.heading}>Manufacturer</heading>
							<headingButton style = {style.button}>
							<Link to="/add_manufacturer" ><Button type="submit"  style = {style.btnSearch}  text= "Add" className = 'btn btn-success'>+ ADD </Button></Link>
							</headingButton>
							</pastInvoicesHeading>
							

								<BootstrapTable data={products} pagination={true} search={true} >
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = "80" dataField="name" isKey={true}>Name</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true}  className='columHeight columBorder' width = "80" dataField="city" >City</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="state" >State</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder'  width = "80" dataField="country" >Country</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="salesNo">Sales No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="supportNo">Support no</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="tollfreeNo">Toll Free No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="faxNo">Fax No</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataField="email">Email</TableHeaderColumn>
								</BootstrapTable>
							</pastInvoicesTable>	
								<lastDiv style = {style.divHeight} >   </lastDiv>
				</contentSectionMiddle>
				</rowDiv>
				<ChatBox />
			</contentTop>
			</content-section>					
				
			
				</wrapper>
		
    )
  }
}

Manufacturer.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.manufacturer
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Manufacturer))
