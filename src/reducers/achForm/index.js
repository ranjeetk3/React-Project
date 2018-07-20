let defaultState = {
  isSubmitting: false,
  data: {
		bankName: '',
		accountNumber: '',
		confirmAccountNumber: '',
		routingNumber: '',
		confirmRoutingNumber: '',
		promoCode: ''
  },
  achData:null
}

function achForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_ACH_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "ACH_FORM_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "ACH_FORM_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "ACH_FORM_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
				achData: action.payload.response.status
      })
		case "RESET_FORM":
		 return Object.assign({}, state, {
			isSubmitting: false,
			data:defaultState.data
		})
    default:
      return state
  }
}

export default achForm