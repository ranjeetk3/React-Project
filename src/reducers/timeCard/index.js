let defaultState = {
  resultStatus:false,
  isSubmitting:false,
  data: []
}

function timeCard(state = defaultState, action) {
  switch (action.type) {
	case "TIME_CARD_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "TIME_CARD_FAILED":
      return Object.assign({}, state, {
        resultStatus: true,
		isSubmitting:false
    })
    case "TIME_CARD_SUCCEEDED":
      return Object.assign({}, state, {
        resultStatus:true,
		isSubmitting:false,
        data: action.payload.response.data
    })
    default:
      return state
  }
}

export default timeCard