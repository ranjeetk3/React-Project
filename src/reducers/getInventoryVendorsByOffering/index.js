let defaultState = {
  isSubmitting: false,
  data:null,
	offering:null
}

function getInventoryVendorsByOffering(state = defaultState, action) {
  switch (action.type) {
		case "SET_INVENTORY_VENDORS_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "GET_INVENTORY_VENDORS_BY_OFFERING_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "GET_INVENTORY_VENDORS_BY_OFFERING_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "GET_INVENTORY_VENDORS_BY_OFFERING_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
				data: action.payload.response.data
      })
    default:
      return state
  }
}

export default getInventoryVendorsByOffering