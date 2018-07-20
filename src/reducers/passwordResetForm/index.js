let defaultState = {
  isSubmitting: false,
  data: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    emailAddressConfirmation: ''
  }
}

function passwordResetForm(state = defaultState, action) {
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
        isSubmitting: false
      })
    case "SIGNUP_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default passwordResetForm