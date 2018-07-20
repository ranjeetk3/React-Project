let defaultState = {
  isSubmitting: false,
	error: null,
	resMsg:null,
  data: {
		type: '',
		parentCompany: '',
		branchName: '',
		branchAddress: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
		phoneNumber: '',
		extension: '',
		faxNumber: '',
		companyEmail: '',
		companyWebsite: '',
		einNumber: '',
		npiNumber: '',
		tpiNumber: '',
		medicareSupplierNumber: ''
  },
	users:[],
	messageStatus : {
		status:'',
		message:''
	}
}

function onboardingBranchLocationForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_BRANCH_LOCATION_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "BRANCH_LOCATION_FORM_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "BRANCH_LOCATION_FORM_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		error: action.payload.error,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "BRANCH_LOCATION_FORM_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		resMsg: action.payload.response.status,
		messageStatus : {
			status:1,
			message:'Saved succesfully.'
		}
      })
	case "BRANCH_LOCATION_RESET_FORM":
      return Object.assign({}, state, {
        isSubmitting: false,
		data:defaultState.data,
		users:defaultState.users
				
      })
    default:
      return state
  }
}

export default onboardingBranchLocationForm