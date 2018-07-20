// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Radium from 'radium'

// style
import style from './style.js'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import FormTextarea from '../FormTextarea'
import Table from '../Table'
import ReloadingGraphic from '../ReloadingGraphic'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

// exports

var jsonBranchesArray = []
var jsonUsersArray = []
var branchArray={}
var jsonBrachArray = {}
//var branchLists = []
export class OnBoardingUsersForm extends Component {
  constructor(props) {
    super(props)
		this.setPermissionLevel = this.setPermissionLevel.bind(this)
		this.changeAllAccess = this.changeAllAccess.bind(this)
		this.branchGridClose = this.branchGridClose.bind(this)
		this.deleteList = this.deleteList.bind(this)
		
    this.state = {firstNameStatus:'', lastNameStatus:'', emailStatus:'', companyRoleStatus:'', companyNameStatus:'', currentLevel:'reports', userId:2, userDataGrid:[], branchGrid:[], changedButton:0, enabledButtons:[],
	allAccessHr:0, allAccessHrClicked:false, allAccessSales:0, allAccessSalesClicked:false, allAccessReports:0, allAccessReportsClicked:false ,allAccessBilling:0, allAccessBillingClicked:false ,
	allAccessClinical:0, allAccessClinicalClicked:false, allAccessInventory:0, allAccessInventoryClicked:false, allAccessAccounting:0, allAccessAccountingClicked:false }
  }
	
   handleChange(e) {
		var buttonValue = parseInt(e.target.value)
		var thenumReports = parseInt((e.target.name).match(/\d+/)[0])
		e.preventDefault()
		var newArray = this.state.enabledButtons.slice()
		
		var currentLevel = this.state.currentLevel
		switch (currentLevel) {
			case 'hr':
				if(buttonValue > 0) {
							this.setState({allAccessHr:0})
				}
			break
			case 'sales':
				if(buttonValue > 0) {
							this.setState({allAccessSales:0})
				}
			break
			case 'accounting':
				if(buttonValue > 0) {
							this.setState({allAccessAccounting:0})
				}
			break
			case 'inventory':
				if(buttonValue > 0) {
							this.setState({allAccessInventory:0})
				}
			break
			case 'clinical':
				if(buttonValue > 0) {
							this.setState({allAccessClinical:0})
				}
			break
			case 'reporting':
				if(buttonValue > 0) {
							this.setState({allAccessReports:0})
				}
			break
			case 'billing':
				if(buttonValue > 0) {
							this.setState({allAccessBilling:0})
				}
			break
		}
		if(buttonValue > 0) {
			var buttonIndex = newArray.indexOf(buttonValue)
			if (buttonIndex > -1) {
				newArray.splice(buttonIndex, 1)
				this.setState({enabledButtons:newArray})
			}
		} else {
				if(newArray.indexOf(thenumReports) == -1){ // Check if the value already exist
					newArray.push(thenumReports);
					this.setState({enabledButtons:newArray})
				}		
			}
		
  }

 
  componentWillMount() {
    const { dispatch, session} = this.props
    dispatch({
      type: 'GET_ONBOARDING_COMPANIES',
      payload: {
		loginToken: session.loginTokenDetails.token
      }
    })
	dispatch({
      type: 'GET_USER_MODULE_PERMISSION',
	   payload: {
        loginToken: session.loginTokenDetails.token
      }
    })
  }
	
  setFieldValue(field, e) {
    const { dispatch, session } = this.props
    var value = e.target.value
    dispatch({
      type: 'ONBOARDING_USERS_FORM_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'firstName':
        this.setState({firstNameStatus:this.checkEmpty(value)})
        this.setState({firstNameStatus:this.checkString(value)})
        break
      case 'lastName':
        this.setState({lastNameStatus:this.checkEmpty(value)})
        this.setState({lastNameStatus:this.checkString(value)})
        break
      case 'companyRole':
        this.setState({companyRoleStatus:this.checkEmpty(value)})
        this.setState({companyRoleStatus:this.checkString(value)})
        break
      case 'email':
        this.setState({emailStatus:this.checkEmpty(value)})
        this.setState({emailStatus:this.checkEmail(value)})
        break
      case 'companyName':
        this.setState({companyNameStatus:this.checkEmpty(value)})
        var result = this.checkEmpty(value)
        let companyId
        if (result == 'correct') {
          companyId = value
        } else {
          companyId = 0
        }
        dispatch({
          type: 'GET_ONBOARDING_BRANCHES',
          payload: {
			  parentCompanyDetails : {
				companyId: companyId,
				loginToken: session.loginTokenDetails.token
			}
          }
        })
        break
    }
  }
  addNewBranch(e) {
    const { form, dispatch } = this.props
    e.preventDefault()
    if(form.data.branchesList == '') {
    return false
    } else {
    if(jsonBranchesArray.length != 0) {
      for (var key in jsonBranchesArray) {
        var row  = jsonBranchesArray[key]
        if(form.data.branchesList == row.branchName) {
          return false
          break
        }
      }
    } 
    var branchDetails = {
      //branchName:form.data.branchesList,
			'1':[this.state.enabledButtons]
    }
    jsonBranchesArray.push(branchDetails)
    if(branchArray.length != 0) {
      for (var key in branchArray) {
        if (key == form.data.branchesList) {
          jsonBrachArray[key] = branchArray[key]
          break
        }
      }
    }
    this.setState({branchGrid:jsonBrachArray})
    }
  }
  
 setPermissionLevel(field, e) {
    e.preventDefault()
    this.setState({currentLevel:field})
  }
	
 changeAllAccess(field, e) {
  const { form, dispatch } = this.props
    e.preventDefault()
		var value = e.target.value
		var currentLevel = this.state.currentLevel
		 switch (field) {
      case 'allAccessReports':
					if(value == 'allAccessReports') {
						this.setState({allAccessReports:0})
						this.setState({allAccessReportsClicked:true})
					} else {
						this.setState({allAccessReports:field})
						this.setState({allAccessReportsClicked:true})
					}
        break
      case 'allAccessBilling':
					if(value == 'allAccessBilling') {
						this.setState({allAccessBilling:0})
						this.setState({allAccessBillingClicked:true})
					} else {
						this.setState({allAccessBilling:field})
						this.setState({allAccessBillingClicked:true})
					}
        break
      case 'allAccessHr':
					if(value == 'allAccessHr') {
						this.setState({allAccessHr:0})
						this.setState({allAccessHrClicked:true})
					} else {
						this.setState({allAccessHr:field})
						this.setState({allAccessHrClicked:true})
					}
        break
      case 'allAccessClinical':
					if(value == 'allAccessClinical') {
						this.setState({allAccessClinical:0})
						this.setState({allAccessClinicalClicked:true})
					} else {
						this.setState({allAccessClinical:field})
						this.setState({allAccessClinicalClicked:true})
					}
        break
      case 'allAccessSales':
					if(value == 'allAccessSales') {
						this.setState({allAccessSales:0})
						this.setState({allAccessSalesClicked:true})
					} else {
						this.setState({allAccessSales:field})
						this.setState({allAccessSalesClicked:true})
					}
        break
			case 'allAccessInventory':
					if(value == 'allAccessInventory') {
						this.setState({allAccessInventory:0})
						this.setState({allAccessInventoryClicked:true})
					} else {
						this.setState({allAccessInventory:field})
						this.setState({allAccessInventoryClicked:true})
					}    
        break
		  case 'allAccessAccounting':
					if(value == 'allAccessAccounting') {
						this.setState({allAccessAccounting:0})
						this.setState({allAccessAccountingClicked:true})
					} else {
						this.setState({allAccessAccounting:field})
						this.setState({allAccessAccountingClicked:true})
					}    
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
  checkString(value) {
    let status
    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if ((!value.match(letters)) || (value == null) || (value == '')) {
        status = 'error'
    } else { 
      status = 'correct'
    }
    return status
  }
  checkEmail(value) {
    let status
    var emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!value.match(emailFormat)) { 
      status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
  addNewuser(e) {
    const { form, dispatch } = this.props
    e.preventDefault()
    for (var key in jsonUsersArray) {
      var row  = jsonUsersArray[key]
      var user = row.userDetails
      if(form.data.email == user.email) {
        return false
        break
      }
    }
    if(form.data.firstName == '' || form.data.firstName == null || this.state.firstNameStatus == 'error'
    || form.data.lastName == '' || form.data.lastName == null || this.state.lastNameStatus == 'error'
    || form.data.companyRole == '' || form.data.companyRole == null || this.state.companyRoleStatus == 'error'
    || form.data.email == '' || form.data.email == null || this.state.emailStatus == 'error'
    || form.data.companyName == '' || form.data.companyName == null || this.state.companyNameStatus == 'error') {
    return false
    } else {
      if (jsonBranchesArray.length == 0) {
        this.addNewBranch(e)
      }
      var userDetails = {
        'userDetails' : {
          firstName:form.data.firstName,
          lastName:form.data.lastName,
          companyRole:form.data.companyRole,
          email:form.data.email,
          companyName:form.data.companyName
        },
        'Branches':jsonBranchesArray
      }
      jsonUsersArray.push(userDetails)
      jsonBranchesArray = []
      this.setState({userDataGrid:jsonUsersArray})
      if(branchArray.length != 0) {
      for (var key in branchArray) {
        if (key == form.data.branchesList) {
          jsonBrachArray[key] = branchArray[key]
          break
        }
      }
	  
    }
    this.setState({branchGrid:jsonBrachArray})
      dispatch({
        type: 'ONBOARDING_USERS_RESET'
      })
	  this.setState({firstNameStatus:'',lastNameStatus:'',emailStatus:'',companyRoleStatus:'',companyNameStatus:'',currentLevel:'reports'})
      
    }
  }
  submit(e) {
    const { form, dispatch, session } = this.props
    e.preventDefault()
    this.addNewBranch(e)
    this.addNewuser(e)
    dispatch({
      type: 'SAVE_ONBOARDING_USERS',
      payload: {
        userDetails: {
          jsonUsersArray: jsonUsersArray,
		  loginToken: session.loginTokenDetails.token
        }
      }
    })
	this.setState({userDataGrid:''})
	this.setState({branchGrid:''})
	
  }

	deleteList(rowVar) {
	 var rows = this.state.userDataGrid
	 var throwout = rows.splice(rowVar, 1)
	 this.setState({userDataGrid:rows})
	}
	
	branchGridClose(rowVar) {
	 var thisIsObject = this.state.branchGrid
	 var key = rowVar
	 delete thisIsObject[key]
	 this.setState({branchGrid:thisIsObject})
	}

			
		
	
  render() {
    const { form, companies, branches, permissionData ,checked} = this.props	
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''	
    var branchGrid = this.state.branchGrid
    //brach grid
    var branchLists = []
    if (branchGrid.length != 0) {
      for (var key in branchGrid) {
			var keyValue = key
        branchLists.push(
          <div style={style.permissions.branchWrapper}>
          <a href ='javascript:void(0)' key = {keyValue} onClick={this.branchGridClose.bind(this, keyValue)} ><span style={style.permissions.closebtn} >&times;</span></a>
          {branchGrid[key]}
          </div>
        )
      }
    }
    
    //user grid
    var gridsValue = this.state.userDataGrid
    var userTableGrid = []
    if (gridsValue.length != 0) {
		      for (var key in gridsValue) {
					var keyValue = key
					var row  = gridsValue[key]
          var user = row.userDetails
          userTableGrid.push(<tr style = {[style.employee.tr]} >
            <td style ={[style.employee.td, style.displayBlock]}>{user.firstName} {user.lastName}</td>
            <td style ={[style.employee.td, style.displayBlock]}>{user.companyRole}</td>
            <td style ={[style.employee.td, style.displayBlock]}>{user.email}</td>
            <td style ={[style.employee.td, style.displayBlock, style.employee.right]}><a href ='javascript:void(0)' key = {keyValue} onClick={this.deleteList.bind(this, keyValue)} ><img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/delete.png"/></a></td>
					</tr>
        )
      }
		}

    //create array of companies of loggedin user
    const companiesArray = companies.companies
    var companiesList = []
    companiesList.push(
      < option value = '' > Please Choose < /option>
    )
    if (companiesArray.length != 0) {
      var companiesDataArray = companiesArray.data
      for (var i = 0; i < companiesDataArray.length; i++) {
        companiesList.push(
          < option value = {companiesDataArray[i]['CompanyID']}> {companiesDataArray[i]['CompanyName']} < /option>
        )
      }
    }
    
    //create array of branches of selected company 
    const branchesArray = branches.branchesList
    var branchesList = []
    branchArray = {}
    branchesList.push(
      < option value = '' > Choose Branch/Location (Optional) < /option>
    )
    if (branchesArray.length != 0) {
      for (var i = 0; i < branchesArray.length; i++) {
        var id = branchesArray[i]['CompanyID']
        branchArray[id] = branchesArray[i]['CompanyName']
        branchesList.push(
          < option value = {branchesArray[i]['CompanyID']}> {branchesArray[i]['CompanyName']} < /option>
        )
      }
    }
    const inactiveSliderStyle = [style.permissions.slider, style.permissions.round]
    const inactiveRoundStyle = [style.permissions.sliderBefore]
    
    const activeSliderStyle = [style.permissions.checked]
    const activeRoundStyle = [style.permissions.checkedBefore]
    
    const accessAllCheckox = [style.permissions.slider, style.permissions.round]
    const roundStyle = [style.permissions.sliderBefore]
    if (this.state.allAccessIsChecked) {
      accessAllCheckox.push(style.permissions.checked)
      roundStyle.push(style.permissions.checkedBefore)
    }
    let currentModule
    const currentLevel = this.state.currentLevel
    let currentAllAccessButton

		var keyName = null
		var moduleName = []
		var tableData = []
		var tableData1 = []
		var tableData2 = []
		var tableData3 = []
		var tableData4 = []
		var tableData5 = []
		var tableData6 = []
		var hrAccAdd = null
		var hrAccEdit = null
		var hrAccDelete = null
		var hrAccView = null
		if(permissionData.data != null) {
		var module = permissionData.data[0].Module
			
			for (var key in module) {
				keyName = key
				var subModule = module[key][0].SubModule
				for (var subKey in subModule) {
				var countObj = Object.keys(subModule[subKey]).length
				var checkboxValue = 0
				var tdData = []
				var enabled = 0
					 	if(countObj > 0 ) {
							for (var i = 0; i<countObj; i++) {
								checkboxValue = subModule[subKey][i].ModulePermissionId
						var newArray = this.state.enabledButtons.slice()
						
						switch(currentLevel) {
							case 'hr':
								if((this.state.allAccessHr === 'allAccessHr' && keyName == 'Human Resources')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessHr == 0) && this.state.allAccessHrClicked == true  && keyName == 'Human Resources'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
						
							break
							case 'accounting':
								if((this.state.allAccessAccounting === 'allAccessAccounting' && keyName == 'Accounting System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessAccounting == 0) && this.state.allAccessAccountingClicked == true && keyName == 'Accounting System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
								
							break
							case 'inventory':
								if((this.state.allAccessInventory === 'allAccessInventory' && keyName == 'Inventory System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessInventory == 0) && this.state.allAccessInventoryClicked == true && keyName == 'Inventory System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
								
							break
							case 'sales':
								if((this.state.allAccessSales === 'allAccessSales' && keyName == 'Sales System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessSales == 0) && this.state.allAccessSalesClicked == true && keyName == 'Sales System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
								
							break
							case 'clinical':
								if((this.state.allAccessClinical === 'allAccessClinical' && keyName == 'Clinical System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessClinical == 0) && this.state.allAccessClinicalClicked == true && keyName == 'Clinical System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
								
							break
							case 'reporting':
								if((this.state.allAccessReports === 'allAccessReports' && keyName == 'Reporting System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessReports == 0) && this.state.allAccessReportsClicked == true  && keyName == 'Reporting System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
							break
							case 'billing':
								if((this.state.allAccessBilling === 'allAccessBilling' && keyName == 'Billing System')){
									if(newArray.indexOf(checkboxValue) == -1 ){ // Check if the value already exist
											newArray.push(checkboxValue);
											this.state.enabledButtons = newArray
										}
								} else if((this.state.allAccessBilling == 0) && this.state.allAccessBillingClicked == true && keyName == 'Billing System'){
									var buttonIndex = newArray.indexOf(checkboxValue)
											if (buttonIndex > -1) {
												newArray.splice(buttonIndex, 1)
												this.state.enabledButtons = newArray
											}								
								}							
								enabled = ((this.state.enabledButtons.indexOf(checkboxValue) != -1))
							break
						  default:
							break
							}
							var checkboxValueTemp = 0
							if (!enabled){
								checkboxValueTemp = 0
							} else{
								checkboxValueTemp = checkboxValue
							}
										tdData.push(<Table value = {checkboxValueTemp} key = {checkboxValue} name ={'checkbox'+checkboxValue} onClick={(e) => { this.handleChange.bind(this)(e) }} />) // change input is for calback
							}
						} else {
						for (var i = 0; i<4; i++) {
									checkboxValue = 0
									tdData.push(<Table value = {checkboxValue} />)
							}
						}
						switch(keyName) {
							case 'Human Resources':
					tableData.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
									
								</tr>
								)
							break
							case 'Accounting System':
					tableData1.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
							case 'Inventory System':
					tableData2.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
							case 'Sales System':
					tableData3.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
							case 'Clinical System':
					tableData4.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
							case 'Reporting System':
					tableData5.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
							case 'Accounting':
					tableData6.push(<tr style={style.permissions.tr}>
								<td style={style.permissions.td}>{subKey}</td>
									{tdData}
								</tr>
								)
							break
						default:
							break
							}
				}

			} 
			
			this.state.allAccessHrClicked = false
			this.state.allAccessSalesClicked = false
			this.state.allAccessReportsClicked = false
			this.state.allAccessBillingClicked = false
			this.state.allAccessClinicalClicked = false
			this.state.allAccessInventoryClicked = false
			this.state.allAccessAccountingClicked = false
			
		}
		
		
		
		
		
		
		
			switch(currentLevel) {
				case 'reports':
				currentAllAccessButton = <label style={style.permissions.labelSwitch}>
          <FormInput type='checkbox' value={this.state.allAccessReports} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessReports', e) }}/>
            <slider style={[inactiveSliderStyle, this.state.allAccessReports == 'allAccessReports' ? activeSliderStyle : '']}>
              <round style={[inactiveRoundStyle, this.state.allAccessReports == 'allAccessReports' ? activeRoundStyle : '']}>
              </round>
            </slider>
          </label>
        currentModule = <tbody>
       {tableData5}
        </tbody>
				break
				case 'billing':
				currentAllAccessButton = <label style={style.permissions.labelSwitch}>
					<FormInput type='checkbox' value={this.state.allAccessBilling} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessBilling', e) }}/>
						<slider style={[inactiveSliderStyle, this.state.allAccessBilling == 'allAccessBilling' ? activeSliderStyle : '']}>
							<round style={[inactiveRoundStyle, this.state.allAccessBilling == 'allAccessBilling' ? activeRoundStyle : '']}>
							</round>
						</slider>
					</label>
				currentModule = <tbody>
			 {tableData6}
				</tbody>
				break
			case 'hr':
			currentAllAccessButton = <label style={style.permissions.labelSwitch}>
				<FormInput type='checkbox' value={this.state.allAccessHr} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessHr', e) }}/>
					<slider style={[inactiveSliderStyle, this.state.allAccessHr == 'allAccessHr' ? activeSliderStyle : '']}>
						<round style={[inactiveRoundStyle, this.state.allAccessHr == 'allAccessHr' ? activeRoundStyle : '']}>
						</round>
					</slider>
				</label>
			currentModule = <tbody>
		 {tableData}
			</tbody>
			break
			case 'clinical':
				currentAllAccessButton = <label style={style.permissions.labelSwitch}>
          <FormInput type='checkbox' value={this.state.allAccessClinical} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessClinical', e) }}/>
            <slider style={[inactiveSliderStyle, this.state.allAccessClinical == 'allAccessClinical' ? activeSliderStyle : '']}>
              <round style={[inactiveRoundStyle, this.state.allAccessClinical == 'allAccessClinical' ? activeRoundStyle : '']}>
              </round>
            </slider>
          </label>
        currentModule = <tbody>
       {tableData4}
        </tbody>
				break
				case 'sales':
				currentAllAccessButton = <label style={style.permissions.labelSwitch}>
					<FormInput type='checkbox' value={this.state.allAccessSales} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessSales', e) }}/>
						<slider style={[inactiveSliderStyle, this.state.allAccessSales == 'allAccessSales' ? activeSliderStyle : '']}>
							<round style={[inactiveRoundStyle, this.state.allAccessSales == 'allAccessSales' ? activeRoundStyle : '']}>
							</round>
						</slider>
					</label>
				currentModule = <tbody>
			 {tableData3}
				</tbody>
				break
			case 'inventory':
			currentAllAccessButton = <label style={style.permissions.labelSwitch}>
				<FormInput type='checkbox' value={this.state.allAccessInventory} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessInventory', e) }}/>
					<slider style={[inactiveSliderStyle, this.state.allAccessInventory == 'allAccessInventory' ? activeSliderStyle : '']}>
						<round style={[inactiveRoundStyle, this.state.allAccessInventory == 'allAccessInventory' ? activeRoundStyle : '']}>
						</round>
					</slider>
				</label>
			currentModule = <tbody>
		 {tableData2}
			</tbody>
			break
			case 'accounting':
			currentAllAccessButton = <label style={style.permissions.labelSwitch}>
				<FormInput type='checkbox' value={this.state.allAccessAccounting} customStyle={style.permissions.switchCheckbox} onChange={(e) => { this.changeAllAccess.bind(this)('allAccessAccounting', e) }}/>
					<slider style={[inactiveSliderStyle, this.state.allAccessAccounting == 'allAccessAccounting' ? activeSliderStyle : '']}>
						<round style={[inactiveRoundStyle, this.state.allAccessAccounting == 'allAccessAccounting' ? activeRoundStyle : '']}>
						</round>
					</slider>
				</label>
			currentModule = <tbody>
		 {tableData1}
			</tbody>
			break
				}
    return (
      <wrapper>
			{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
        <heading style={[style.thanks, style.displayBlock]} >
          <thanksHeading style={[style.heading, style.displayBlock]}>
            Now let&#8217;s add the employees who will be using LyfeRx.
			<Link to='/onboardingBillingForm' style={style.btnEnroll} > Skip </Link>
          </thanksHeading>
        </heading>
        <form>
          <qus-form style = {[style.qusCol, style.displayBlock]}>
            <content style = {[style.content, style.displayBlock]}>
			{messageStyle != '' ? <ListGroup style={style.alertMessage}>
			<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
			</ListGroup> : ''}
              <left-qus style = {[style.left, style.displayBlock]}>
                <FormLine>
                  <FormBlock title='Employee First Name' validationIconStyle={style.validationIcon} validationStatus = {this.state.firstNameStatus} >
                    <FormInput type='text' value={form.data.firstName} onChange={(e) => { this.setFieldValue('firstName', e) }} isDisabled={form.isSubmitting}/>
                  </FormBlock>
                </FormLine>
                
                 <FormLine>
                    <FormBlock title='Employee Last Name' validationIconStyle={style.validationIcon} validationStatus = {this.state.lastNameStatus}>
                     <FormInput type='text' value={form.data.lastName} onChange={(e) => { this.setFieldValue('lastName', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                </FormLine>
            
                <FormLine>
                    <FormBlock title='Employee Title' validationIconStyle={style.validationIcon} validationStatus = {this.state.companyRoleStatus}>
                     <FormInput type='text' value={form.data.companyRole} onChange={(e) => { this.setFieldValue('companyRole', e) }} isDisabled={form.isSubmitting} />
                    </FormBlock>
                </FormLine>
              </left-qus>

              <right-qus style = {[style.right, style.displayBlock]}>
                <FormLine>
                  <FormBlock title='Employee Email' validationIconStyle={style.validationIcon} validationStatus = {this.state.emailStatus}>
                    <FormInput type='text' value={form.data.email} onChange={(e) => { this.setFieldValue('email', e) }} isDisabled={form.isSubmitting}/>
                  </FormBlock>
                </FormLine>
                <FormLine>
                  <FormBlock title='Primary Company' validationIconStyle={style.validationIcon} validationStatus = {this.state.companyNameStatus} >
                    < select style={style.dropDownList} value={form.data.companyName} onChange={(e) => { this.setFieldValue('companyName', e) }}>
                      {companiesList}
                    < /select>
                  </FormBlock>
                </FormLine>
              </right-qus>
              <clr style={style.clr}></clr>
							
							
							
              <permissions style={style.permissions.wrapper}>
                <header style={[style.permissions.header.wrapper, style.clr]}>
                  <per-heading style={style.permissions.header.h2}>Employee Permissions</per-heading>
                    < select style={[style.dropDownList, style.permissions.branchesList]} value={form.data.branchesList} onChange={(e) => { this.setFieldValue('branchesList', e) }}>
                      {branchesList}
                    < /select>
                    <clr style={style.clr}></clr>
                </header>
                <permission-level style={[style.permissions.level, style.clr]}>
                <ul-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'reports' ? style.permissions.reportActiveIcon : style.permissions.reportIcon]} onClick={(e) => { this.setPermissionLevel('reports', e) }}></circle>
                    <description style={style.permissions.description}>Reports</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'billing' ? style.permissions.billingActiveIcon : style.permissions.billingIcon]} onClick={(e) => { this.setPermissionLevel('billing', e) }}></circle>
                    <description style={style.permissions.description}>Billing</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'hr' ? style.permissions.hrActiveIcon : style.permissions.hrIcon]} onClick={(e) => { this.setPermissionLevel('hr', e) }}></circle>
                    <description style={style.permissions.description}>HR</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'clinical' ? style.permissions.clinicalActiveIcon : style.permissions.clinicalIcon]} onClick={(e) => { this.setPermissionLevel('clinical', e) }}></circle>
                    <description style={style.permissions.description}>Clinical</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'sales' ? style.permissions.salesAvtiveIcon : style.permissions.salesIcon]} onClick={(e) => { this.setPermissionLevel('sales', e) }}></circle>
                    <description style={style.permissions.description}>Sales</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'inventory' ? style.permissions.inventoryActiveIcon : style.permissions.inventoryIcon]} onClick={(e) => { this.setPermissionLevel('inventory', e) }}></circle>
                    <description style={style.permissions.description}>Inventory</description>
                  </li-sction>
                  <li-sction style={style.permissions.li}>
                    <circle style={[style.permissions.circle,style.permissions.iconCommon, this.state.currentLevel == 'accounting' ? style.permissions.accountingActiveIcon : style.permissions.accountingIcon]} onClick={(e) => { this.setPermissionLevel('accounting', e) }}></circle>
                    <description style={style.permissions.description}>Accounting</description>
                  </li-sction>
                </ul-sction>
                </permission-level>
                <all-access style={style.permissions.allAccess}>
                  <access-heading style={style.permissions.accessHeading}>All Access</access-heading>
                  {currentAllAccessButton}
                </all-access>
                <access-table style={style.permissions.accessTable}>
                  <table style={style.permissions.table}>
                    <thead>
                      <tr style={style.permissions.tr}>
                        <th style={style.permissions.td}></th>
                        <th style={style.permissions.td}>Add</th>
                        <th style={style.permissions.td}>Edit</th>
                        <th style={style.permissions.td}>Delete</th>
												<th style={style.permissions.td}>View</th>
                      </tr>
                    </thead>
                      {currentModule}
                    </table>
                </access-table>
              <branchSection style={style.permissions.branchSection}>
              <added-branches style={style.permissions.addBranches}>
              {branchLists}
              </added-branches>
              <Button type='button' onClick={(e) => { this.addNewBranch(e) }} icon ={<img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/plus.png" />} text={form.isSubmitting ? '  Add Another Branch' : ' Add Another Branch'} customStyle={[style.btnLogin, style.permissions.button, style.permissions.branchButton]}/>
              </branchSection>
              </permissions>
							
							
          		<employ-added style={ style.employee.added }>
								 <employ-head style={ style.employee.head }>
									 <permission style={ style.employee.permission }>{userTableGrid.length != 0 ? userTableGrid.length : 'No'} Employee Added</permission>
								</employ-head>
								<access-table style={ style.employee.tableAdd }>
									 <table style= {[style.employee.table]}>
										 <thead style= {[style.employee.thead, style.displayBlock]}>
												 <tr style = {[style.employee.tr]}>
													 <th style = {[style.employee.th, style.displayBlock]}>Name</th>
													 <th style = {[style.employee.th, style.displayBlock]}>Title</th>
													 <th style = {[style.employee.th, style.displayBlock]}>Email</th>
													 <th style = {[style.employee.th, style.displayBlock, style.employee.right]}>Remove</th>
												 </tr>
										 </thead>
                    <tbody style = {[ style.displayBlock, style.employee.tbody ]}>
                      {userTableGrid}
                    </tbody>
                    </table>
                  </access-table>		  
						 </employ-added>
              <FormLine customStyle={ style.employee.btnWrap }>
                <btn-next style = {[style.next, style.displayBlock]}>
                  <Button type='submit' onClick={(e) => { this.addNewuser(e) }}  icon ={<img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/plus.png" />} text={form.isSubmitting ? ' Add Another Employee' : ' Add Another Employee'} customStyle={[style.btnLogin, style.btnAdj]}/>
                  <Button type='submit' onClick={(e) => { this.submit(e) }}  text={form.isSubmitting ? 'Proccessing' : 'Done'} customStyle={[style.btnLogin, style.btnAdj]}/>
                </btn-next>
              </FormLine>
              < Footer footerType = 'onBoarding' />
            </content>
          </qus-form>
        </form>
      </wrapper>
    )
  }
}

OnBoardingUsersForm.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.onBoardingUsersForm,
    companies: state.companyDetailsForm,
    branches: state.onboardingBranch,
	permissionData: state.getUserModulePermission
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(OnBoardingUsersForm))
