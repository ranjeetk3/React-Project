let defaultState = {
  productData: [],
	data: {
		name:'',
		number:'',
		price:'',
		vendorName:'',
		manufacturerName:'',
		categoryName:'',
		id:''
	},
	cartDetails:[],
	addCartItem: {
		productId: '',
		userId: '',
		qty: '',
		inventoryId: ''
	}
}

function purchaseRequest(state = defaultState, action) {
  switch (action.type) {
    case "GET_PRODUCT_FAILED":
      return Object.assign({}, state, {
			productData:[]
      })
    case "GET_PRODUCT_SUCCEEDED":
      return Object.assign({}, state, {
        productData:action.payload.response.data
      })
		case "GET_CART_DETAILS_FAILED":
      return Object.assign({}, state, {
			cartDetails:[]
      })
    case "GET_CART_DETAILS_SUCCEEDED":
      return Object.assign({}, state, {
        cartDetails:action.payload.response.data
      })
		case "DELETE_CART_BY_ITEM_ID_FAILED":
      alert(action.payload.error.message)
      return Object.assign({}, state, {
			cartDetails:[]
      })
    case "DELETE_CART_BY_ITEM_ID_SUCCEEDED":
      return Object.assign({}, state, {
        cartDetails:action.payload.response.data
      })
		case "ADD_ITEM_TO_CART_FAILED":
      return Object.assign({}, state, {
			addCartItem:[]
      })
    case "ADD_ITEM_TO_CART_SUCCEEDED":
      return Object.assign({}, state, {
        addCartItem:action.payload.response.addCartItem
      })
    default:
      return state
  }
}

export default purchaseRequest