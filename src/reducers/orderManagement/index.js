let defaultState = {
  OrderData: [],
	data: {
		vendor_id: '',
		vendor_name:'',
		location_id: 'USA',
		shipping_address_id: '',
		billing_address_id: '',
		date_created: '',
		date_expected: '',
		type: '',
		subtotal: '',
		order_status: ''
  }
}

function orderManagement(state = defaultState, action) {
  switch (action.type) {
		case "SET_UPDATE_ORDER_FIELD_VALUE":
      const update = {}
			console.log( action.params.value)
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "ORDERS_FAILED":
      alert(action.payload.error.message)
      return Object.assign({}, state, {
      })
    case "ORDERS_SUCCEEDED":
			console.log(action.payload.response)
      return Object.assign({}, state, {
        OrderData:action.payload.response.data
      })
		case "GET_ORDER_BY_ID_FAILED":
      alert(action.payload.error.message)
      return Object.assign({}, state, {
      })
    case "GET_ORDER_BY_ID_SUCCEEDED":
			console.log(action.payload.response)
      return Object.assign({}, state, {
        OrderData:action.payload.response.data
      })
		case "UPDATE_ORDER_BY_ID_FAILED":
      alert(action.payload.error.message)
      return Object.assign({}, state, {
      })
    case "UPDATE_ORDER_BY_ID_SUCCEEDED":
			console.log(action.payload.response)
      return Object.assign({}, state, {
        OrderData:action.payload.response.data
      })
		case "GET_PURCHASE_REQUEST_BY_ID_FAILED":
      alert(action.payload.error.message)
      return Object.assign({}, state, {
      })
    case "GET_PURCHASE_REQUEST_BY_ID_SUCCEEDED":
			console.log(action.payload.response)
      return Object.assign({}, state, {
        OrderData:action.payload.response.data
      })
    default:
      return state
  }
}

export default orderManagement