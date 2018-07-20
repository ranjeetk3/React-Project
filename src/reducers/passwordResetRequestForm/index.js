let defaultState = {
  isSubmitting: false,
  data: {
    emailAddress: '',
  },
  message:'',
  type: null,
}

function passwordResetRequestForm(state = defaultState, action) {
  switch (action.type) {
    case "PASSWORD_RESET_REQUEST_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
    })
    case "PASSWORD_RESET_REQUEST_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
    })
    case "PASSWORD_RESET_REQUEST_FAILED":
      return Object.assign({}, state, {
        type: 'error',
        message: action.payload.error,
        isSubmitting: false
      })
    default:
      return state
  }
}

export default passwordResetRequestForm