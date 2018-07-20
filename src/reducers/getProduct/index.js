let defaultState = {
  isSubmitting: false,
  data:null
}

function getProduct(state = defaultState, action)
{
    switch (action.type) 
    {
        case "GET_PRODUCT_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_PRODUCT_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_PRODUCT_SUCCEEDED":
            return Object.assign({}, state, {
            isSubmitting: false,
	       data: action.payload.response.data
            })
		case "GET_PRODUCT_LIST_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_PRODUCT_LIST_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false,
			data: []
            })
        case "GET_PRODUCT_LIST_SUCCEEDED":
            return Object.assign({}, state, {
            isSubmitting: false,
	        data: action.payload.response.data
            })
        default:
            return state
    }
}

export default getProduct