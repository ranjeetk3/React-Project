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
import DashboardHeader from '../DashboardHeader'
import ChatBox from '../ChatBox'
import { Label,Table, Col,Button} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
var DatePicker = require('react-bootstrap-date-picker');

// exports
export class AddInventory extends Form 
{
    // Start Constructor For Variable initialisation
    constructor(props)
    {
        super(props)
        this.state = {companyNameStatus:'',countryStatus:'', streetAddressStatus:'', cityStatus:'', stateStatus:'', zipStatus:'', salesPhoneStatus:'', emailAddressStatus:'', supportPhoneStatus:'', tollFreePhoneStatus:'', faxStatus:'', websiteStatus:'', offeringStatus:'', categoryStatus:''}
    }

    // Call Method Befor render
    componentWillMount(){
        const  {dispatch} = this.props
        dispatch({
            type: 'GET_INVENTORY'
        })
        dispatch({
            type: 'GET_COMPANY_LIST'
        })
        dispatch({
            type: 'GET_PRODUCT_LIST'
        })
    }

render() 
{
    const  {form, inventory, companyList, productList} = this.props
    // Start Data Formating For Company List
    let companyListValue
	var companies = []
	if(companyList.data != null) {
        companyListValue = companyList.data
        if (companyListValue.length != 0) {
            for (var i = 0; i < companyListValue.length; i++) {
                companies.push(
                < option value = {companyListValue[i]['CompanyID']} > {companyListValue[i]['CompanyName']} < /option>)
            }
        }
	}

    // Start Data Formating For Product List
    let productListValue
    var products = []
    if(productList.data != null) {
        productListValue = productList.data
        if (productListValue.length != 0) {
            for (var i = 0; i < productListValue.length; i++) {
                products.push(
                < option value = {productListValue[i]['id']} > {productListValue[i]['productName']} < /option>)
            }
        }
    }

    // Start Variable Initialisation For DataTable
    let inventoryArray = [{
      'id': 0,
      'quantity_stock': '0',
      'quantity_order': '0',
      'quantity_hold': '0',
      'quantity_rent': '0',
      'serial_number': '0',
      'product_number': '0',
      'product_name': '0',
      'company_id': '0'
    }]
    if(inventory.data != null) {
        inventoryArray = inventory.data
    }

    // Start Funtion For Delete Package
    function deleteDataById(cell, row) {
        dispatch({
            type: 'POST_INVENTORY_VENDOR_ID',
            payload: {
                vendorId: {
                        id:cell
                          }
                }
            })
    }

    // Start Function For View Package For Updating
    function viewDataById(cell, row) {
        dispatch({
            type: 'GET_INVENTORY_VENDOR_BY_ID',
            payload: {
                vendorId: {
                id:cell
                }
            }
        })
    }

    // Start Function For Show Update And Delete Icon
    function deleteData(cell, row){
        return (<actionDiv><viewDiv  style={style.viewDiv}><a href = 'javascript:void(0)' onClick={(e) => { viewDataById(cell, row) }} ><img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/viewIcon.png'/></a></viewDiv><deleteDiv><a href = 'javascript:void(0)' onClick={(e) => { deleteDataById(cell, row) }} ><img src='https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/delete.png'/></a></deleteDiv></actionDiv>)
    }


return (<wrapper style = {[style.wrapper, style.displayBlock]} >
<DashboardHeader/>
{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
<headerSection style={[style.headerBox, style.displayBlock]}> 
<headerContainer className="container" style={style.displayBlock}>
<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
Add Inventory</headingArea>
<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
<saveButtonArea style={style.saveButtonArea}>
<Button type='submit' onClick={(e) => { this.clearForm(e) }} style={style.blueButton} >+ Add New Inventory</Button>
</saveButtonArea>
<backButton style={style.saveButtonArea}>
<Link to='/' style={style.blueButton}>Back</Link>
</backButton>
</headerLink>
</headerContainer>
</headerSection>
<topArea className='container' style={[style.displayBlock, style.paddingbox]}>
<rowArea className='row'>
<tabArea className='col-xs-12 col-sm-8 col-md-9'>
<formArea>
<formHeading style={style.formHeading}>New Vendor</formHeading> 
<formBackground className='col-md-12' style={style.inventoryBg}> 

<divColumn style  = {style.col50} > 
<FormInput type='hidden' value ='' id='id'/>
<FormLine>
<FormBlock title='Company Name' validationStatus = {this.state.companyNameStatus} titleCustomStyle={style.titleStyle}>
<select id = 'company' style={[style.dropDownList,style.inventoryInput]} value={form.data.company} onChange={(e) => { this.setFieldValue('company', e) }} >
{companies}
< /select>
</FormBlock>
</FormLine>
</divColumn>
												
<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Product' validationStatus = {this.state.streetAddressStatus} titleCustomStyle={style.titleStyle}>
<select id = 'product' style={[style.dropDownList,style.inventoryInput]} value={form.data.product} onChange={(e) => { this.setFieldValue('product', e) }} >
 {products}
< /select>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Automatic Reorder' validationStatus = {this.state.cityStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='checkbox' value = {form.data.is_automatic_reorder} id = 'is_automatic_reorder' onChange={(e) => { this.setFieldValue('is_automatic_reorder', e) }} customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='State' validationStatus = {this.state.stateStatus} titleCustomStyle={style.titleStyle}>
<select id = 'state' style={[style.dropDownList,style.inventoryInput]} value={form.data.state} onChange={(e) => { this.setFieldValue('state', e) }} >
< /select>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Zip' validationStatus = {this.state.zipStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.zip} id = 'zip' onChange={(e) => { this.setFieldValue('zip', e) }} placeholder='Zip' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Sales Phone' validationStatus = {this.state.salesPhoneStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.salesPhone} id = 'salesPhone' onChange={(e) => { this.setFieldValue('salesPhone', e) }} placeholder='Sales Phone' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>
												
<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Support Phone' validationStatus = {this.state.supportPhoneStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.supportPhone} id = 'supportPhone' onChange={(e) => { this.setFieldValue('supportPhone', e) }} placeholder='Support Phone' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Toll Free Phone' validationStatus = {this.state.tollFreePhoneStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.tollFreePhone} id = 'tollFreePhone' onChange={(e) => { this.setFieldValue('tollFreePhone', e) }} placeholder='Toll Free Phone' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Fax' validationStatus = {this.state.faxStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.fax} id = 'fax' onChange={(e) => { this.setFieldValue('fax', e) }} placeholder='Fax' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Email Address' validationStatus = {this.state.emailAddressStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.emailAddress} id = 'emailAddress' onChange={(e) => { this.setFieldValue('emailAddress', e) }} placeholder='Email Address' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Website' validationStatus = {this.state.websiteStatus} titleCustomStyle={style.titleStyle}>
<FormInput type='text' value = {form.data.website} id = 'website' onChange={(e) => { this.setFieldValue('website', e) }} placeholder='Website' customStyle={style.inventoryInput}/>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Offering' validationStatus = {this.state.offeringStatus} titleCustomStyle={style.titleStyle}>
< select id = 'offering' style={[style.dropDownList,style.inventoryInput]} value={form.data.offering} onChange={(e) => { this.setFieldValue('offering', e) }} >
</select>
</FormBlock>
</FormLine>
</divColumn>

<divColumn style  = {style.col50} >
<FormLine>
<FormBlock title='Category' validationStatus = {this.state.categoryStatus} titleCustomStyle={style.titleStyle}>
< select id = 'category' style={[style.dropDownList,style.inventoryInput]} value={form.data.category} onChange={(e) => { this.setFieldValue('category', e) }} >
</select>
</FormBlock>
</FormLine>
</divColumn>

<clr style={style.clr}></clr>

<btn-confirm style = {[style.confirm, style.displayBlock]}>
{form.data.id != null ? <Button type='submit' onClick={(e) => { this.update(e) }} className = 'btn btn-success' style= {style.btnSave} >UPDATE</Button>
: <Button type='submit' onClick={(e) => { this.submit(e) }} className = 'btn btn-success' style= {style.btnSave} >SUBMIT</Button>
}	
</btn-confirm>

<clr style={style.clr}></clr>
</formBackground>
</formArea>
</tabArea>
<rightArea className="col-xs-12 col-sm-4 col-md-3" style={style.padding0}>  
<rightGrayBox className="col-xs-12 col-sm-12 col-md-12" style={[style.rightGrayBox, style.paddingbox]}>
<grayHeading style={style.grayHeading}>
<icon style={style.icon}> </icon>
<grayHeadingText style={style.displayBlock}>Tips for asking questions </grayHeadingText>
<grayContent style={style.grayContent}>Every question you ask should help you gather either facts or an opinion. Know which kind of information you need and frame your questions accordingly.</grayContent>
</grayHeading>

<grayDivider style={[style.grayDivider, style.displayBlock]}> </grayDivider>
<grayHeading style={style.grayHeading}>
<icon style={style.icon}> </icon>
<grayHeadingText style={style.displayBlock}>Search & Research </grayHeadingText>
<grayContent style={[style.grayContent, style.bottomMargin]}>
Even if you don't find a useful answer elsewhere on the site, including links to related questions that haven't helped can help others in understanding how your question is different from the rest.</grayContent>
</grayHeading>
<contactSupport style={[style.contactSupport, style.displayBlock]}> Still need help? Contact Support </contactSupport>
</rightGrayBox>
</rightArea>
</rowArea>
</topArea>

<tableContainer className='container' style = {style.displayBlock}>
<tableRow className='row'>
<dataListingSection className='col-xs-12 col-sm-12 col-md-12'>
<formHeading style={style.formHeading}>All Vendors</formHeading>
<tableResponsive className='table-responsive'>
<tableArea className='col-md-12' style={[style.inventoryTableBg, style.padding0]}>
   
<BootstrapTable data={inventoryArray}   pagination={true} search={true} >
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' isKey={true} dataField='id' hidden = {true}>id</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='product_number'>Product Number</TableHeaderColumn>
    
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='product_name'>Product Name</TableHeaderColumn>
    
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='serial_number'>Serial No</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_stock'>Quantity in Stock</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_order'>Quantity on Order</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_hold'>Quantity on Hold</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_rent'>Quantity on Rent</TableHeaderColumn>
<TableHeaderColumn   dataSort={true} className='columHeight columBorder' width = "80" dataField="id" dataFormat={deleteData}>Action</TableHeaderColumn></BootstrapTable>
</tableArea>
</tableResponsive>
</dataListingSection>
</tableRow>
</tableContainer>
<ChatBox/>
</wrapper>
    )
  }
}

AddInventory.propTypes = {
}

function mapStateToProps(state) 
{
    return{
        session: state.session,
        inventory: state.getInventory,
		form :state.addInventory,
        companyList :state.getCompaniesList,
        productList :state.getProductList
	}
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(AddInventory))
