let defaultState = {
  isSubmitting: false,
  data: {
    emailAddress: ''
  }
}

function forgotPasswordForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_FORGET_PASSWORD_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "FORGET_PASSWORD_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "FORGET_PASSWORD_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "FORGET_PASSWORD_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default forgotPasswordForm