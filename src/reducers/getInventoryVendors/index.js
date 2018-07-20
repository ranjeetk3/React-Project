let defaultState = {
  isSubmitting: false,
  data:null,
}

function getInventoryVendors(state = defaultState, action) {
  switch (action.type) {
    case "GET_INVENTORY_VENDORS_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "GET_INVENTORY_VENDORS_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "GET_INVENTORY_VENDORS_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		data: action.payload.response.data
      })
    default:
      return state
  }
}

export default getInventoryVendors