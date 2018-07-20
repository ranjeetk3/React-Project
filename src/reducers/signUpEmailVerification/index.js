let defaultState = {
  isSubmitting: false,
  error:null,
  signUpData:null,
  messageStatus : {
		status:'',
		message:''
	}
}

function signUpEmailVerification(state = defaultState, action) {
  switch (action.type) {
    
    case "SIGNUP_EMAIL_VERIFICATION_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
        messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "SIGNUP_EMAIL_VERIFICATION_SUCCEEDED":
       return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'verified account!'
		},
        signUpData: action.payload.response.data
      })
    default:
      return state
  }
}

export default signUpEmailVerification