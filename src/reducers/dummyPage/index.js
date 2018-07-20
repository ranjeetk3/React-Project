let defaultState = {
  currentPage: 'Admin'
}

function dummyPage(state = defaultState, action) {
  switch (action.type) {
    case "DUMMY_PAGE":
      return Object.assign({}, state, {
        currentPage: action.payload.response
      })
    default:
      return state
  }
}

export default dummyPage
