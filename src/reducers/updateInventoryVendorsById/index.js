let defaultState = {
  isSubmitting: false
}

function updateInventoryVendorsById(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_INVENTORY_VENDOR_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "UPDATE_INVENTORY_VENDOR_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "UPDATE_INVENTORY_VENDOR_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
     
    default:
      return state
  }
}

export default updateInventoryVendorsById