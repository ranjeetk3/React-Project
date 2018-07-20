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

var modalData = []
var productJsonArray = []
var previousItemArray = []
var flag = 0
var currentSelectedArray = []
var productFormatingArray = []
var currentObj = this
// exports
export class PurchaseRequest extends Form {
  constructor(props) {
    super(props)	
		this.state = {itemArray:[], name:'',number:'', manufacturerName:'',totalItem:'', vendorName:'', categoryName:'', price:'', isToggleOn: false, cartDetails:[]}
		this.handleClick = this.handleClick.bind(this);
		this.deleteCartItem = this.deleteCartItem.bind(this);
}

	componentDidMount() {
			const { dispatch, session } = this.props
			dispatch({
				type: 'GET_PRODUCTS',
				payload: {
					loginToken: session.loginTokenDetails.token
				}
			})
			dispatch({
				type: 'GET_CART_DETAILS',
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

	handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
	
 close(e) {
		var elements = document.getElementsByTagName('input')
	  for(var i=0; i<elements.length; i++) {
	    var input = elements[i] 
	    
			input.checked = false;
	  }
    this.setState({ showModal: false });
  }

	open(data) {
    this.setState({ showModal: true });
  }
	
// Start Funtion For Add Text Box in Table rows
addTextBox(cell, row){
	if(cell == undefined){
		return (<actionDiv><textDiv><input style={style.quantityBox} type='text'  defaultValue='1' ref= 'qnt' onChange= {(e) => AddPackage.updateCellValue(cell, row, e)} /></textDiv></actionDiv>)
  	}else{
  		return (<actionDiv><textDiv><input style={style.quantityBox} type='text'  defaultValue= {cell} ref= 'rs' /></textDiv></actionDiv>)
  	}
}
	



submit(e) {
const {dispatch, form, session} = this.props
//var productId = document.getElementById('productId').value
	dispatch({
				type: 'ADD_ITEM_TO_CART',
				payload: {
					addCartItem: {
						 productId: 1,
						 userId: 1,
						 qty: 2,
						 inventoryId: 1,
						 loginToken: session.loginTokenDetails.token
					}
				}
		})
		//this.close(e)
		
}



deleteCartItem(cartId) {
	var result = confirm("Are You Sure You Want To Delete?");
	if (result == true) {
			const { dispatch } = this.props
			dispatch({
				type: 'DELETE_CART_ITEM_BY_ID',
				payload: {
					deletedetails: {
						id: cartId,
						loginToken: session.loginTokenDetails.token
					}
				}
			})
	}
}


	
  render() {
  var currObj = this
  const {form, dispatch} = this.props
	var rowData
	var cart
	var dataObject = form.productData
				var manufacturerData = []
        if (dataObject.length != 0) {
					var invoiceLists = dataObject
					var count = 1
					for (var key in invoiceLists) {
						var row  = invoiceLists[key]
						manufacturerData.push({
								name: row.name,
								number: row.number,
								price: row.price,
								vendorName:row.vendorName,
								manufacutererName: row.manufacutererName,
								categoryName: row.categoryName,
								data: row.data,
								id: row.id
							})
							count = parseInt(count)+1
						}
        }

function imageFormatter(cell, row){
	if(cell !== null) {
		var source = 'data:image/png;base64,'+cell
		return (<productDiv style = {style.size}> <img src = {source} style = {style.size}  /></productDiv>)
	} else {
			return (<productDiv style = {style.size}><img src='http://localhost/img/not-found.png' style = {style.size} /></productDiv>)
	}
}

function deleteRowIcon(cell, row){
  return (<actionDiv><deleteDiv> <a href = 'javascript:void(0)' onClick={(e) => {currObj.deleteManufacture(cell,currObj, e) }}  ><img src='http://localhost/img/deleteIcon.png'  /></a></deleteDiv></actionDiv>)
}

function onRowSelect(row, isSelected){
  modalData = row
	if(isSelected == true){
		currObj.open('CD')
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
if(form.cartDetails != null) {
var cartData = form.cartDetails
var cartList = []
	for (var key in cartData) {
		rowData  = cartData[key]
		cartList.push(<list><listItem style = {style.listItem} >
		<itemRow className = 'row' style = {style.displayBlock}>
		<paddingR0 style = {style.paddingR0} className = 'col-xs-3'>
			<img className = 'img-responsive' src='http://localhost/img/item.jpg' alt='item' />
		</paddingR0>
		<productnameCoulmn className='col-xs-6'>
		<h3 style = {style.listHeading} >{rowData.name}</h3>
		<p style = {style.listDescription} >Product details can go here</p>
		</productnameCoulmn>
		<productAmountColumn style = {style.padding0} className='col-xs-3'>
		<p style = {style.listAmount} >
		${rowData.price}
		</p>
		<p style = {style.listDelete}>
		<span className = 'glyphicon glyphicon-remove-sign' key = {rowData.cartId} onClick={this.deleteCartItem.bind(this,rowData.cartId)} ></span>
		</p>
		</productAmountColumn>
		</itemRow>
		</listItem></list>)
	}
}

cart = <main><cartView style = {[ style.cartView, style.displayBlock]} >
              <containerCart style = {[style.containerCart, style.displayBlock]} >
                <caretTop style = {style.caretTop} ></caretTop>
									<countCart style = {[style.countCartp, style.displayBlock]} >
										<paragraph style = {style.displayBlock}>

										</paragraph>
									</countCart>
									<cartItem style = {style.cartItem} >
									{cartList}
									<Link to='/cart_details' style={style.blueButtonCart}>Continue To Cart</Link>
									
								</cartItem>
            </containerCart>
					</cartView>
					</main>
	
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
          <a className ='btn' style = {style.btnCart} onClick={this.handleClick}  href = '#'> <img src='http://localhost/img/addToCart.png'  /> <number style = {style.numberCart}> {cartData.length}</number></a>
            {this.state.isToggleOn ? cart : ''}
				</automaticSaved>
						</headerLink>
					</headerRow>
				</headerContainer>
			</headerSection>
	<topArea className='container' style={style.displayBlock}>
	<rowArea className='row'>
	<tabArea className='col-sm-8 col-md-9 mobilepadding'>
		<Tabs defaultActiveKey={1}>
			<Tab eventKey={1} title='Purchase Request'>
				<formArea>
					<formBackground className='col-md-12' style={style.inventoryBg}> 
												
								<BootstrapTable data={manufacturerData}  selectRow={selectRowProp} pagination={true}  search={true}   >
									<TableHeaderColumn  dataSort={true}  className='columHeight'  width = '80' dataField='data'  dataFormat={imageFormatter} >Image</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true}  className='columHeight' width = '80'  dataField='name' >Name</TableHeaderColumn>
									<TableHeaderColumn  dataSort={true} className='columHeight'  width = '80'  dataField='number' >Number</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = '80'   dataField='price' >Price</TableHeaderColumn>
									<TableHeaderColumn dataSort={true}  className='columHeight' width = '80'  dataField='vendorName' >Vendor</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = '80' dataField='manufacutererName'>Manufacturer</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = '80' dataField='categoryName'>Category</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight' width = '80'  hidden={true} isKey={true} dataField='id'>Action</TableHeaderColumn>
								</BootstrapTable>
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
				
				<Modal bsSize = 'lg' show={this.state.showModal} onHide={this.close} >
         <modalBg style={style.modalBg}> <Modal.Header closeButton onClick={(e) => { this.close() }}  >
            <Modal.Title style={style.whiteText}>Product Description1</Modal.Title>
          </Modal.Header>
          <Modal.Body style={style.modalBody}>
					<modalRow className='row'>
						<inventoryModalBg className='col-xs-12 col-sm-12 col-md-8 modal-body' style = { style.inventoryModalBg}> 
						<form-col style = {[style.formCol, style.displayBlock]}>
						<FormLine style={style.inputField}>
						<FormBlock title='Product Name' titleCustomStyle = {style.modalLabel} >
						<FormInput type='text' placeholder='Product Number' disabled = 'disabled' value={modalData.name} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						<FormInput type='hidden' id = 'productId'  value={modalData.ProductId}  customStyle={style.inputField}/>
						</FormBlock>
						</FormLine>
						
						<FormLine style={style.inputField}>
						<FormBlock title='Product Number' titleCustomStyle = {style.modalLabel} >
						<FormInput type='text' placeholder='Product Name' disabled value={modalData.number} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>
						
						
						<FormLine style={style.inputField}>
						<FormBlock title='Quantity' titleCustomStyle = {style.modalLabel} >
						<FormInput type='text' placeholder='Quantity'    value={1} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>
						
						<FormLine style={style.inputField}>
						<FormBlock title='Price' titleCustomStyle = {style.modalLabel} >
						<FormInput type='text' placeholder='Price' disabled value={modalData.price} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>

						
					<modalRow1 className="row">
					<colClass className='col-xs-12 col-sm-12 col-md-3'>
					<FormLine style={style.inputNewField}>
						<FormBlock title='Manufacturer1' titleCustomStyle = {style.modalLabel} visiblityHidden={style.visiblityHidden} >
						<FormInput type='text' placeholder='Manufacturer'    value={modalData.manufacutererName} onChange={(e) => { this.setFieldValue('password', e) }} isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>
						</colClass>

						<colClass className='col-xs-12 col-sm-12 col-md-3'>
           <FormLine style={style.inputNewField} >
						<FormBlock title='Vendor' titleCustomStyle = {style.modalLabel} visiblityHidden={style.visiblityHidden} >
						<FormInput type='text' placeholder='vendorName'    value={modalData.vendorName}  isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>
						</colClass>

						<colClass className='col-xs-12 col-sm-12 col-md-3'>
          <FormLine className='col-xs-12 col-sm-12 col-md-3'  style={style.inputNewField}>
						<FormBlock title='Category' titleCustomStyle = {style.modalLabel} visiblityHidden={style.visiblityHidden}>
						<FormInput type='text' placeholder='Category'    value={modalData.categoryName}  isDisabled={form.isSubmitting} customStyle={style.modalInput}/>
						</FormBlock>
						</FormLine>
							</colClass>

         </modalRow1>
						</form-col>
					</inventoryModalBg>
					
					<productBox  className='col-md-4' style={style.productBox}> 
					
					<inputFile style={style.inputFile}>
            <fileUpload style={style.upload}>
            <img src="http://localhost/img/package.png" />
            </fileUpload>
					</inputFile>
					
					
							<pastInvoicesHeading style = {[style.pastInvoicesHeading, style.displayBlock]}>
							<headingButton style = {style.button}>
								<Button type='submit'  style = {style.btnSearch}  onClick={(e) => { this.submit(e) }}  text= 'ADD TO CART' className = 'btn btn-success'> ADD TO CART </Button>
							</headingButton>
							</pastInvoicesHeading>
					</productBox>
					</modalRow>
          </Modal.Body>
					</modalBg>
        </Modal>
				
				
				
				
      </wrapper>
    )
  }
}

PurchaseRequest.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.purchaseRequest
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(PurchaseRequest))
