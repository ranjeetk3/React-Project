let defaultState = {
  isSubmitting: false,
  manufacturerData: [],
		data: {
			companyName: '',
			country: 'USA',
			streetAddress: '',
			bldgUnitSuite: '',
			city: '',
			state: '',
			zip: '',
			salesPhone: '',
			emailAddress: '',
			supportPhone: '',
			tollFreePhone: '',
			fax: '',
			website: ''
  }
}

function manufacturer(state = defaultState, action) {
  switch (action.type) {
	case "MANUFACTURER_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "MANUFACTURER_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "MANUFACTURER_SUCCEEDED":
      return Object.assign({}, state, {
        manufacturerData:action.payload.response.data,
		isSubmitting: false
      })
	update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "ADD_MANUFACTURER_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "ADD_MANUFACTURER_FAILED":
			return Object.assign({}, state, {
        isSubmitting: false
      })
    case "ADD_MANUFACTURER_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default manufacturer