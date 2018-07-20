// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'
// style
import style from './style.js'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/tableStyle.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import FormLine from '../FormLine'
import FormBlock from '../FormBlock'
import FormInput from '../FormInput'
import CreditCardForm from '../CreditCardForm'
import AchForm from '../AchForm'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardHeader from '../DashboardHeader'
import { Label, Table, Col, Tabs, Tab, Button ,Modal, Popover, Tooltip, OverlayTrigger} from 'react-bootstrap'
import EditableDiv from 'react-wysiwyg-editor'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'


var currentObj = this
// exports
export class CartDetails extends Form {
  constructor(props) {
    super(props)	
		this.state = {itemArray:[], name:'',number:'', manufacturerName:'',totalItem:'', vendorName:'', categoryName:'', price:'', isToggleOn: false, cartDetails:[]}
}



	componentDidMount() {
			const {dispatch, session} = this.props
			dispatch({
				type: 'GET_CART_DETAILS',
					payload: {
						loginToken: session.loginTokenDetails.token
					}
			})
  }




updateCellTotalValue(cell, row) {
	var total = 0
}


	
render() {
		// Start Funtion For Add Text Box in Table rows
	var currentObj = this
	function addTextBox(cell, row){
				return (<actionDiv><textDiv><input style={style.quantityBox} type='text'  defaultValue='1' id = {'row_'+row.cartId} onChange= {currentObj.updateCellTotalValue(cell, row)} /></textDiv></actionDiv>)
	}
  
  const {form, dispatch} = currentObj.props
	var rowData
	var cart
	var dataObject = form.cartDetails
				var manufacturerData = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						manufacturerData.push({
								name: row.name,
								number: 'GF6800',
								price: row.price,
								vendorName:row.vendorName,
								manufacutererName: row.manufacutererName,
								categoryName: 'Bed Accessoriess',
								data: row.data,
								quantity: 1,
								id: row.cartId
							})
							count = parseInt(count)+1
						}
        }



			function deleteRowIcon(cell, row){
				return (<actionDiv><deleteDiv> <a href = 'javascript:void(0)' onClick={(e) => {currObj.deleteManufacture(cell,currentObj, e) }}  ><img src='http://localhost/img/deleteIcon.png'  /></a></deleteDiv></actionDiv>)
			}

			function onRowSelect(row, isSelected){
				modalData = row
				if(isSelected == true){
					currentObj.open('CD')
					currentSelectedArray.push(row)
					productJsonArray = Object.assign(productJsonArray, previousItemArray)
					productJsonArray.push(row)
						flag = 1;
				}
			}

			function onSelectAll(isSelected){
			}
			var selectRowProp = {
				mode: 'checkbox',
				clickToSelect: false,
				onSelect: onRowSelect,
				onSelectAll: onSelectAll
			};

  return (
		<wrapper style = {[style.wrapper, style.displayBlock]} >
			<DashboardHeader/>
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className='container' style={style.displayBlock}>
					<headerRow>
						<headingArea className='col-xs-12 col-sm-4 col-md-4' style={style.headerText}>
							Add Inventory
						</headingArea>
						<headerLink className='col-xs-12 col-sm-6 col-md-5 pull-right' style={style.headerLink}>
				<automaticSaved style = {[style.automaticSaved, style.displayBlock]} >
						<Link to='/purchase_request' style={style.blueButton}>Add More Products</Link>
				</automaticSaved>
						</headerLink>
					</headerRow>
				</headerContainer>
			</headerSection>
	<topArea className='container' style={style.displayBlock}>
	<rowArea className='row'>
	<tabArea className='col-sm-8 col-md-9 mobilepadding'>
		<Tabs defaultActiveKey={1}>
			<Tab eventKey={1} title='Purchase Request - CheckOut'>
				<formArea>
					<formBackground className='col-md-12' style={style.inventoryBg}> 
								<form ref='productForm'>				
								<BootstrapTable data={manufacturerData}  pagination={true}  search={true}   >
									
									<TableHeaderColumn  dataSort={true} className='columHeight columBorder'  width = '50' dataField='name' >Name</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true}  className='columHeight columBorder' width = '50' dataField='number' >Number</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = '50' dataField='categoryName'>Category Name</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '50' dataFormat={addTextBox} dataField='quantity'>Quantity</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = '50' dataField='price' >Price</TableHeaderColumn>
									
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = '50'  hidden={true} isKey={true} dataField='id'>Action</TableHeaderColumn>
									
								</BootstrapTable>
								</form>
					<totalPrice style={style.price}> Total Price : $<FormInput  customStyle={style.priceInputBox} type='text' readonly='readonly'  value={this.state.totalPrice} /> </totalPrice>
					<headingButton style={style.saveProducts}> 
					<button style={[style.greenBtn, style.btnSave1]} value="" type="button"  >Send For Review</button> 
					</headingButton> 
				<clr style={style.clr}></clr>
					</formBackground>
				</formArea>

			</Tab>
		</Tabs>
	</tabArea>
		<rightArea className='col-xs-12 col-sm-4 col-md-3' style={style.padding0}>  
			<rightGrayBox className='col-xs-12 col-sm-12 col-md-12' style={style.rightGrayBox}>
				<grayHeading style={style.grayHeading}>
				<icon style={style.icon}> </icon>
				<grayHeadingText style={style.displayBlock}>Tips for asking questions </grayHeadingText>
				<grayContent style={style.grayContent}>
					Every question you ask should help you gather either facts or an opinion. Know which kind of information you need and frame your questions accordingly.
				</grayContent>
				</grayHeading>
				
				<grayDivider style={[style.grayDivider, style.displayBlock]}> </grayDivider>
				<grayHeading style={style.grayHeading}>
					<icon style={style.icon}> </icon>
					<grayHeadingText style={style.displayBlock}>Search & Research </grayHeadingText>
					<grayContent style={[style.grayContent, style.bottomMargin]}>
					Even if you don't find a useful answer elsewhere on the site, including links to related questions that haven't helped can help others in understanding how your question is different from the rest.
					</grayContent>
				</grayHeading>
				
			
				<contactSupport style={[style.contactSupport, style.displayBlock]}> Still need help? Contact Support </contactSupport>
			</rightGrayBox>
		</rightArea>
	</rowArea>
	</topArea>
	</wrapper>
    )
  }
}

CartDetails.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.purchaseRequest
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(CartDetails))
