let defaultState = {
  isSubmitting: false,
  data:null,
}

function getUserModulePermission(state = defaultState, action) {
  switch (action.type) {
    case "GET_USER_MODULE_PERMISSION_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "GET_USER_MODULE_PERMISSION_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "GET_USER_MODULE_PERMISSION_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "GET_USER_MODULE_PERMISSION_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
				data: action.payload.response.data
      })
    default:
      return state
  }
}

export default getUserModulePermission