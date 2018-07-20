let defaultState = {
	isSubmitting : false,
	data : {
		id : '',
		number : '',
		name : '',
		description : '',
		price :'',
		categoryId : '',
		images : []
	},
	messageStatus : {
		status:'',
		message:''
	},
	productData: [],
	categoriesData:[]
}

function productManagement(state = defaultState, action) {
  switch (action.type) {
	case "SET_PRODUCT_FIELD_VALUE":
		const update = {}
		update[action.params.field] = action.params.value
		return Object.assign({}, state, {
			data: Object.assign({}, state.data, update),
			messageStatus : defaultState.messageStatus
		})
	case "PRODUCT_STARTED":
		return Object.assign({}, state, {
			isSubmitting : true,
			messageStatus : defaultState.messageStatus
		})
    case "PRODUCT_FAILED":
		return Object.assign({}, state, {
			productData : [],
			isSubmitting : false
		})
    case "PRODUCT_SUCCEEDED":
		return Object.assign({}, state, {
			productData : action.payload.response.data,
			isSubmitting : false
		})
	case "PRODUCT_CATAGORIES_FAILED":
		return Object.assign({}, state, {
			categoriesData : [],
			isSubmitting : false,
			messageStatus : defaultState.messageStatus
		})
    case "PRODUCT_CATAGORIES_SUCCEEDED":
		return Object.assign({}, state, {
			categoriesData : action.payload.response.data,
			isSubmitting : false,
			messageStatus : defaultState.messageStatus
		})
	case "SAVE_PRODUCT_SUCCEEDED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 1,
				message : 'Product has been save successfully.'
			}
		})
	case "SAVE_PRODUCT_FAILED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 0,
				message : 'There is an error in saving product.'
			}
		})
		case "UPDATE_PRODUCT_SUCCEEDED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 1,
				message : 'Product has been update successfully.'
			}
		})
	case "UPDATE_PRODUCT_FAILED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 0,
				message : 'There is an error in update product.'
			}
		})
	case "PRODUCT_RESET":
		return Object.assign({}, state, {
			isSubmitting : false,
			data : defaultState.data,
			messageStatus : defaultState.messageStatus
		})
	case "GET_PRODUCT_BY_ID_SUCCEEDED":
		return Object.assign({}, state, {
			isSubmitting : false,
			data : action.payload.response.data,
			messageStatus : defaultState.messageStatus
		})
	case "GET_PRODUCT_BY_ID_FAILED":
		return Object.assign({}, state, {
			isSubmitting : false,
			data : defaultState.data,
			messageStatus : defaultState.messageStatus
		})
	case "DELETE_PRODUCT_SUCCEEDED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 1,
				message : 'Product has been delete successfully.'
			} 
		})
	case "DELETE_PRODUCT_FAILED":
		return Object.assign({}, state, {
			isSubmitting : false,
			messageStatus : {
				status : 0,
				message : 'There is an error in deleting product.'
			}
		})
    default:
      return state
  }
}

export default productManagement