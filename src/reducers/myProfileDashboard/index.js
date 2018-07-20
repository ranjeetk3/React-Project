let defaultState = {
  isSubmitting: false,
	data: {
		salutation:'',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		companyRole: ''
	},
	profileData:null,
	messageStatus : {
		status:'',
		message:''
	}
}

function myProfileDashboard(state = defaultState, action) {
  switch (action.type) {
    case "SET_PROFILE_DASHBOARD_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "PROFILE_DASHBOARD_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "PROFILE_DASHBOARD_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "PROFILE_DASHBOARD_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		data: action.payload.response.data
      })
	 case "UPDATE_PROFILE_DASHBOARD_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "UPDATE_PROFILE_DASHBOARD_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'Update succesfully.'
		}
      })
	case "PROFILE_DASHBOARD_RESET_FORM":
       return Object.assign({}, state, {
        isSubmitting: false,
		data:defaultState.data
      })
    default:
      return state
  }
}

export default myProfileDashboard