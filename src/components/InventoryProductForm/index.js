// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'

// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

// components
import Form from '../Form'
import FormLine from '../FormLine'
import FormBlock from '../FormBlock'
import FormInput from '../FormInput'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardHeader from '../DashboardHeader'
import ImageComponent from '../ImageComponent'
import ChatBox from '../ChatBox'
import EditableDiv from 'react-wysiwyg-editor'
import { Label, Table, Col, Tabs, Tab, Button, Modal, ListGroup, ListGroupItem, Alert } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

// exports
export class InventoryProductForm extends Form {
	constructor(props) {
		super(props)
		this.state = {categoryStatus:'', nameStatus:'', priceStatus:'', showModal: false, deleteProductId:'', alertVisible: true}
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
			type: 'GET_PRODUCT_CATAGORIES',
			payload: {
				loginToken: session.loginTokenDetails.token
			} 
		})
		
	}
	close(e) {
		this.setState({ showModal : false, deleteProductId : '' })
	}
	setFieldValue(field, e) {
		const { dispatch} = this.props
		var value = e.target.value
		dispatch({
			type: 'SET_PRODUCT_FIELD_VALUE',
			params: {
				field: field,
				value: e.target.value
			}
		})
		e.preventDefault()
		switch (field) {
			case 'categoryId':
				this.setState({categoryStatus:this.checkEmpty(value)})
			break
			case 'name':
				this.setState({nameStatus:this.checkEmpty(value)})
			break
			case 'price':
				this.setState({priceStatus:this.checkEmpty(value)})
				this.setState({priceStatus:this.checkPrice(value)})
			break
			default:
			break
		}
	}
	checkEmpty(value) {
		let status
		if ((value == null) || (value == '')) {
		status = 'error'
		} else {
		status = 'correct'
		}

		return status
	}
	checkPrice(value) {
		let status
		var price = /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/
		if ((!value.match(price))) {
			status = 'error'
		} else { 
			status = 'correct'
		}
		
		return status
	}
	submit(e) {
		var imgArray = []
		var categoryIdArray = []
		const { form, dispatch, session } = this.props
		var self = this
		var elements = findDOMNode(this.refs.form).elements
		for (var i = 0; i < elements.length; i++) {
			if ((elements[i].type == 'hidden')) {
				imgArray.push(elements[i].value)
			}
		}
		e.preventDefault()
		if (this.state.categoryStatus == 'error' || this.state.nameStatus == 'error' || this.state.priceStatus == 'error' 
		|| (form.data.categoryId == null) || (form.data.categoryId == '')
		|| (form.data.name == null) || (form.data.name == '')
		|| (form.data.price == null) || (form.data.price == '')
		) {
			return false
		} else {
			categoryIdArray.push(form.data.categoryId)
			var submitType = 'SAVE_INVENTORY_PRODUCTS'
			var data = {
				category : categoryIdArray,
				name : form.data.name,
				description : form.data.description,
				price : form.data.price,
				imgArray : imgArray,
				loginToken: session.loginTokenDetails.token
			} 
			if (form.data.id != '') {
				submitType = 'UPDATE_INVENTORY_PRODUCTS'
				data.id = form.data.id
			}
			dispatch({
				type: submitType,
				payload: {
					data
				}
			})
			{this.resetPage(e)}
		}
	}
	
	resetPage(e) {
		const { dispatch } = this.props
		e.preventDefault()
		dispatch({
			type: 'PRODUCT_RESET'
		})
	}
	
	deleteProduct(cell, e) {
		const { dispatch, session } = this.props
		dispatch({
			type: 'DELETE_PRODUCT',
			payload: {
				id:{	
					id : cell,
					loginToken: session.loginTokenDetails.token
					}
			}	
		})
		this.close(e)
	}
	handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
	render() {
	const { form, dispatch } = this.props
	var self = this
	var products = form.productData
	var categoriesArray = form.categoriesData
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
	var categoriesList = []
    categoriesList.push(
      < option value = '' > Select categories < /option>
    )
    if (categoriesArray.length != 0) {
		categoriesArray.map(function(data) {
			categoriesList.push(
				< option value = {data.id} > {data.name} < /option>
			)
		})
    }
	
	function open(cell, e) {
		self.setState({ showModal : true, deleteProductId : cell})
	}
	
	function getProductById(cell, e) {
		dispatch({
			type: 'GET_PRODUCT_BY_ID',
			payload: {
				id:{
					id : cell,
					loginToken: session.loginTokenDetails.token
					}
			}
		})
	}
	function deleteFormatter(cell, row){
		var self = this
		return (<actionDiv><viewDiv><a href = 'javascript:void(0)' onClick={(e) => { getProductById(cell, e) }}  ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png"  /></a></viewDiv><deleteDiv> <a href = 'javascript:void(0)' onClick={(e) => { open(cell, e) }}  ><img src="http://localhost/img/deleteIcon.png"  /></a></deleteDiv></actionDiv>)
	}
	return (
		<wrapper style = {[style.wrapper, style.displayBlock]} >
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
			<headerSection style={[style.headerBox, style.displayBlock]}> 
				<headerContainer className="container" style={style.displayBlock}>
					<headerRow>
						<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
							Add Product
						</headingArea>
						<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
							<saveButtonArea style={style.saveButtonArea}>
								<Button style={style.blueButton} onClick={(e) => { this.resetPage(e) }} >+ Add New Products</Button>
							</saveButtonArea>
							<backButton style={style.saveButtonArea}>
								<Link to='' style={style.blueButton}>Back</Link>
							</backButton>
						</headerLink>
					</headerRow>
				</headerContainer>
			</headerSection>
			<topArea className="container" style={style.displayBlock}>
					{messageStyle != '' ? <ListGroup className='hideMeessage' style={style.displayBlock}>
						<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
					</ListGroup> : ''}
					
					<rowArea className="row">
						<tabArea className="col-xs-12 col-sm-8 col-md-9">
							<Tabs defaultActiveKey={1}>
								<Tab eventKey={1} title="Add New">
									<formArea>
										<formHeading style={[style.formHeading, style.displayBlock]}>New Product</formHeading> 
										<formBackground className="col-xs-12 col-md-12" style={style.inventoryBg}>
											<productLeftSection className="col-xs-12 col-md-4" style={style.mobilePadding}>
											<FormLine>
												<FormBlock title='Category' titleCustomStyle={style.titleStyle} validationStatus = {this.state.categoryStatus}>
													< select style={style.dropDownList} value={form.data.categoryId} onChange={(e) => { this.setFieldValue('categoryId', e) }}>
														{categoriesList}
													< /select>
												</FormBlock>
											</FormLine>
											<form ref='form'>
												<label style={style.titleStyle}>Add Images</label>
												<ImageComponent previouseImages = {form.data.images}/>
											</form>
											</productLeftSection>
											
											<formFields className="col-xs-12 col-sm-8 col-md-8" style={[style.formFields, style.mobilePadding]}> 
												<FormLine>
													<FormBlock title='Product Name' titleCustomStyle={style.titleStyle} validationStatus = {this.state.nameStatus}>
													<FormInput  customStyle={style.inputBox} type='text' value={form.data.name} onChange={(e) => { this.setFieldValue('name', e) }} placeholder="e.g. Philips Respironics Amara View Full Face Mask"/>
													</FormBlock>
												</FormLine>
												<FormLine>
													<FormBlock title='Product Description' titleCustomStyle={style.titleStyle}>
													<EditableDiv style={style.editorStyle} className="editor" value={form.data.description} onChange={(e) => { this.setFieldValue('description', e) }}/>
													</FormBlock>
												</FormLine>
												<priceArea className="col-xs-12 col-sm-7 col-md-8" style={[style.padding0, style.priceField]}>
													<priceInput style={style.inputGroup}>
														<FormLine>
															<FormBlock title='Price' titleCustomStyle={style.titleStyle} validationStatus = {this.state.priceStatus} labelStyle = {style.priceLabel}>
															<priceIcon className="input-group-addon" id="basic-addon1" style={[style.displayBlock, style.addonInput]}>$</priceIcon>
															<FormInput type='text' value={form.data.price} onChange={(e) => { this.setFieldValue('price', e) }} placeholder="182.92" aria-describedby="basic-addon1"  customStyle={style.addonpriceInput}/>
															</FormBlock>
														</FormLine>
													</priceInput>
												</priceArea>
												<saveButton className="col-xs-12 col-sm-5 col-md-4 pull-right" style={style.buttonTopMargin}>
													<Button type="button" onClick={(e) => { this.submit(e) }} isWorking={false} style= {style.greenBtn}>{form.isSubmitting ? 'Processing' : 'Save Products'}</Button>
												</saveButton>
											</formFields>
										</formBackground>
									</formArea>
								</Tab>
							</Tabs>
						</tabArea>
						
						<rightArea className="col-xs-12 col-sm-4 col-md-3" style={style.padding0}>  
							<rightGrayBox className="col-xs-12 col-sm-12 col-md-12" style={style.rightGrayBox}>
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
				
				<tableContainer className="container" style={style.displayBlock}>
					<tableRow className="row">
						<dataListingSection className="col-md-9">
							<formHeading style={style.formHeading}>All Products</formHeading> 
							<tableArea className="col-md-12" style={style.inventoryBackg}>
								<BootstrapTable data={products}   pagination={true} search={true}>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' isKey={true} dataField='id' hidden={true}>id</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80'  dataField='number'>Number</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='name'>Name</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='price'>Price</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='100' dataField='manufacutererName'>manufacuterer</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='80' dataField='vendorName'>Vendor</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columnBorder' width='100' dataField='categoryName'>Category</TableHeaderColumn>
									<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "80" dataFormat={deleteFormatter} dataField="id">Action</TableHeaderColumn>
								</BootstrapTable>
							</tableArea>
						</dataListingSection>
					</tableRow>
				</tableContainer>
				<Modal bsSize = 'md' show={this.state.showModal} onHide={this.close} style={style.modalBox}>
					<modalBg> <Modal.Header closeButton onClick={(e) => { this.close() }}  >
						<Modal.Title>Delete Product</Modal.Title>
						</Modal.Header>
							<Modal.Body>
								Are you sure you want to delete this product?
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={(e) => { this.deleteProduct(this.state.deleteProductId, e) }} style={style.greenBtn} >Ok</Button>
								<Button onClick={(e) => { this.close() }}>Close</Button>
							</Modal.Footer>
					</modalBg>
				</Modal>
				<ChatBox />
      </wrapper>
    )
  }
}

InventoryProductForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.productManagement
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(InventoryProductForm))
