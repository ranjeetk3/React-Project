let defaultState = {
  isSubmitting: false,
  data: {
    name: '',
    street_1: '',
    street_2: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
    extension: '',
    faxNumber: '',
    ein: '',
    npi: '',
    medicareNumber: '',
    medicaidNumber: ''
  },
  companies:[],
   messageStatus : {
		status:'',
		message:''
	}
}

function companyDetailsForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_COMPANYINFO_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    break
    case "COMPANY_INFORMATION_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "COMPANY_INFORMATION_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false,
	   messageStatus : {
			status:0,
			message:action.payload.error
		}
     })
    case "COMPANY_INFORMATION_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false,
	   messageStatus : {
			status:1,
			message:'Saved succesfully.'
		}
     })
     case "ONBOARDING_COMPANIES_GET_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "ONBOARDING_COMPANIES_GET_SUCCEEDED":
     return Object.assign({}, state, {
       companies: action.payload.response,
       isSubmitting: false
     })
    default:
      return state
  }
}

export default companyDetailsForm