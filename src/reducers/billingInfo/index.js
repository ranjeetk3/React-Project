let defaultState = {
isSubmitting: false,
  billingData: [],
  accountData:[]
}

function billingInfo(state = defaultState, action) {
  switch (action.type) {
	case "CARD_DETAIL_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })  
    case "CARD_DETAIL_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "CARD_DETAIL_SUCCEEDED":
      return Object.assign({}, state, {
        billingData:action.payload.response.data,
		isSubmitting: false
      })
	case "ACCOUNT_DETAIL_FAILED":
      return Object.assign({}, state, {
      })
    case "ACCOUNT_DETAIL_SUCCEEDED":
      return Object.assign({}, state, {
        accountData:action.payload.response.data
      })
    default:
      return state
  }
}

export default billingInfo