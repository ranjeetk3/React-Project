let defaultState = {
  isSubmitting: false,
  error: null
}

function passwordResetRequestVerificationForm(state = defaultState, action) {
  switch (action.type) {
    case "PASSWORD_RESET_REQUEST_VERIFICATION_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "PASSWORD_RESET_REQUEST_VERIFICATION_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
        error: action.payload.error
      })
    case "PASSWORD_RESET_REQUEST_VERIFICATION_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default passwordResetRequestVerificationForm