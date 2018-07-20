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
import { Label, Table, Col, Tabs, Tab, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
var DatePicker = require('react-bootstrap-date-picker');
var obj = this
var productIdValue = null
var productNameValue = null
var vendor = null
var manufacture = null
var address = null
// exports
export class Inventory extends Form 
{
    constructor(props) 
    {
        super(props)
		const {inventory} = this.props
        this.state = {inventoryStatus: null, inventoryCondition: null, depreciation :null, manufactureData :null, vendorData : null,manufactureDataProduct :null, vendorDataProduct : null, vendorValue : null,addressData :null, categoryDataProduct:null, product_id :null, product_name: null , statusData :null, productName : null, productNumber : null, price:'0.0', manufactureName:null,vendorName : null, image : 'http://localhost/img/noimage.jpg', productId :null,parMin: null, parMax: null, autoRender: 0, productDescription: null, generic : inventory.inventoryData.generic, dropship : inventory.inventoryData.dropship, render : inventory.inventoryData.render, serialized : inventory.inventoryData.serialized, rented : inventory.inventoryData.rented}
        this.setFieldValue = this.setFieldValue.bind(this)
    }

// Start for autocomplete select box manufactureList
static manufacturerChange(val) {
    const {inventory} = obj.props
    obj.setState({ manufactureData: val.value})
    productNameValue = inventory.searchData.product_name
    productIdValue = inventory.searchData.product_id
    vendor = obj.state.vendorData
    address = obj.state.addressData
    status = obj.state.statusData
    {obj.searchFunction(productIdValue, productNameValue, val.value, vendor, address, status)}
}

// Start for autocomplete select box VendorLis
static vendorChange(val) {
    const {inventory} = obj.props
    obj.setState({ vendorData: val.value})
    productNameValue = inventory.searchData.product_name
    productIdValue = inventory.searchData.product_id
    manufacture = obj.state.manufactureData
    address = obj.state.addressData
    status = obj.state.statusData
    {obj.searchFunction(productIdValue, productNameValue, manufacture, val.value, address, status)}
}

// Start for autocomplete select box addressList
static addressChange(val) {
    const {inventory} = obj.props
    obj.setState({ addressData: val.value})
    productNameValue = inventory.searchData.product_name
    productIdValue = inventory.searchData.product_id
    manufacture = obj.state.manufactureData
    vendor = obj.state.vendorData
    status = obj.state.statusData
    {obj.searchFunction(productIdValue, productNameValue, manufacture, vendor, val.value, status)}
}

// Start for autocomplete select box status
static statusChange(val) {
    const {inventory} = obj.props
    obj.setState({ statusData: val.value})
    productNameValue = inventory.searchData.product_name
    productIdValue = inventory.searchData.product_id
    manufacture = obj.state.manufactureData
    vendor = obj.state.vendorData
    address = obj.state.addressData
    {obj.searchFunction(productIdValue, productNameValue, manufacture, vendor, address, val.value)}
}

// Search function 
searchFunction(productIdValue, productNameValue, manufactureData, VendorData, address, status){
    const {inventory, dispatch  } = this.props
    dispatch({
            type: 'GET_INVENTORY_LIST',
            payload: {
                    inventorySearchData: {
                        product_id: productIdValue,
                        product_name: productNameValue,
                        manufacture : manufactureData,
                        vendor : VendorData,
                        address : address,
                        status : status
                    }
            }
    }) 
}

// Search function  For product List
searchProduct(categoryValue){
   const {inventory, dispatch  } = this.props
   dispatch({
            type: 'GET_PRODUCT_LIST',
            payload: {
				productSearchData: {
					category_id: categoryValue
				}
            }
    }) 
}

// Start Function 2nd tab Add Inventory Items
// Start Function For Filter product List By Manufacturer
static manufacturerProductChange(val) {
    const {inventory} = obj.props
    obj.setState({ manufactureDataProduct: val.value})
}

// Start Function For Filter product List By Vendor
static vendorProductChange(val) {
    const {inventory} = obj.props
    obj.setState({ vendorDataProduct: val.value})
}

// Start Function For Filter product List By Manufacturer
static categoryProductChange(val) {
    const {inventory} = obj.props
    obj.setState({ categoryDataProduct: val.value})
    {obj.searchProduct(val.value)}
}
// Start for autocomplete select box depreciation
static inventoryDepreciationChange(val) {
    const {inventory} = obj.props
    obj.setState({ depreciation: val.value})
}
// Start for autocomplete select box inventory status
static inventoryStatusChange(val) {
	const {inventory} = obj.props
    obj.setState({ inventoryStatus: val.value})
}

// Start for autocomplete select box inventory condition
static inventoryConditionChange(val) {
	const {inventory} = obj.props
    obj.setState({ inventoryCondition: val.value})
}


//Start Function For Component will mount   
componentWillMount(){
	const  {dispatch, session} = this.props
	
	dispatch({
		type: 'GET_PRODUCT_STARTED'
    })
	
    dispatch({
		type: 'GET_PRODUCT',
			payload: {
				loginToken: session.loginTokenDetails.token
			}
    })
  		
	dispatch({
		type: 'GET_PRODUCT_BY_CATAGORIES',
		payload: {
		loginToken: session.loginTokenDetails.token
		}
    })

	dispatch({
		type: 'GET_INVENTORY',
		payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
	
	dispatch({
		type: 'GET_COMPANY_ADDRESS_LIST',
		payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
	
	
	/*dispatch({
		type: 'GET_MANUFACTURER',
		payload: {
			loginToken: session.loginTokenDetails.token
		}
    })*/
	
	
    /*dispatch({
      type: 'GET_INVENTORY_VENDORS',
	  payload: {
			loginToken: session.loginTokenDetails.token
		}
    })*/

}

// Start Function for set field value
setFieldValue(field, e) {
        const {inventory, dispatch  } = this.props
        var value = e.target.value
        dispatch({
            type: 'SET_INVENTORY_FORM_FIELD_VALUE',
            params: {
                field: field,
                value: value
            }
        })
    switch (field) {
      case 'product_id':
        productIdValue = value
        productNameValue = inventory.searchData.product_name
        break
      case 'product_name':
        productIdValue = inventory.searchData.product_id
        productNameValue = value
        break
    }
    {obj.searchFunction(productIdValue, productNameValue, obj.state.manufactureData, obj.state.vendorData, obj.state.addressData)}  
}

// Start Funtion For Set Value Filed And Validation 
setFieldValueForAddInventory(field, e) {
    const {inventory, dispatch  } = this.props
        var value = e.target.value
        dispatch({
            type: 'SET_INVENTORY_DATA_FORM_FIELD_VALUE',
            params: {
                field: field,
                value: value
            }
        })
    e.preventDefault()
}

// Start Function For Save Package Details 
submit(e) {
var self = this
e.preventDefault()
var itemDetails = []
const { inventory, dispatch, session} = this.props
    dispatch({
        type: 'ADD_INVENTORY',
        payload: {
            addInventoryDetails: {
             par_min: inventory.inventoryData.parMin,
             par_max: inventory.inventoryData.parMax,
             auto_reorder_quantity: inventory.inventoryData.autoRender,
             is_generic: this.state.generic,
             is_allowed_dropship_to_patient: this.state.dropship,
             is_automatic_reorder: this.state.render,
             is_serialized: this.state.serialized,
             is_rented: this.state.rented,
             product_id : obj.state.productId,
			 status : this.state.inventoryStatus,
			 depreciation : this.state.depreciation,
			 condition :  this.state.inventoryCondition,
			 loginToken : session.loginTokenDetails.token
			}
        }
    })
}

// Start Function For row selection
onRowSelect(row, isSelected, e) {
  obj.setState({productName : row.name, productNumber :row.number, manufactureName: row.manufacturer, productDescription:row.description, vendorName: row.vendor, price: row.price, productId:row.id})
 
}

// Start Function Render
render() 
{
	obj = this

	//Start For Inventory List Validation
	const  {inventory, manufacturer, vendor, warehouseAddress, product, productCategory} = this.props
    let inventoryArray = []
    if(inventory.data != null) {
        inventoryArray = inventory.data
    }else{
        inventoryArray = [{
        'id': 0,
        'quantity_stock': '0',
        'quantity_order': '0',
        'quantity_hold': '0',
        'quantity_rent': '0',
        'serial_number': '0',
        'number': '0',
        'name': '0',
        'company_id': '0'
        }]
    }    

	// Start For Product List
	var productArray = []
	if(product.data != null) {
	   productArray = product.data
	}

	// Start For Get Address List
	const address = [{value : null, label: 'Please Select'},{label:'Available',value:'available'},{label:'Rented',value:'rented'}]
    
	// Start For Get condition List
	const conditionList = [{value : null, label: 'Please Select'},{label:'New',value:'new'},{label:'Great',value:'great'},{label:'Good',value:'good'}]
    
	// Start For Get depreciation List
	const depreciationList = [{value : null, label: 'Please Select'},{label:'MACRS',value:'MACRS'},{label:'Double Declining Balance',value:'Double Declining Balance'}]
    
	// Start For Get Manufacture List
	var manufactureList = [{value : null, label: 'Please Select'}]
	var dataList 
	var maufacturerData = manufacturer.manufacturerData
	if (maufacturerData != null) {
		if (maufacturerData.length != 0) {
			for (var i = 0; i < maufacturerData.length; i++) {
			   dataList = {value : maufacturerData[i]['id'], label : maufacturerData[i]['companyName']}
			   manufactureList.push(dataList)
			}
		}  
	}

	// Start For Get Vendor List
	var vendorList = [{value : null, label: 'Please Select'}]
	var dataListVendor 
	var vendorData = vendor.data
	if(vendorData != null){
		if (vendorData.length != 0) {
			for (var i = 0; i < vendorData.length; i++) {
			   dataListVendor = {value : vendorData[i]['id'], label : vendorData[i]['company_name']}
			   vendorList.push(dataListVendor)
			}
		} 
	}

	// Start For Get Company Address List
	var companyAddressList = [{value : null, label: 'Please Select'}]
	var dataListAddress 
	var companyAddressData = warehouseAddress.data
	if(companyAddressData != null){
		if (companyAddressData.length != 0) {
			for (var i = 0; i < companyAddressData.length; i++) {
			   dataListAddress = {value : companyAddressData[i]['companyID'], label : companyAddressData[i]['address']}
			   companyAddressList.push(dataListAddress)
			}
		} 
	}

    // Start For Get Category List
    var categoryList = [{value : null, label: 'Please Select'}]
    var categoryDataList 
    var categoryData = productCategory.data
    if (categoryData != null) {
        if (categoryData.length != 0) {
            for (var i = 0; i < categoryData.length; i++) {
               categoryDataList = {value : categoryData[i]['id'], label : categoryData[i]['name']}
               categoryList.push(categoryDataList)
            }
        }  
    }

	// Start function for add product image
	function imageFormatter(cell, row){
		if(cell !== null && cell != 'undefined') {
			var source = "data:image/png;base64,"+cell
		}else{
			var source = 'http://localhost/img/noimage.jpg'
		}
		return (<productDiv style = {style.size}> <img src = {source} style = {style.size}  /></productDiv>)
	}

	// Start function for price fromat
	function priceFormatter(cell, row) {
	  return (<usdDoller><i className='glyphicon glyphicon-usd'></i>{cell}</usdDoller>)
	}

	// Start For row seletion
	var selectRowProp = {
	  mode: 'radio',
	  bgColor: 'DeepSkyBlue', 
	  onSelect: obj.onRowSelect,
	  hideSelectColumn: true, 
	  clickToSelect: true 
	}

// Return Function Start
return (
<wrapper style = {[style.wrapper, style.displayBlock]}>
	<DashboardHeader/>
	<headerSection style={[style.headerBox, style.displayBlock]}> 
	<headerContainer className="container" style={style.displayBlock}>
	<headerRow>
	<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
    Inventory Manager
	</headingArea>
	<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
        <backButton style={style.saveButtonArea}>
        <Link to='/inventory' style={style.blueButton}>Back</Link>
        </backButton>
	</headerLink>
						
	</headerRow>
	</headerContainer>
	</headerSection>
	
	
  <topArea className="container" style={style.displayBlock}>
  <rowArea className="row">
  <tabArea className="col-sm-8 col-md-9 mobilepadding">
  
    <Tabs defaultActiveKey={1} id="location">
    <Tab eventKey={1} title='Item List'>
	
        <inventoryBoxList className='row' style={style.mMargin}>
        <inventoryBlock className='col-xs-12 col-sm-12 col-md-9' style ={[style.addProducts, style.padding0]}> 
        <inventoryHeading style={[style.locationH1, style.padding0]}> Location</inventoryHeading>
        <addressBox style={style.selectSectionmain}> 
        <Select 
		placeholder = 'Location'
        style={style.productSelect}
        name = 'address'
        options = {companyAddressList} 
        value = {this.state.addressData}
        onChange = {Inventory.addressChange} />
        </addressBox>


        <inventoryTable style={[style.tableResponsive]}>
        <BootstrapTable data={inventoryArray}   pagination={true} >
        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' isKey={true} dataField='id' hidden = {true}>id</TableHeaderColumn>

        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='img' dataFormat={imageFormatter} >Image</TableHeaderColumn>

        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='name'>Name</TableHeaderColumn>

        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='number'>No</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_stock'>Stock</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_order'>Order</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_hold'>Hold</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='quantity_rent'>Rent</TableHeaderColumn>

        </BootstrapTable>
        </inventoryTable>
        </inventoryBlock>

        <searchBlock style={style.searchFilter}>  
        <serachHeading style={[style.searchfilterh1, style.padding0]} > Search Filter</serachHeading> 

        <searchBlockField className='col-xs-12 col-sm-12 col-md-12' style={style.inputNewField}>
        <FormLine>
        <FormBlock title='Product Number' titleCustomStyle={style.fillterInputLabel} visiblityHidden={style.visiblityHidden}>
        <FormInput name='product_id' customStyle={style.fillterInput} type='text' value= {inventory.searchData.product_id} onChange={(e) => { obj.setFieldValue('product_id', e) }}  placeholder="Product Number"/>
        </FormBlock>
        </FormLine>
        </searchBlockField>

        <searchBlockField className='col-xs-12 col-sm-12 col-md-12' style={style.inputNewField}>
        <FormLine>
        <FormBlock title='Product Name' titleCustomStyle={style.fillterInputLabel} visiblityHidden={style.visiblityHidden}>
        <FormInput name='product_name' customStyle={style.fillterInput} type='text' value= {inventory.searchData.product_name} onChange={(e) => { obj.setFieldValue('product_name', e) }} placeholder="Product Name"/>
        </FormBlock>
        </FormLine>
        </searchBlockField>

        <searchBlockField className='col-xs-12 col-sm-12 col-md-12' style={style.inputNewField}>
        <FormLine>
        <FormBlock title='Manufacture'  titleCustomStyle={style.fillterInputLabel} visiblityHidden={style.visiblityHidden}>
        <Select 
		placeholder = 'Manufacture'
        name = 'manufacture'
        options = {manufactureList} 
        value = {this.state.manufactureData}
        onChange = {Inventory.manufacturerChange} />
        </FormBlock>
        </FormLine>
        </searchBlockField>

        <searchBlockField className='col-xs-12 col-sm-12 col-md-12' style={style.inputNewField}>
        <FormLine>
        <FormBlock title='Vendor'  titleCustomStyle={style.fillterInputLabel} visiblityHidden={style.visiblityHidden}>
        <Select
		placeholder = 'Vendor'
        name='vendor'
        options={vendorList}
        value = {this.state.vendorData}
        onChange={Inventory.vendorChange}
        />
        </FormBlock>
        </FormLine>
        </searchBlockField>

        <searchBlockField className='col-xs-12 col-sm-12 col-md-12' style={style.inputNewField}>
        <FormLine>
        <FormBlock title='Status'  titleCustomStyle={style.fillterInputLabel} visiblityHidden={style.visiblityHidden}>
        <Select
		placeholder = 'Status'
        name='status'
        value = {this.state.statusData}
        options={address}
        onChange={Inventory.statusChange}
        />
        </FormBlock>
        </FormLine>
        </searchBlockField>


        </searchBlock>
        </inventoryBoxList>
</Tab>
    
<Tab eventKey={2} title="Inventory Item">
   
<inventoryBoxList className='row' style={style.mMargin}>
<inventoryBlock className='col-xs-12 col-sm-12 col-md-12' style ={[style.addProducts, style.padding0]}> 
<inventoryHeading style={[style.inventoryH1, style.padding0]}> Select Product To Add</inventoryHeading>

<row className='row'> <searchBlockField style={style.selectSection1}>
<searchBox style = {style.selectBox}>
<Select 
placeholder = 'Manufacturer'
name = 'manufactureDataProduct'
options = {manufactureList} 
value = {this.state.manufactureDataProduct}
onChange = {Inventory.manufacturerProductChange} />
</searchBox>

<searchBox style = {style.selectBox}>
<Select 
placeholder = 'Vendor'
name = 'vendorDataProduct'
options = {vendorList} 
value = {this.state.vendorDataProduct}
onChange = {Inventory.vendorProductChange} />
</searchBox>

<searchBox style = {style.selectBox}>
<Select 
placeholder = 'Category'
name = 'categoryName'
options = {categoryList} 
value = {this.state.categoryDataProduct}
onChange = {Inventory.categoryProductChange} />
</searchBox>
</searchBlockField>
</row>

<inventoryTable style={[style.tableResponsive]}>
<BootstrapTable data={productArray}   pagination={true} search={true} selectRow={ selectRowProp }>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' isKey={true} dataField='id' hidden = {true}>id</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='number' >Product No.</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='name'>Product Name</TableHeaderColumn>
<TableHeaderColumn hidden= {true} dataSort={true} className='columHeight columnBorder'  width = '100' dataField='description'></TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='manufacturer'>Manufacturer</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='vendor'>Vendor</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='category'>Category</TableHeaderColumn>
<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='price'  dataFormat={ priceFormatter }>Price</TableHeaderColumn>

</BootstrapTable>
</inventoryTable>
</inventoryBlock>
</inventoryBoxList>
 
<productDetail className='col-xs-12 col-sm-12 col-md-7' style={style.productDetail}>
<productDetailHeading style={style.productDetailh1}>Product Detail </productDetailHeading>
<productDetailBorder className='col-xs-12 col-sm-12 col-md-7'>
<field>
<prductField style={style.productDetaillabel}>  
Package Name
</prductField>
 <inputField style={style.inputField}> 
 {obj.state.productName}
 </inputField>
</field>

<field>
<prductField style={style.productDetaillabel}>  
Product Code
</prductField>

 <inputField style={style.inputField}> 
   {obj.state.productNumber}
 </inputField>
</field>

<field>
<prductField style={style.productDetaillabel}>  
Package Description
</prductField>

 <inputField style={style.inputField}> 
  {obj.state.productDescription}
 </inputField>
</field>
 </productDetailBorder>

<packageBox className='col-md-5'> 
<inputFile style={style.inputFile}>
            <upload style={style.upload}>
            <img src={obj.state.image} style={style.imageSize} />
            </upload>
          </inputFile> </packageBox>
          <clear style={style.clear}>  </clear>
          
          
         <rowClass className='row'>
         <colClass className='col-md-12' style={style.padding0}>
        <bottomInput className='col-xs-12 col-sm-12 col-md-4'>  
          <productDetaillabel style={style.productDetaillabel}>  
           Manufacturer
        </productDetaillabel>
        <inputField style={style.inputField}> 
        {obj.state.manufactureName}
        </inputField> 
        </bottomInput> 
        
         <bottomInput className='col-xs-12 col-sm-12 col-md-4'>  
          <productDetaillabel style={style.productDetaillabel}>  
           Vendor
        </productDetaillabel>
        <inputField style={style.inputField}> 
        {obj.state.vendorName}
        </inputField> 
        </bottomInput>  
        
        <bottomInput className='col-xs-12 col-sm-12 col-md-4'>  
        <productDetaillabel style={style.productDetaillabel}>  
        Price
        </productDetaillabel>
        <inputField style={style.inputField}> 
        $ {obj.state.price}
        </inputField> 
        </bottomInput>
  </colClass>
  </rowClass>
        
        </productDetail>

<inventoryDetail style={style.inventoryDetail}>

<inventoryDetailHeading style={style.inventoryDetailh1}> Inventory Detail </inventoryDetailHeading>

<inventoryBlock className='col-md-6'>
<inputField style={style.inputField}>
<FormLine>
<FormInput  customStyle={style.inputBox} type='text'  placeholder='PAR Min' value= {inventory.inventoryData.parMin} onChange={(e) => { this.setFieldValueForAddInventory('parMin', e) }}/>
</FormLine>
</inputField>

<inputField style={style.inputField}>
<FormLine>
<FormInput  customStyle={style.inputBox} type='text' placeholder='PAR Max' value= {inventory.inventoryData.parMax} onChange={(e) => { this.setFieldValueForAddInventory('parMax', e) }}/>
</FormLine>
</inputField>

<inputField style={style.inputField}>
<FormLine>
<FormInput  customStyle={style.inputBox} type='text'  placeholder="Auto Re-order Qty" value= {inventory.inventoryData.autoRender} onChange={(e) => { this.setFieldValueForAddInventory('autoRender', e) }}/>
</FormLine>
</inputField>

<inputField style={style.inputField}>
<FormLine>
<Select 
        placeholder = 'Depreciation'
        name='depreciationType'
        value = {this.state.depreciation}
        options={depreciationList}
        onChange={Inventory.inventoryDepreciationChange} 
/>
</FormLine>
</inputField>


<inputField style={[style.inputField, style.margin0]}>
<FormLine>
<Select 
        placeholder = 'Status'
        name='inventoryStatus'
        value = {this.state.inventoryStatus}
        options={address}
        onChange={Inventory.inventoryStatusChange}
/>
</FormLine>
</inputField>


<inputField className='col-xs-12 visible-xs' style={[style.inputField, style.searchPadding]}>
<FormLine>
<Select
        placeholder = 'Condition'
        name='inventoryCondition'
        value = {this.state.inventoryCondition}
        options={conditionList}
        onChange={Inventory.inventoryConditionChange}
/>
</FormLine>
</inputField>




</inventoryBlock>

<inventoryCheckbox className='col-md-6' style={style.padding0}> 
<checkBlock style={style.checkboxDiv}> 
<checkBox style={style.checkbox} className='check'>
<input type='checkbox' customStyle={style.inputCheckBox} value={this.state.generic} onChange={(e) => this.setState({generic:!this.state.generic})}/>
</checkBox>
Generic
</checkBlock>
</inventoryCheckbox>

<inventoryCheckbox className='col-md-6' style={style.padding0}> 
<checkBlock style={style.checkboxDiv}> 
<checkBox style={style.checkbox} className='check'>
<input type='checkbox' customStyle={style.inputCheckBox} value={this.state.dropship} onChange={(e) => this.setState({dropship:!this.state.dropship})}/>
</checkBox>
 Dropship to Patient
</checkBlock>
</inventoryCheckbox>

<inventoryCheckbox className='col-md-6' style={style.padding0}> 
<checkBlock style={style.checkboxDiv}> 
<checkBox style={style.checkbox} className='check'>
<input type='checkbox' customStyle={style.inputCheckBox} value={this.state.render} onChange={(e) => this.setState({render:!this.state.render})}/>
</checkBox>
 Auto-reorder
</checkBlock>
</inventoryCheckbox>

<inventoryCheckbox className='col-md-6' style={style.padding0}> 
<checkBlock style={style.checkboxDiv}> 
<checkBox style={style.checkbox} className='check'>
<input type='checkbox' customStyle={style.inputCheckBox} value={this.state.serialized} onChange={(e) => this.setState({serialized:!this.state.serialized})}/>
</checkBox>
Serialized Item
</checkBlock>
</inventoryCheckbox>

<inventoryCheckbox className='col-md-6' style={style.padding0}> 
<checkBlock style={style.checkboxDiv}> 
<checkBox style={style.checkbox} className='check'>
<input type='checkbox' customStyle={style.inputCheckBox} value={this.state.rented} onChange={(e) => this.setState({rented:!this.state.rented})}/>
</checkBox>
 Rented Out
</checkBlock>

<inputField className='hidden-xs' style={style.inputFieldSearch}>
<FormLine>
<Select
        placeholder = 'Condition'
        name='inventoryCondition'
        value = {this.state.inventoryCondition}
        options={conditionList}
        onChange={Inventory.inventoryConditionChange}
/>
</FormLine>
</inputField>
</inventoryCheckbox>


<headingButton style={style.saveProducts} className='col-xs-12 col-sm-12 col-md-12'> 
<button style={[style.greenBtn, style.btnSave1]} value="Add Inventory" type="button" onClick={(e) => { this.submit(e) }} isWorking={false} text={inventory.isSubmitting ? 'Submitting' : 'Submit'} >Add Inventory</button> 
</headingButton>  

 

</inventoryDetail>
 

    
</Tab>	 
		 
  </Tabs>
  </tabArea>

<rightArea className="col-xs-12 col-sm-4 col-md-3" style={[style.mTopMargin, style.mpadding]}>  
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
<ChatBox />
</wrapper>
)//Return Close
  }// Render Method Close
}// Class Close

Inventory.propTypes = {
}

function mapStateToProps(state) 
{
    return{
        session: state.session,
        inventory: state.getInventory,
        manufacturer: state.manufacturer,
        vendor: state.getInventoryVendors,
        warehouseAddress: state.getCompaniesAddress,
        productCategory: state.getProductByCategories,
		product: state.getProduct
        
    }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(Inventory))
