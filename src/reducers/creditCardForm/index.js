let defaultState = {
  isSubmitting: false,
  data: {
    cardName: '',
		cardNumber: '',
		expiryMonth: '',
		expiryYear: '',
		cvc: '',
		promoCode: ''
  },
  cardData:null
}

function creditCardForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_CREDITCARD_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "CREDITCARD_FORM_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "CREDITCARD_FORM_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "CREDITCARD_FORM_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
				cardData: action.payload.response.status
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

export default creditCardForm