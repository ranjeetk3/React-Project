let defaultState = {
  isSubmitting: false
}

function getInventoryVendorsById(state = defaultState, action) {
  switch (action.type) {
    case "GET_INVENTORY_VENDOR_BY_ID_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "GET_INVENTORY_VENDOR_BY_ID_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "GET_INVENTORY_VENDOR_BY_ID_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
     
    default:
      return state
  }
}

export default getInventoryVendorsById