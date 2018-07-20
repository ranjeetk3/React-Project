let defaultState = {
  isShowing: false,
  type: null,
  message: ''
}

function modal(state = defaultState, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return Object.assign({}, state, {
        isShowing: true,
        type: action.payload.type || null,
        message: action.payload.message
      })
    case "SHOW_ERROR_MODAL":
      return Object.assign({}, state, {
        isShowing: true,
        type: 'error',
        message: action.payload.error
      })
    case "HIDE_MODAL":
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }
}

export default modal