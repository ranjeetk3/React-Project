let defaultState = {
  isSubmitting: false,
  error: null
}

function emailVerificationForm(state = defaultState, action) {
  switch (action.type) {    
    case "EMAIL_VERIFICATION_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "EMAIL_VERIFICATION_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
        error: action.payload.error
      })
    case "EMAIL_VERIFICATION_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false     
      })
    default:
      return state
  }
}

export default emailVerificationForm