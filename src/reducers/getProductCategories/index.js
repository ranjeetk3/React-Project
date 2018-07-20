let defaultState = {
  isSubmitting: false,
  data:[]
}

function getProductCategories(state = defaultState, action) 
{
    switch (action.type) 
    {
        case "PRODUCT_CATAGORIES_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "PRODUCT_CATAGORIES_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "PRODUCT_CATAGORIES_SUCCEEDED":
            return Object.assign({}, state, {
	           data: action.payload.response.data
            })
        default:
            return state
    }
}

export default getProductCategories