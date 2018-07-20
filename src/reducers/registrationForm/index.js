let defaultState = {
  isSubmitting: false,
  data: {
    salutation: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    emailAddressConfirmation: '',
    password: '',
    passwordConfirmation: '',
    companyRole: ''
  },
	messageStatus : {
		status:'',
		message:''
	}
}

function registrationForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_SIGNUP_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "SIGNUP_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "SIGNUP_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "SIGNUP_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'Saved succesfully.'
		}
      })
    default:
      return state
  }
}

export default registrationForm