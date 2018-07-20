// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import '../../css/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
import style from './style.js'

// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import Footer from '../Footer'
import FormLine from '../FormLine'
import DropDownList from '../DropDownList'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeaderTitle from '../DashboardHeaderTitle'
import UserProfileMenu from '../UserProfileMenu'
import DashboardHeader from '../DashboardHeader'
import { Label, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

// exports
export class MyProfileDashboard extends Form {
  constructor(props) {
    super(props)
		this.state = {salutationStatus:'', firstNameStatus:'',lastNameStatus:'',
      phoneNumberStatus:'', emailStatus:'', companyRoleStatus:'',file: '',imagePreviewUrl: '', showhide:'profile', profile:false, sidebar:true}
  }
  setFieldValue(field, e) {
  const { dispatch } = this.props
    var value = e.target.value
    dispatch({
      type: 'SET_PROFILE_DASHBOARD_FIELD_VALUE',
      params: {
        field: field,
        value: value
      }
    })
    e.preventDefault()
    switch (field) {
      case 'salutation':
        this.setState({salutationStatus:this.checkEmpty(value)})
        break
			case 'firstName':
        this.setState({firstNameStatus:this.checkEmpty(value)})
				this.setState({firstNameStatus:this.checkString(value)})
        break
			case 'lastName':
        this.setState({lastNameStatus:this.checkEmpty(value)})
				this.setState({lastNameStatus:this.checkString(value)})
        break
      case 'phoneNumber':
				this.setState({phoneNumberStatus:this.checkEmpty(value)})
				this.setState({phoneNumberStatus:this.checkPhonNumber(value)})
				break
      case 'email':
        this.setState({emailStatus:this.checkEmpty(value)}) 
				this.setState({emailStatus:this.checkEmail(value)})				
        break
      case 'companyRole':
        this.setState({companyRoleStatus:this.checkEmpty(value)})
				this.setState({companyRoleStatus:this.checkString(value)})
        break
      default:
        break
    }
  }
	
	
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
	
	checkEmpty(value) {
    let status
    if ((value == null) || (value == '')) {
      status = 'error'
    } else {
      status = 'correct'
    }
    return status
  }
  checkPhonNumber(value) {
    let status
    var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if((!value.match(phoneFormat)) || (value.match('0000000000')) ) { 
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
  componentWillMount() {
	const {form, dispatch, session } = this.props
     dispatch({
        type: 'GET_PROFILE_DASHBOARD_BY_ID',
        payload: {
          userDetails: {
            loginToken: session.loginTokenDetails.token
          }
        } 
    })
		dispatch({
			type: 'PROFILE_DASHBOARD_STARTED'
		})
	}
	
 editProfile(field, e) {
	const {form, dispatch, session } = this.props
     dispatch({
        type: 'GET_PROFILE_DASHBOARD_BY_ID',
        payload: {
          userDetails: {
            loginToken: session.loginTokenDetails.token
          }
        } 
    })
		dispatch({
			type: 'PROFILE_DASHBOARD_STARTED'
		})
		if (field == 'profile') {
				this.setState({showhide:'profile'})
			} 
		if (field == 'clock') {
				this.setState({showhide:'clock'})
			}
		if (field == 'payroll') {
				this.setState({showhide:'payroll'})
			}
		if (field == 'documents') {
				this.setState({showhide:'documents'})
			}
		if (field == 'training') {
			this.setState({showhide:'training'})
		}
			
  }  
	
	submit(e) {
    const { form, dispatch, session } = this.props
		var userId =form.data.id
		let {file} = this.state		
		e.preventDefault()
      dispatch({
        type: 'UPDATE_PROFILE_DASHBOARD_BY_ID',
        payload: {
          updateUserDetails: {
						 id : userId,
						 loginToken: session.loginTokenDetails.token,
						 salutation : form.data.salutation,
						 firstName : form.data.firstName,
						 lastName : form.data.lastName,
						 phoneNumber : form.data.phoneNumber,
						 email : form.data.email,
						 companyRole : form.data.companyRole,
						 image : new FormData(this.state.file)
						}
        }
    })
		 dispatch({
				type: 'PROFILE_DASHBOARD_STARTED'
		 })
		 this.setState({profile:false})
		 this.setState({salutationStatus:''})
		 this.setState({firstNameStatus:''})
		 this.setState({lastNameStatus:''})
		 this.setState({phoneNumberStatus:''})
		 this.setState({emailStatus:''}) 
		 this.setState({companyRoleStatus:''})
  }
	cancel(e) {
		e.preventDefault()
		this.setState({profile:false})
	}
	edit(e) {
		this.setState({profile:true})
	}
	
	
  render() {
	const { form } = this.props
	var messageStatus = form.messageStatus
	var messageStyle = messageStatus.status === 1 ? 'success' : messageStatus.status === 0 ? 'danger' : ''
	let {imagePreviewUrl} = this.state
	let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style = {style.frameImg} />);
    } else {
      $imagePreview = (<img src="https://s3-us-west-2.amazonaws.com/lyferx-web/images/assets/profile-photo.png" style = {style.frameImg}/>)
    }
	const salutation=[{text:'Please Choose.',value:''},{text:'Mr.',value:'Mr.'},{text:'Ms.',value:'Ms.'},{text:'Mrs.',value:'Mrs.'}]

    return (
				<wrapper style = {[style.wrapper, style.displayBlock]} > 
				{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
					<DashboardHeader/>
					<DashboardHeaderTitle/>
					 <contentSection style = {style.contentSection} >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className='row'>
							<DashboardLeftSidebar/>
								<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-8  col-md-4'> 
							<UserProfileMenu/> 
							<userWrapper className="col-xs-12 col-sm-12 col-md-8" style = {style.newuseradd}>
								<newuser className='col-xs-12 col-sm-12 col-md-12' style = {style.newuser}>
								{messageStyle != '' ? <ListGroup style={style.alertBox}>
								<ListGroupItem bsStyle={messageStyle}>{messageStatus.message}</ListGroupItem>
								</ListGroup> : ''}
									<addUserTitle className ='col-xs-12 col-sm-12 col-md-12' style = {style.newuserh1} >My Profile</addUserTitle>
										<inputContent className='col-xs-12 col-sm-6 col-md-6 '>
											<personalProfile style = {style.personalProfile} >
													<FormLine>
														<FormBlock title='Title' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.salutationStatus}>
															{this.state.profile==true ?
															<DropDownList value={form.data.salutation} dataList={salutation} onChange={(e) => { this.setFieldValue('salutation', e) }} customStyle = {style.newUserInput} />
															:
															<FormBlock title={form.data.salutation} titleCustomStyle= {style.label}/>
															}
														</FormBlock>
													</FormLine>
												</personalProfile>
												<personalProfile style = {style.personalProfile} >
													<FormLine>
														<FormBlock title='First Name' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.firstNameStatus}>
															{this.state.profile==true ?
															<FormInput type='text' value={form.data.firstName} placeholder='First Name' onChange={(e) => { this.setFieldValue('firstName', e) }} customStyle = {[style.newUserInput, style.firstname]} />
															:
															<FormBlock title={form.data.firstName} titleCustomStyle= {style.label}/>
															}
														</FormBlock>
													</FormLine>
												</personalProfile>
												<personalProfile style = {style.personalProfile} >
													<FormLine>
														<FormBlock title='Last Name' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.lastNameStatus}>
															{this.state.profile==true ?
															<FormInput type='text' value={form.data.lastName} placeholder='Last Name' onChange={(e) => { this.setFieldValue('lastName', e) }}  customStyle = {[style.newUserInput,style.firstname]}/>
															:
															<FormBlock title={form.data.lastName} titleCustomStyle= {style.label} />
															}
														</FormBlock>
													</FormLine>
												</personalProfile>
												<personalProfile style = {style.personalProfile} >
													<FormLine>
														<FormBlock title='Phone No.' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.phoneNumberStatus}>
															{this.state.profile==true ?
															<FormInput type='text' value={form.data.phoneNumber} placeholder='Phone No' onChange={(e) => { this.setFieldValue('phoneNumber', e) }}  customStyle = {[style.newUserInput, style.phoneno]} />
															:
															<FormBlock title={form.data.phoneNumber} titleCustomStyle= {style.label} />
															}
														</FormBlock>
													</FormLine>
												</personalProfile>
								
												</inputContent>
											<imageSection className='col-xs-12 col-sm-6 col-md-6' style={style.textAlign}>
							<personalProfileImg style={style.profileFrameImg}> 
							<profileFrame style={style.profileFrame} >{$imagePreview} </profileFrame>
											<editProfileBtn style={style.editProfileBtn} >
											{this.state.profile==true ?
												<upload style = {style.upload}>
												<FormInput type ='file' customStyle = {style.input} onChange={(e) => { this._handleImageChange('file', e) }} >Add/Change Photo</FormInput>
												</upload>:''}
											</editProfileBtn>
											</personalProfileImg>
											<personalProfile style = {style.personalProfile} >
	
											</personalProfile>
											{this.state.profile==true ?
											<personalProfile style = {[style.personalProfile]} >
												<FormLine>
													<FormBlock title='E-mail Id' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.emailStatus}>
														<FormInput type='text' value={form.data.email} placeholder='Your E-mail Id' onChange={(e) => { this.setFieldValue('email', e) }}  customStyle = {[style.newUserInput, style.message]}  disabled = 'disabled'/>
													</FormBlock>
												</FormLine> 
											</personalProfile>:
											<personalProfile style = {[style.personalProfile]} >
												<FormLine style = {[style.displayInline]} >
													<FormBlock title='E-mail Id' titleCustomStyle= {[style.label, style.bold, style.marginTop]} validationStatus = {this.state.emailStatus}>
														
														<FormBlock title={form.data.email} titleCustomStyle= {style.label} />
													</FormBlock>
												</FormLine> 
											</personalProfile>
											}
							
										</imageSection>
												<designationlabel className='col-xs-12 col-sm-12 col-md-12'>
												<FormLine>
													<FormBlock title='Designation' titleCustomStyle= {[style.label, style.bold]} validationStatus = {this.state.companyRoleStatus}>
														{this.state.profile==true ?
														<FormInput type='text' value={form.data.companyRole} placeholder='Designation' onChange={(e) => { this.setFieldValue('companyRole', e) }} customStyle = {[style.newUserInput, style.designation]} />
														:
														<FormBlock title={form.data.companyRole} titleCustomStyle= {style.label} />
														}
													</FormBlock>
												</FormLine>
												</designationlabel>
												
												
										<btn className='col-xs-12 col-sm-12 col-md-12' style = {[style.button, style.displayBlock, style.textAlignRight]}>
										{this.state.profile==true ? <Button type='submit'  customStyle = {[style.btnSave, style.redBtn]} onClick={(e) => { this.cancel(e) }} isWorking={false} text='Cancel'  />:''}
										{this.state.profile==true ?
											<Button type='submit'  customStyle = {[style.btnSave, style.greenBtn]} onClick={(e) => { this.submit(e) }} text='Save Changes' />
											:
											<Button type='submit'  customStyle = {[style.btnSave, style.greenBtn]} onClick={(e) => { this.edit(e) }} isWorking={false} text='Edit'  />
											}
										  
										</btn>
										</newuser>
									</userWrapper>
								</contentSectionMiddle>
							</rowDiv>
						</contentTop>
					</contentSection>	
				</wrapper>
    )
  }
}

MyProfileDashboard.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
	form: state.myProfileDashboard
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(MyProfileDashboard))
