let defaultState = {
  isSubmitting: false
}

function deleteInventoryVendorsById(state = defaultState, action) {
  switch (action.type) {
    case "DELETE_INVENTORY_VENDOR_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "DELETE_INVENTORY_VENDOR_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "DELETE_INVENTORY_VENDOR_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
     
    default:
      return state
  }
}

export default deleteInventoryVendorsById