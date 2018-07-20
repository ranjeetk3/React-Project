let defaultState = {
isSubmitting: false,
  invoiceData: [],
	data: {
		startDate:'',
		endDate:'',
		pastData:''
	}
}

function invoice(state = defaultState, action) {
  switch (action.type) {
	case "SET_INVOICE_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
	case "INVOICE_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })  
    case "INVOICE_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "INVOICE_SUCCEEDED":
      return Object.assign({}, state, {
        invoiceData:action.payload.response.data,
		isSubmitting: false
      })
	case "INVOICE_PAGINATION_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "INVOICE_PAGINATION_SUCCEEDED":
      return Object.assign({}, state, {
        invoiceData:action.payload.response.data,
		isSubmitting: false
      })
	case "INVOICE_SEARCH_DATA_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "INVOICE_SEARCH_DATA_SUCCEEDED":
      return Object.assign({}, state, {
        invoiceData:action.payload.response.data,
		isSubmitting: false
      })
	case "INVOICE_LAST_MONTH_SEARCH_DATA_FAILED":
      return Object.assign({}, state, {
	  isSubmitting: false
      })
    case "INVOICE_LAST_MONTH_SEARCH_DATA_SUCCEEDED":
      return Object.assign({}, state, {
        invoiceData:action.payload.response.data,
		isSubmitting: false
      })	
		
			
    default:
      return state
  }
}

export default invoice