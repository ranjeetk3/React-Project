let defaultState = {
  isSubmitting: false,
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

function addManufacturer(state = defaultState, action) {

  switch (action.type) {
    case "SET_ADD_MANUFACTURER_FIELD_VALUE":
      const update = {}
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
        isSubmitting: false,
		data:action.payload.response.data
      })
		case "CLEAR_FORM_FOR_MANUFACTURER":
     return Object.assign({}, state, {
       isSubmitting: false,
		data:defaultState.data
     }) 
		case "DELETE_MANUFACTURER_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		data:action.payload.response.data
      })
		case "GET_MANUFACTURER_BY_ID_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		data:action.payload.response.data
      })
		
    default:
      return state
  }
}

export default addManufacturer