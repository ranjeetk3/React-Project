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
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

// components
import Form from '../Form'
import FormLine from '../FormLine'
import FormBlock from '../FormBlock'
import FormInput from '../FormInput'
import FormTextarea from '../FormTextarea'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardHeader from '../DashboardHeader'
import { Label, Table, Col, Tabs, Tab, Button } from 'react-bootstrap'
import EditableDiv from 'react-wysiwyg-editor'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

var productJsonArray = []
var previousItemArray = []
var flag = 0
var currentSelectedArray = []
var productFormatingArray = []
var currentObj = this
// exports
export class UpdatePackage extends Form {
  constructor(props) {
	  
    super(props)
	const {packageItems} = this.props
    this.state={nameStatus:'', productCodeStatus:'', descriptionStatus:'', itemArray: packageItems.packageItem, totalPrice:packageItems.packageData.price, name:'', product_code:'', description:'', price:'' , product_details:'', checkbox: true}
	previousItemArray = packageItems.packageItem

}

// Start Function For Change package image
_handleImageChange(field, e) {
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

// Start will mount Method
componentWillMount(){
  const  {dispatch, session} = this.props
    dispatch({
      type: 'GET_PRODUCT',
	  payload: {
			loginToken: session.loginTokenDetails.token
		}
    })
}

// Start Funtion For Add Text Box in Table column for quantity
addTextBoxQuantity(cell, row){
	if(cell == undefined){
	return (<actionDivQuantity><textDivQuantity><input style={style.quantityBox} type='text'  defaultValue='1' ref= 'qnt' onChange= {(e) => UpdatePackage.updateCellValue(cell, row, e)} /></textDivQuantity></actionDivQuantity>)}else{
	return (<actionDivQuantity><textDivQuantity><input style={style.quantityBox} type='text'  defaultValue={cell} ref= 'qnt' onChange= {(e) => UpdatePackage.updateCellValue(cell, row, e)} /></textDivQuantity></actionDivQuantity>)
	}
	
}
// Start Funtion For Add Text Box in Table column for price
addTextBoxPrice(cell, row){
	return (<actionDivPrice><textDivPrice><input style={style.quantityBox} type='text'  defaultValue= {cell} ref= 'rs' /></textDivPrice></actionDivPrice>)
}

onSelectAll(isSelected){}
 
// Start Function For checkbox unchecked
static unchecked(){
	var elements = document.getElementsByTagName('input')
	for(var i=0; i<elements.length; i++) {
	var input = elements[i] 
	input.checked = false;
	}
}

//Start Function For Upadate Cell value
static updateCellValue(cell, row, e) {
    var total = 0
    var productFormElement = findDOMNode(currentObj.refs.productForm).elements
            for (var i = 0; i < productFormElement.length; i=i+2) {
                    var qnt = productFormElement[i].value
                    var rs = productFormElement[++i].value
                    total = total + (qnt * rs) 
            }

    currentObj.setState({totalPrice : total})
}


// Start Function For delete table row
deleteTableRow(cell, row, obj){

    var removeArrayItem = []
    productJsonArray = []
    previousItemArray = []
    currentSelectedArray = []
    //Calculate Price and quantity
    var total = 0
    var productFormElement = findDOMNode(currentObj.refs.productForm).elements

    for (var i = 0; i < productFormElement.length; i++) {
            var qnt = productFormElement[i].value
            var rs = productFormElement[++i].value
            var id = productFormElement[++i].value
            if(row.id != id){
                    total = total + (qnt * rs) 
            }
    }

    // Remove row from Array
    currentObj.state.itemArray.map(function (data) {
            if(data.id != row.id){
                    removeArrayItem.push(data)
            }
    })

    productJsonArray = Object.assign(productJsonArray, removeArrayItem)
    previousItemArray = Object.assign(previousItemArray, removeArrayItem)

    if(removeArrayItem.length == 0){
            total = 0.0
            productJsonArray = []
            previousItemArray = []
            currentSelectedArray = []
    }
    currentObj.setState({itemArray : removeArrayItem, totalPrice : total})
}

// Start Funtion For Set Value Filed And Validation 
setFieldValue(field, e) {
	
    const { dispatch } = this.props
    var value = e.target.value
    dispatch({
        type: 'SET_UPDATE_PACKAGE_FIELD_VALUE',
        params: {
			field: field,
			value: value
        }
    })
    e.preventDefault()
		
		
switch (field) {
        case 'name':
                this.setState({nameStatus:this.checkEmpty(value)})
                break
        case 'product_code':
                this.setState({productCodeStatus:this.checkEmpty(value)})			
                break
        case 'description':
                this.setState({descriptionStatus:this.checkEmpty(value)})
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

// Start Funtion For Add Delete Icon in Table rows
	deleteIconAdd(cell, row){
		return (<actionDiv><deleteDiv> <a href = 'javaScript:void(0)' onClick= {(e) => {currentObj.deleteTableRow(cell, row, this)}} ><img src="http://localhost/img/deleteIcon.png"  /></a></deleteDiv></actionDiv>)
}  

// Start function for update package details
	updatePackageFunction(e){
		var self = this
		e.preventDefault()
		const { packageItems, dispatch, session } = this.props
		dispatch({
			type: 'UPDATE_PACKAGE',
			payload: {
				updatePackageDetails: {
					id: packageItems.packageData.id,
					product_code: packageItems.packageData.product_code,
					name: packageItems.packageData.name,
					description: packageItems.packageData.description,
					price: self.state.totalPrice,
					picture:self.state.imagePreviewUrl,
					loginToken: session.loginTokenDetails.token
				}
			}
		})
		alert("Package Update Successfully......!")
		
	}

// Start function For Add Row Dynamic
addRow(){
    UpdatePackage.unchecked() 
    if(flag != 0 && currentSelectedArray.length != 0 ){
            var total = 0
            previousItemArray = productJsonArray
            var productFormElement = findDOMNode(this.refs.productForm).elements
            for (var i = 0; i < productFormElement.length; i=i+2) {
                    var qnt = productFormElement[i].value
                    var rs = productFormElement[++i].value
                    total = total + (qnt * rs) 
            }
    currentSelectedArray.map(function (data) {
                    var currentPrice = data.price
            var currentQnt = 1
            total = total + (currentQnt * currentPrice)
    })
	this.setState({totalPrice : total, itemArray:previousItemArray})
            productJsonArray = []
            currentSelectedArray = []

    }else{
            alert("Please select package Item OR Item is already added!");
    }
    flag = 0;
}

// Start Function For Update Package Items 
	updatePackageItems(e) {
		var self = this
		e.preventDefault()
		var itemDetails = []

		// Start For Data Formating Package Item
		var productFormElement = findDOMNode(this.refs.productForm).elements
			for (var i = 0; i < productFormElement.length; i++) {
				var qnt = productFormElement[i].value
				i = i+2
				var productId = productFormElement[i].value
				var currentItemArray = {
					product_id:productId,
					quantity:qnt
				}
				itemDetails.push(currentItemArray)
			}
		// End For Data Formating Package Item

		const { packageItems, dispatch, session } = this.props
			dispatch({
				type: 'UPDATE_PACKAGE_ITEM',
				payload: {
					upadatePackageItemDetails: {
						id: packageItems.packageData.id,
						price: self.state.totalPrice,
						product_details: itemDetails,
						loginToken: session.loginTokenDetails.token
					}
				}
			})
		alert("Package Update Item Successfully......!")
	}

// Start Render Method
render() {
    currentObj = this
    const  {product, form, packageItems} = this.props
    var productArray = []
    if(product.data != null) {
        productArray = product.data
    }

// Start methods for checkbox select
function onRowSelect(row, isSelected){
    if(isSelected){
        previousItemArray.map(function (data) {
            if(data.id == row.id){
				alert("Item is already added!")
				return
            }
        })
        currentSelectedArray.push(row)
        productJsonArray = Object.assign(productJsonArray, previousItemArray)
        productJsonArray.push(row)
        flag = 1;
    }else{
        var removeArrayItem = []
        currentSelectedArray.map(function (data) {
                if(data.id != row.id){
                        removeArrayItem.push(data)
                }
        })
        currentSelectedArray = []
        currentSelectedArray = Object.assign(currentSelectedArray, removeArrayItem)
        var index = currentObj.state.itemArray.indexOf(currentSelectedArray)

        if (index < 0 && currentSelectedArray.length != 0) {
                productJsonArray = []
                productJsonArray = Object.assign(currentSelectedArray, previousItemArray)
        }else{

                flag = 0
        }
    }
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  onSelect: onRowSelect,
  onSelectAll: currentObj.onSelectAll
}

// Start Script for change product image
let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={style.frameImg} />);
    } else {
      $imagePreview = (<img src="http://localhost/img/package.png" style={style.frameImg} />)
    }	
	
	return (
	<wrapper style = {[style.wrapper, style.displayBlock]} >
	<DashboardHeader/>
	<headerSection style={[style.headerBox, style.displayBlock]}> 
	<headerContainer className="container" style={style.displayBlock}>
	<headerRow>
	<headingArea className="col-xs-12 col-sm-4 col-md-4" style={style.headerText}>
		Update Package
	</headingArea>
	<headerLink className="col-xs-12 col-sm-6 col-md-5 pull-right" style={style.headerLink}>
		<backButton style={style.saveButtonArea}>
			<Link to='' style={style.blueButton}>Back</Link>
		</backButton>
	</headerLink>
						
	</headerRow>
	</headerContainer>
	</headerSection>
	<topArea className="container" style={style.displayBlock}>
	<rowArea className="row">
	<tabArea className="col-sm-8 col-md-9 mobilepadding">
		<Tabs defaultActiveKey={1}>
			<Tab eventKey={1} title="Add Package">
		    	<addPackage className='col-xs-12 col-sm-12 col-md-12' style={[style.packageh1, style.padding0]}> Update Package
		  		</addPackage> 

                <addPackageBox className='col-xs-12 col-sm-12 col-md-12' style={style.inventoryBg}>
		        <packageWraper className='col-md-8'>  
		        <inputField style={style.inputField}>
		        <FormLine>
				<FormBlock title='Package Name' validationStatus = {this.state.nameStatus} titleCustomStyle={style.titleStyle}>
				<FormInput  customStyle={style.inputBox} type='text' value= {packageItems.packageData.name} onChange={(e) => { this.setFieldValue('name', e) }} placeholder="e.g. Philips Respironics Amara View Full Face Mask"/>
				</FormBlock>
				</FormLine>
		        </inputField>

		        <inputField style={style.inputField}>
		        <FormLine>
				<FormBlock title='Package Id' validationStatus = {this.state.productCodeStatus} titleCustomStyle={style.titleStyle}>
				<FormInput  customStyle={style.inputBox} type='text' value={packageItems.packageData.product_code} onChange={(e) => { this.setFieldValue('product_code', e) }} placeholder="e.g. PR1234T"/>
				</FormBlock>
				</FormLine>
		        </inputField>

		        <inputField style={style.inputField}>
		        <FormLine>
				<FormBlock title='Package Discription' validationStatus = {this.state.descriptionStatus}  titleCustomStyle={style.titleStyle}>
				<FormTextarea rows='2' value={packageItems.packageData.description} customStyle={style.inventoryTextarea} onChange={(e) => { this.setFieldValue('description', e) }}/>
				</FormBlock>
				</FormLine>
		        </inputField>
		        
		        <inputField style={style.inputField}>
		        <FormLine>
				<FormBlock title='Package Price' titleCustomStyle={style.titleStyle}>
				<FormInput  customStyle={style.inputBox} type='text' value={this.state.totalPrice} onChange={(e) => { this.setFieldValue('price', e) }} placeholder="$1420.00"/>
				</FormBlock>
				</FormLine>
		        </inputField>
				<updatePackageButton style={style.textCenter}className='col-xs-12 col-sm-12 col-md-12'>
				<button style={[style.greenBtn, style.btnSave1]}  type='button' onClick={(e) => { this.updatePackageFunction(e) }} >Update Package</button> 
				</updatePackageButton>
		         
		        </packageWraper>

		        <packageImage className='col-md-4' style ={style.dividerleft}>
		        <packageFrame style={style.inputFile}>
		         {$imagePreview}
		        </packageFrame>

		        <inputField style={style.editBtn}>
				<upload style = {style.uploadBtn}>
				<FormInput type ='file' customStyle = {[style.input, style.displayBlock]} onChange={(e) => { this._handleImageChange('file', e) }} >Add/Change Photo</FormInput>
				</upload>
		        </inputField>

		        </packageImage>

                </addPackageBox>


			</Tab>

			<Tab eventKey={2} title="Add Package Items">
			<addPackageProductWraper style={[style.inventory, style.padding0, style.displayBlock]}> 	
			<responsivBox style= {[style.addProducts, style.padding0, style.displayBlock]}>	  	
			<addPackageProductBox className='col-xs-12' style ={[style.productH1, style.padding0]} >
		  	All Products
		  	</addPackageProductBox>

<addPackageTable style={[style.tableResponsive]}>
<BootstrapTable data={productArray}   pagination={true} search={true} selectRow={selectRowProp}>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"  dataField='id' isKey={true} >Product No</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"    dataField='name'>Product Name</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"    dataField='manufacturer'>Manufacturer</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"    dataField='vendor'>Vendor</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"   dataField='category'>Category</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight' width = "120"  dataField='price'>Price</TableHeaderColumn>

</BootstrapTable>
</addPackageTable>

<headingButton style={style.saveProducts}> 
<button style={[style.greenBtn, style.btnSave1]}  type='button' onClick={(e) => { this.addRow() }} >Add Product</button> 
</headingButton> 
    
</responsivBox>

<responsivBox className='col-xs-12 col-sm-12 col-md-12' style= {[style.packageItem, style.padding0]}>	  	
<addPackageProductBox className='col-xs-12 col-sm-12 col-md-3' style ={style.productH2} >
Package Items
</addPackageProductBox>
<addPackageTable style={[style.tableResponsive]}>
<form ref='productForm'>
<BootstrapTable data={this.state.itemArray} >

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='id' isKey={true}>Product No</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='name'>Product Name</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='manufacturer'>Manufacturer</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataField='price'>Price</TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columnBorder'  width = '100' dataFormat={this.addTextBoxQuantity} dataField='quantity'>Quantity</TableHeaderColumn>

<TableHeaderColumn hidden={true} dataSort={true} className='columHeight columBorder' width = "100" dataFormat={this.addTextBoxPrice} dataField="price"></TableHeaderColumn>

<TableHeaderColumn hidden={true} dataSort={true} className='columHeight columBorder' width = "100" dataFormat={this.addTextBoxQuantity} dataField="id"></TableHeaderColumn>

<TableHeaderColumn dataSort={true} className='columHeight columBorder' width = "100" dataFormat={this.deleteIconAdd} dataField="id">Action</TableHeaderColumn>

</BootstrapTable>
</form>
</addPackageTable>
<totalPrice style={style.price}> Total Price : $<FormInput  customStyle={style.priceInputBox} type='text' readonly='readonly'  value={((this.state.totalPrice)*100)/100} /> </totalPrice>

<headingButton style={style.saveProducts}> 
<button style={[style.greenBtn, style.btnSave1]} value="" type="button" onClick={(e) => { this.updatePackageItems(e) }} >Update Package Items</button> 
</headingButton> 

</responsivBox>

</addPackageProductWraper> 
</Tab>
			
									
</Tabs>
</tabArea>
		
		<rightArea className="col-xs-12 col-sm-4 col-md-3" style={[style.padding0, style.mTopMargin]}>  
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
</wrapper>
    )
  }
}

UpdatePackage.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.addPackage,
    packageItems: state.getPackage,
    product: state.getProduct
    
   }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(UpdatePackage))
