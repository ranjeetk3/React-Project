let defaultState = {
  user: {},
  userId: {},
  greeting: "hi there!",
  passwordResetUser: {},
  loginTokenDetails: {},
  companyIdForSoftwareOptions:{}
}

function session(state = defaultState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        greeting: (state.greeting === "hi there!") ? "howdy!" : "hi there!"
      })
    case 'RESET_PASSWORD_VERIFIED_EMAIL_SUCCESS':
      return Object.assign({}, state, {
        passwordResetUser: action.payload.response
      })
	case 'FORGET_PASSWORD_EMAIL_VERIFICATION_SUCCEEDED':
      return Object.assign({}, state, {
        userId: action.payload.response
      }) 
	 case 'GET_USER_MODULE_PERMISSION_VALUE':
      return Object.assign({}, state, {
        allAccess: action.params.value
      })
	 case "LOGIN_SUCCEEDED":
      return Object.assign({}, state, {
        loginTokenDetails: action.payload.response.data
      })
	 case "SOFTWARE_OPTIONS_GET_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
        companyIdForSoftwareOptions: action.payload.response.data
      })
    default:
      return state
  }
}

export default session