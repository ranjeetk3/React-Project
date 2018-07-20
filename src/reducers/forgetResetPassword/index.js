let defaultState = {
  isSubmitting: false,
  data: {
    password: '',
    confirmPassword: ''
  }
}

function forgetResetPassword(state = defaultState, action) {
  switch (action.type) {
    case "SET_FORGET_RESET_PASSWORD_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "FORGET_RESET_PASSWORD_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "FORGET_RESET_PASSWORD_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "FORGET_RESET_PASSWORD_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default forgetResetPassword