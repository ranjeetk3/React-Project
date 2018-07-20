let defaultState = {
  isSubmitting: false,
  data: {
    company_name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    sales_phone: '',
    support_phone: '',
    toll_free_phone: '',
    fax: '',
    email_address: '',
    website: '',
    offering_name: '',
	category_name: ''
  }
}

function addInventoryVendor(state = defaultState, action) {
  switch (action.type) {
    case "SET_Add_INVENTORY_VENDORS_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    break
    case "Add_INVENTORY_VENDORS_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "Add_INVENTORY_VENDORS_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "Add_INVENTORY_VENDORS_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
	case "CLEAR_FORM_FOR_INVENTORY_VENDORS":
     return Object.assign({}, state, {
       isSubmitting: false,
		data:defaultState.data
     }) 
    case "GET_INVENTORY_VENDOR_BY_ID_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false,
		data: action.payload.response.data
     })
    default:
      return state
  }
}

export default addInventoryVendor