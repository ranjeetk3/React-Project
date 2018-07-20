import fetch from 'isomorphic-fetch'
import { LYFE_CORE_API_URL } from '../../constants'

export default {

  postUser: function(user) {
    return fetch(LYFE_CORE_API_URL + '/users?salutation='+user.salutation+'&firstName='+user.firstName+'&lastName='+user.lastName+'&phoneNumber='+user.phoneNumber+'&email='+user.email+'&password='+user.password+'&companyRole='+user.companyRole, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 226: 
          throw new Error('The email you entered is already registered.')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
 postEmailVerification: function(validationData) {
    var email = validationData.email 
    var token = validationData.token
    return fetch(LYFE_CORE_API_URL + '/email-verification/?email='+email+'&token='+token, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          throw new Error('Thank you. Your email is now verified.')
          break
        case 451: 
          throw new Error('This email address has already been verified.')
          break
        case 404: 
          throw new Error('The link you clicked is not valid.')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
  postPasswordResetRequestVerification: function(validationData) {
    return fetch(LYFE_CORE_API_URL + '/verify/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: validationData.email,
        token: validationData.token
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 201: 
          throw new Error('The email you entered is already registered.')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  getUserById: function(userToken) {
    return fetch(LYFE_CORE_API_URL + '/users/' + userToken.userId, { // Tested with core API integrated environment.
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': userToken.sessionToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('User not found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  postSaveCompanyInformation: function(companyDetails) {
    return fetch(LYFE_CORE_API_URL + '/company/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+companyDetails.loginToken
      },
      body: JSON.stringify([{
		onboadingStep: 1,
        name: companyDetails.name,
        street_1: companyDetails.street_1,
        street_2: companyDetails.street_2,
        city: companyDetails.city,
        state: companyDetails.state,
        postalCode: companyDetails.postalCode,
        phoneNumber: companyDetails.phoneNumber,
        extension: companyDetails.extension,
        faxNumber: companyDetails.faxNumber,
        ein: companyDetails.ein,
        npi: companyDetails.npi,
        medicareSupplier: companyDetails.medicareNumber,
        //medicaidNumber: companyDetails.medicaidNumber,
        latitude:'12344.6',
        longitude:'12344.9'
		
      }])
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 226: 
          throw new Error('EIN number is already exist.')
          break
        case 500: 
          throw new Error('Database error.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  
  getForgotPasswordQuestions: function(userDetails) {
    return fetch(LYFE_CORE_API_URL + '/security-questions-user/' + userDetails.id, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('not found question')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
  
  postSecurityAnswer: function(securityAnswer) {
    return fetch(LYFE_CORE_API_URL + '/verify-security-answers/' + securityAnswer.id, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({answer :[
        {questionId: securityAnswer.securityQuestionFirst, answer: securityAnswer.securityAnswerFirst},
        {questionId: securityAnswer.securityQuestionSecond, answer: securityAnswer.securityAnswerSecond},
        {questionId: securityAnswer.securityQuestionThird, answer: securityAnswer.securityAnswerThird}
      ]})
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  
    postPasswordReset: function(passwordReset) {
    return fetch(LYFE_CORE_API_URL + '/password/reset/'+ passwordReset.id +'?password='+ passwordReset.password, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  
    forgetPasswordEmailVerification: function(passwordEmailVerification) {
		var email = passwordEmailVerification.email 
		var token = passwordEmailVerification.token
    return fetch(LYFE_CORE_API_URL + '/email-verification/?email='+email+'&token='+token, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('The link you clicked is not valid.')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
  
  signUpEmailVerification: function(signUpEmailVerify) {
		var email = signUpEmailVerify.email 
		var token = signUpEmailVerify.token
    return fetch(LYFE_CORE_API_URL + '/email-verification/?email='+email+'&token='+token, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('The link you clicked is not valid.')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
  
  
  
  postResetPasswordVerifyEmail: function(user) {
    return fetch(LYFE_CORE_API_URL + '/email/validate/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,		
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('Email address not found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  postLoginUser: function(user) {
    return fetch(LYFE_CORE_API_URL + '/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password		
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('Unauthorized (incorrect user name and/or password)')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  getOnboardingSecurityQuestions: function(accessToken) {
    return fetch(LYFE_CORE_API_URL + '/security-questions' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+accessToken.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No security question is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  postOnboardingSecurityQuestions: function(securityData) {
    return fetch(LYFE_CORE_API_URL + '/users/security-answers/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+securityData.loginToken
      },
      body: JSON.stringify({answer :[
        {questionId: securityData.securityQuestionFirst, answer: securityData.securityAnswerFirst},
        {questionId: securityData.securityQuestionSecond, answer: securityData.securityAnswerSecond},
        {questionId: securityData.securityQuestionThird, answer: securityData.securityAnswerThird}
      ]}, {onboardingStep: 2})
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('User does not found.')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  getOnboardingBranches: function(parentCompanyDetails) {
    return fetch(LYFE_CORE_API_URL + '/company/' + parentCompanyDetails.companyId + '/branch-list', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ parentCompanyDetails.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200:
        case 404:
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
   postCreditCardForm: function(creditDetails) {
    return fetch(LYFE_CORE_API_URL + '/users/payment-by-card', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+creditDetails.loginToken
      },
      body: JSON.stringify(creditDetails)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 226:
          break
        default: 
          break
      } 
      return response.json()
    })
  },
	
	postAchForm: function(achDetails) {
    return fetch(LYFE_CORE_API_URL + '/users/payment-by-account', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+achDetails.loginToken
      },
      body: JSON.stringify(achDetails)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 226:
        default: 
          break
      } 
      return response.json()
    })
  },
  	postBranchLocationForm: function(companyBranchDetails) {
    return fetch(LYFE_CORE_API_URL + '/company', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+companyBranchDetails.loginToken
      },
      body: JSON.stringify(companyBranchDetails.userDetails)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('Company Branch Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  
   postUserDashboard: function(userId) {
    return fetch(LYFE_CORE_API_URL + '/page/permissions/' + userId.id, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	

	
	postDemoRequest: function(demoRequestDetails) {
  return fetch(LYFE_CORE_API_URL +'/demo-request?firstName='+demoRequestDetails.firstName+'&lastName='+demoRequestDetails.lastName+'&phoneNumber='+demoRequestDetails.phoneNumber+'&email='+demoRequestDetails.email+'&type='+demoRequestDetails.type, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 201: 
          break
        default: 
          break
      } 
      return response.json()
    })
  },
	
	postAdminHippaAgreements: function(adminHippaDetails) {
  return fetch(LYFE_CORE_API_URL +'/documents', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
		 body:JSON.stringify(adminHippaDetails)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 201: 
          break
        default: 
          break
      } 
      return response.json()
    })
  },
	
	 getUsers: function(userDetails) {
    return fetch(LYFE_CORE_API_URL + '/user-profile', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+userDetails.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('404 error')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
	 
	updateUsers: function(updateUserDetails) {
  return fetch(LYFE_CORE_API_URL +'/users-update/?firstName='+updateUserDetails.firstName+'&lastName='+updateUserDetails.lastName+'&phoneNumber='+updateUserDetails.phoneNumber+'&companyRole='+updateUserDetails.companyRole+'&salutation='+updateUserDetails.salutation, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+updateUserDetails.loginToken
      },
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 201: 
          break
        default: 
          break
      } 
      return response.json()
    })
  }, 
	
	getUserModulePermission: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/modulePermissions' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	
	getOnboardingCompanies: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/company' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	
	postOnboardingUsers: function(userDetails) {
    return fetch(LYFE_CORE_API_URL + '/users/add-employee', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+userDetails.loginToken
      },
      body: JSON.stringify(userDetails.jsonUsersArray)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('add employee Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	getInventoryVendors: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/vendor' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	postInventoryVendor: function(inventoryVendorDetails) {
    return fetch(LYFE_CORE_API_URL + '/vendor', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + inventoryVendorDetails.loginToken
      },
      body: JSON.stringify({
				  companyName:inventoryVendorDetails.companyName,
				  address:inventoryVendorDetails.address,
				  city:inventoryVendorDetails.city,
				  state:inventoryVendorDetails.state,
				  zip:inventoryVendorDetails.zip,
				  country:inventoryVendorDetails.country,
				  salesPhone:inventoryVendorDetails.salesPhone,
				  emailAddress:inventoryVendorDetails.emailAddress,
				  vendorOfferingId:inventoryVendorDetails.vendorOfferingId,
				  vendorCategoryId:inventoryVendorDetails.vendorCategoryId,
				  supportPhone:inventoryVendorDetails.supportPhone,
				  tollFreePhone:inventoryVendorDetails.tollFreePhone,
				  fax:inventoryVendorDetails.fax,
				  website:inventoryVendorDetails.website
	  })
	  
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('add employee Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	getInventoryVendorsByCategory: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/vendor/categories' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	getInventoryVendorsByOffering: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/vendor/offerings' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	deleteInventoryVendorsById: function(vendorId) {
    return fetch(LYFE_CORE_API_URL + '/vendor/'+ vendorId.id , {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + vendorId.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
	getInventoryVendorsById: function(vendorId) {
    return fetch(LYFE_CORE_API_URL + '/vendor/'+ vendorId.id , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + vendorId.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  updateInventoryVendorsById: function(inventoryVendorDetails) {
    return fetch(LYFE_CORE_API_URL + '/vendor/'+ inventoryVendorDetails.id , {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + inventoryVendorDetails.loginToken
      },
	   body: JSON.stringify({
				  companyName:inventoryVendorDetails.companyName,
				  address:inventoryVendorDetails.address,
				  city:inventoryVendorDetails.city,
				  state:inventoryVendorDetails.state,
				  zip:inventoryVendorDetails.zip,
				  country:inventoryVendorDetails.country,
				  salesPhone:inventoryVendorDetails.salesPhone,
				  //emailAddress:inventoryVendorDetails.emailAddress,
				  vendorOfferingId:inventoryVendorDetails.vendorOfferingId,
				  vendorCategoryId:inventoryVendorDetails.vendorCategoryId,
				  supportPhone:inventoryVendorDetails.supportPhone,
				  tollFreePhone:inventoryVendorDetails.tollFreePhone,
				  fax:inventoryVendorDetails.fax,
				  website:inventoryVendorDetails.website
	  })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  
  postPermissionUsers: function(userDetails) {
    return fetch(LYFE_CORE_API_URL + '/users/add-employee', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + userDetails.loginToken
      },
      body: JSON.stringify(userDetails.jsonUsersArray)
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('add employee Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  getTimeCard: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/timecard', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404: 
          throw new Error('404 error')
          break
        default: 
          throw new Error('The server encountered an error. Please try again.')
          break
      } 
      return response.json()
    })  
  },
   updateSoftwareOptions: function(data) {
    return fetch(LYFE_CORE_API_URL + '/update-software-options', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+data.loginToken
      },
      body: JSON.stringify({
        user_id: data.userId,
        company_id: data.companyId,
        modules: data.softwareOptionsArray
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  getSoftwareOptions: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/software-options' , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },  
  getBillingInfo: function(loginToken) {	
    return fetch(LYFE_CORE_API_URL + '/card-payment', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	getInvoices: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/invoice', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	
	getDateRangeSearchData: function(data) {	
    return fetch(LYFE_CORE_API_URL + '/invoice?start_date=' + data.startDate+'&end_date=' + data.endDate, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+data.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  
   getManufacturer: function(loginToken) {	
    return fetch(LYFE_CORE_API_URL + '/manufacturer', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	
	addManufacturer: function(addManufacturerDetails) {	
		return fetch(LYFE_CORE_API_URL + '/manufacturer', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+addManufacturerDetails.loginToken
      },
			body: JSON.stringify({
				companyName: addManufacturerDetails.companyName,
				country: addManufacturerDetails.country,
				streetAddress: addManufacturerDetails.streetAddress,
				bldgUnitSuite: addManufacturerDetails.bldgUnitSuite,
				city: addManufacturerDetails.city,
				state: addManufacturerDetails.state,
				salesPhone: addManufacturerDetails.salesPhone,
				zip: addManufacturerDetails.zip,
				emailAddress: addManufacturerDetails.emailAddress,
				supportPhone: addManufacturerDetails.supportPhone,
				tollFreePhone: addManufacturerDetails.tollFreePhone,
				fax: addManufacturerDetails.fax,
				website: addManufacturerDetails.website
			  })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	
	getProducts: function(loginToken) {	
    return fetch(LYFE_CORE_API_URL + '/products', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	deleteManufacturer: function(manufacturerId) {	
    return fetch(LYFE_CORE_API_URL + '/manufacturer/'+manufacturerId.id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ manufacturerId.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	getManufacturerById: function(manufacturerId) {	
    return fetch(LYFE_CORE_API_URL + '/manufacturer/'+manufacturerId.id, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ manufacturerId.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	updateManufacturerById: function(manufacturerDetails) {
    return fetch(LYFE_CORE_API_URL + '/manufacturer/'+manufacturerDetails.id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ manufacturerDetails.loginToken
      },
      body: JSON.stringify({						 
		 companyName: manufacturerDetails.companyName,
		 country: manufacturerDetails.country,
		 streetAddress: manufacturerDetails.streetAddress,
		 bldgUnitSuite: manufacturerDetails.bldgUnitSuite,
		 city: manufacturerDetails.city,
		 state: manufacturerDetails.state,
		 zip: manufacturerDetails.zip,
		 salesPhone: manufacturerDetails.salesPhone,
		 emailAddress: manufacturerDetails.emailAddress,
		 supportPhone: manufacturerDetails.supportPhone,
		 tollFreePhone: manufacturerDetails.tollFreePhone,
		 fax: manufacturerDetails.fax,
		 website: manufacturerDetails.website
			})
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('Manufacturer Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  
	
	getOrders: function() {	
    return fetch(LYFE_CORE_API_URL + '/purchase-list', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	getOrderById: function(orderData) {	
    return fetch(LYFE_CORE_API_URL + '/purchase/'+orderData.id, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	updateOrderById: function(orderDetails) {
    return fetch(LYFE_CORE_API_URL + '/manufacturer/'+orderDetails.id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({						 
			 companyName: manufacturerDetails.companyName,
			 country: manufacturerDetails.country,
			 streetAddress: manufacturerDetails.streetAddress,
			 bldgUnitSuite: manufacturerDetails.bldgUnitSuite,
			 city: manufacturerDetails.city,
			 state: manufacturerDetails.state,
			 zip: manufacturerDetails.zip,
			 salesPhone: manufacturerDetails.salesPhone,
			 emailAddress: manufacturerDetails.emailAddress,
			 supportPhone: manufacturerDetails.supportPhone,
			 tollFreePhone: manufacturerDetails.tollFreePhone,
			 fax: manufacturerDetails.fax,
			 website: manufacturerDetails.website
			})
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('Manufacturer Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  
  postSoftwareOptions: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/software-options' , {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error("Software options didn't create!")
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  
  // All Package APIs
  // Get Inventory List
    getPackage: function(loginToken){
        return fetch(LYFE_CORE_API_URL + '/package' , 
        {
            method: 'get',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization':'Bearer '+loginToken
            }
        })
        .then(response => 
        {
            const httpStatus = response.status
            switch (httpStatus) 
            {
                case 200: 
                  break
                case 404:
                  throw new Error('No data is found in record.')
                  break
                default: 
                  throw new Error('Server error.Please contact support.')
                  break
            } 
            return response.json()
        })
    },
  
  // Delete Package By Id
    deletePackage: function(packageId) {
    return fetch(LYFE_CORE_API_URL + '/package/'+packageId.id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+packageId.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No data is found in record.')
          break
        case 226:
          throw new Error('Some Error!.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
 
 // Get Package Items
	getPackageItem: function(packageId){
        return fetch(LYFE_CORE_API_URL + '/package/'+packageId.id , 
        {
            method: 'get',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization':'Bearer '+packageId.loginToken
            }
        })
        .then(response => 
        {
            const httpStatus = response.status
            switch (httpStatus) 
            {
                case 200: 
                  break
                case 404:
                  throw new Error('No data is found in record.')
                  break
                default: 
                  throw new Error('Server error.Please contact support.')
                  break
            } 
            return response.json()
        })
    }, 
  
  // Get Product 
	getProduct: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/product',  {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No product found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
 
   // Save Package and package Item in database
    postPackage: function(packageDetails) {
	return fetch(LYFE_CORE_API_URL + '/package', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+packageDetails.loginToken
      },
     body: JSON.stringify({ 
        product_code: packageDetails.product_code,
        name: packageDetails.name,
        product_code: packageDetails.product_code,
        description: packageDetails.description,
        price: packageDetails.price,
		picture: packageDetails.picture,
        product_details: packageDetails.product_details        
        })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('package Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  }, 
  
  // Update Package by Id
	updatePackage: function(updatePackageDetails) {
    return fetch(LYFE_CORE_API_URL + '/package/'+updatePackageDetails.id, {
    method: 'put',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+updatePackageDetails.loginToken
      },
     body: JSON.stringify({ 
        product_code: updatePackageDetails.product_code,
        name: updatePackageDetails.name,
        description: updatePackageDetails.description,
        price: updatePackageDetails.price,
		picture: null //packageDetails.picture
        })
    }).then(response => {
    const httpStatus = response.status
    switch (httpStatus) {
    case 200: 
      break
    case 404:
      throw new Error('Package Details update error')
      break
    default: 
      throw new Error('Server error.Please contact support.')
      break
    } 
    return response.json()
    })
    },
	
	
	// Update Package Item by Package Id
	updatePackageItems: function(updatePackageItemDetails) {
    return fetch(LYFE_CORE_API_URL + '/package-items/'+updatePackageItemDetails.id, {
    method: 'put',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+updatePackageItemDetails.loginToken
      },
     body: JSON.stringify({ 
        price: updatePackageItemDetails.price,
        product_details: updatePackageItemDetails.product_details    
        })
    }).then(response => {
    const httpStatus = response.status
    switch (httpStatus) {
    case 200: 
      break
    case 404:
      throw new Error('Package Item Details update error')
      break
    default: 
      throw new Error('Server error.Please contact support.')
      break
    } 
    return response.json()
    })
    },
	getProducts: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/product',  {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No product found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  getProductCategories: function(loginToken) {
    return fetch(LYFE_CORE_API_URL + '/product/categories',  {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No product category found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
    postInventoryProduct: function(productDetails) {
	return fetch(LYFE_CORE_API_URL +'/product', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+productDetails.loginToken
      },
      body: JSON.stringify({
         name : productDetails.name,
		 productCategories : productDetails.category,
		 price : productDetails.price,
		 number : 'ST174001',
		 manufacturerId : 1,
		 vendorId : [1,2],
		 imageArray : productDetails.imgArray
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('Error in saving product.')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
    getProductById: function(id) {
    return fetch(LYFE_CORE_API_URL + '/product/' + id.id,  {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+id.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No product found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  deleteProduct: function(id) {
    return fetch(LYFE_CORE_API_URL + '/product/' + id.id,  {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+id.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('No product found.')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
    putInventoryProduct: function(productDetails) {
    return fetch(LYFE_CORE_API_URL + '/product/' + productDetails.id,  {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+productDetails.loginToken
      },
      body: JSON.stringify({
		name : productDetails.name,
		productCategories : productDetails.category,
		price : productDetails.price,
		number : 'ST174001',
		manufacturerId : 1,
		vendorId : [1,2],
		imageArray : productDetails.imgArray
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
  
  // Get Company Address
    getCompanyAddress: function(loginToken){
        return fetch(LYFE_CORE_API_URL + '/company-address' , 
        {
            method: 'get',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization':'Bearer ' + loginToken
            }
        })
        .then(response => 
        {
            const httpStatus = response.status
            switch (httpStatus) 
            {
                case 200: 
                  break
                case 404:
                  throw new Error('No data is found in record.')
                  break
                default: 
                  throw new Error('Server error.Please contact support.')
                  break
            } 
            return response.json()
        })
    },

   getProductByCategories: function(loginToken){
        return fetch(LYFE_CORE_API_URL + '/product/categories' , 
        {
            method: 'get',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization':'Bearer ' +loginToken
            }
        })
        .then(response => 
        {
            const httpStatus = response.status
            switch (httpStatus) 
            {
                case 200: 
                  break
                case 404:
                  throw new Error('No data is found in record.')
                  break
                default: 
                  throw new Error('Server error.Please contact support.')
                  break
            } 
            return response.json()
        })
    },
	
	
    getProductList: function(productSearchData) {
        return fetch(LYFE_CORE_API_URL + '/product?category_id=' + productSearchData.category_id, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
        const httpStatus = response.status
        switch (httpStatus) {
          case 200: 
            break
          case 404: 
            throw new Error('not found')
            break
          default: 
            throw new Error('Server error.  Please contact support.')
            break
        } 
      return response.json()
    })  
  },
  
  // Get Inventory List
    getInventory: function(loginToken){
        return fetch(LYFE_CORE_API_URL + '/inventory' , 
        {
            method: 'get',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				'Authorization':'Bearer '+loginToken
            }
        })
        .then(response => 
        {
            const httpStatus = response.status
            switch (httpStatus) 
            {
                case 200: 
                  break
                case 404:
                  throw new Error('No data is found in record.')
                  break
                default: 
                  throw new Error('Server error.Please contact support.')
                  break
            } 
            return response.json()
        })
    },
  
  // Add Inventory
  
 // Add Inventory
	postInventory: function(addInventoryDetails) {
    return fetch(LYFE_CORE_API_URL + '/inventory', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+addInventoryDetails.loginToken
      },
     body: JSON.stringify({ 
        par_min: addInventoryDetails.par_min,
		par_max: addInventoryDetails.par_max,
		auto_reorder_quantity: addInventoryDetails.auto_reorder_quantity,
		is_generic: addInventoryDetails.is_generic,
		is_allowed_dropship_to_patient: addInventoryDetails.is_allowed_dropship_to_patient,
		is_automatic_reorder: addInventoryDetails.is_automatic_reorder,
		is_serialized: addInventoryDetails.is_serialized,
		is_rented: addInventoryDetails.is_rented,
		product_id : addInventoryDetails.product_id,
		status : addInventoryDetails.status,
		depreciation : addInventoryDetails.depreciation,
		condition : addInventoryDetails.condition,
		company_id : 1
        })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 404:
          throw new Error('package Details save error')
          break
        default: 
          throw new Error('Server error.Please contact support.')
          break
      } 
      return response.json()
    })
  },
  //chat API
	getUsersByCmpnyAndPermissions: function(userDetails) {
		return fetch(LYFE_CORE_API_URL + '/users/list/?name='+userDetails.name, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization':'Bearer '+userDetails.loginToken
			}
		}).then(response => {
			const httpStatus = response.status
			switch (httpStatus) {
				case 200: 
					break
				case 404:
					throw new Error('User not found.')
					break
				default: 
					throw new Error('Server error.Please contact support.')
					break
			} 
			return response.json()
		})
	},
	getRecentChatUsers: function(id) {
		return fetch(LYFE_CORE_API_URL + '/recent-chat-users', {
			method: 'get',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization':'Bearer ' + id
			}
		}).then(response => {
			const httpStatus = response.status
			switch (httpStatus) {
				case 200: 
					break
				case 404:
					throw new Error('User not found.')
					break
				default: 
					throw new Error('Server error.Please contact support.')
					break
			} 
			return response.json()
		})
	},
	getAllChatsWithUser: function(userDetails) {
		return fetch(LYFE_CORE_API_URL + '/message-list/' + userDetails.selectUserId,  {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization':'Bearer '+userDetails.loginToken
			}
		}).then(response => {
			const httpStatus = response.status
			switch (httpStatus) {
				case 200: 
					break
				case 404:
					throw new Error('No chat found.')
					break
				default: 
					throw new Error('Server error.Please contact support.')
					break
			} 
			return response.json()
		})
	},
	// Purchase Request
	getCartDetails: function(loginToken) {
		return fetch(LYFE_CORE_API_URL + '/cart', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('Cart Empty')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	deleteCartItemById: function(deletedetails) {	
    return fetch(LYFE_CORE_API_URL + '/cart-item/'+deletedetails.id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ deletedetails.loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	addItemToCart: function(itemDetails) {	
		return fetch(LYFE_CORE_API_URL + '/cart', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer '+ itemDetails.loginToken
      },
			body: JSON.stringify({
        userId: itemDetails.userId,
        productId: itemDetails.productId,
        qty: itemDetails.qty,
        inventoryId: itemDetails.inventoryId
      })
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	getAccountInfo: function(loginToken) {	
    return fetch(LYFE_CORE_API_URL + '/account-payment', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
		'Authorization':'Bearer ' + loginToken
      }
    }).then(response => {
      const httpStatus = response.status
      switch (httpStatus) {
        case 200: 
          break
        case 401: 
          throw new Error('not found')
          break
        default: 
          throw new Error('Server error.  Please contact support.')
          break
      } 
      return response.json()
    })  
  },
	
  }
