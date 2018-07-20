let defaultState = {
  isSubmitting: false,
  data:[],
  
  packageData:{
	"id" : "",
	"product_code" : "",
	"name" : "",
	"description" : "",
	"price" : "",
	"picture" : ""
  },
  packageItem: []
}

function getPackage(state = defaultState, action) 
{
    switch (action.type) 
    {
		case "SET_UPDATE_PACKAGE_FIELD_VALUE":
		  const update = {}
		  update[action.params.field] = action.params.value
		  return Object.assign({}, state, {
		  packageData: Object.assign({}, state.packageData, update)
		})
        case "GET_PACKAGE_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_PACKAGE_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_PACKAGE_SUCCEEDED":
            return Object.assign({}, state, {
	           data: action.payload.response.data
            })
		case "GET_PACKAGE_ITEM_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_PACKAGE_ITEM_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_PACKAGE_ITEM_SUCCEEDED":
			return Object.assign({}, state, {
	           packageData: action.payload.response.data.packageDataDetails,
			   packageItem : action.payload.response.data.packageItem
            })
		case "UPDATE_PACKAGE_FAILED":
			return Object.assign({}, state, {
            isSubmitting: false
            })
        case "UPDATE_PACKAGE_SUCCEEDED":
			return Object.assign({}, state, {
	           packageData: action.payload.response.data
            })
		case "DELETE_PACKAGE_FAILED":
			return Object.assign({}, state, {
            isSubmitting: false
            })
        default:
            return state
    }
}

export default getPackage