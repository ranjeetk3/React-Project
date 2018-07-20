let defaultState = {
  isSubmitting: false,
  error: null,
  data: {
    securityQuestionFirst: '',
    securityQuestionSecond: '',
    securityQuestionThird: ''
  }
}

function securityQuestionForm(state = defaultState, action) {
 switch (action.type) {
    case "SECURITY_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
        error: action.payload.error
        
      })
    case "SECURITY_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
        response: action.payload.response
       
      })
    default:
      return state
  }
}

export default securityQuestionForm