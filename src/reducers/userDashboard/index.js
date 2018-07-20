let defaultState = {
  isSubmitting: false,
	data:null,
	userDashboardDetails:null
}

function userDashboard(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER_DASHBOARD_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "USER_DASHBOARD_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "USER_DASHBOARD_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "USER_DASHBOARD_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		userDashboardDetails: action.payload.response.data
      })
    default:
      return state
  }
}

export default userDashboard