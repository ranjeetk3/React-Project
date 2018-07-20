let defaultState = {
  userData: ''
}

function landingPage(state = defaultState, action) {
  switch (action.type) {
    case "LANDING_USER_DETAILS":
      return Object.assign({}, state, {
        userData: action.payload.response
      })
    default:
      return state
  }
}

export default landingPage
