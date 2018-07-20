let defaultState = {
  userDetails:[]
}

function users(state = defaultState, action) {
  switch (action.type) {
    case "GET_USER_BY_ID_FAILED":
      return Object.assign({}, state, {
        userDetails: []
      })
    case "GET_USER_BY_ID_SUCCEEDED":
      return Object.assign({}, state, {
        userDetails: action.payload.response.data
      })
    default:
      return state
  }
}

export default users