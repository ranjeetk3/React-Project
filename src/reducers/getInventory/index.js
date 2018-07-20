let defaultState = {
    isSubmitting: false,
    data:null,
    manufactureData: null,
    vendorData : null,
	productDescription : null,
    manufactureDataProduct: null,
    vendorDataProduct : null,
    categoryDataProduct : null,
    productName : null,
    manufactureName : null,
    vendorName : null,
    productId : null,
    inventoryData :{
      parMin : null,
      parMax : null,
      autoRender : null,
      depreciation : null,
      generic : false,
      dropship : false,
      render : false,
      serialized : false,
      rented : false,
	  inventoryStatus : null,
	  inventoryCondition : null
    },
    image : null,
    price : null,
    ProductNumber : null,
    addressData: null,
    statusData :null,
    product_id: null,
    product_name:null,
    searchData : {
      product_id : null,
      product_name :null
    }
}

function getInventory(state = defaultState, action) 
{
    switch (action.type) 
    {
        case "SET_INVENTORY_FORM_FIELD_VALUE":
            const update = {}
            update[action.params.field] = action.params.value
            return Object.assign({}, state, {
              searchData: Object.assign({}, state.searchData, update)
            })
        case "SET_INVENTORY_DATA_FORM_FIELD_VALUE":
            const updateData = {}
            updateData[action.params.field] = action.params.value
            return Object.assign({}, state, {
              inventoryData: Object.assign({}, state.inventoryData, updateData)
            })    
        case "GET_INVENTORY_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_INVENTORY_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_INVENTORY_SUCCEEDED":
            return Object.assign({}, state, {
            isSubmitting: false,
	        data: action.payload.response.data
            })
        case "GET_INVENTORY_LIST_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_INVENTORY_LIST_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_INVENTORY_LIST_SUCCEEDED":
            return Object.assign({}, state, {
            isSubmitting: false,
	        data: action.payload.response.data
            })
		case "Add_INVENTORY_STARTED":
			 return Object.assign({}, state, {
			   isSubmitting: true
			 })
		case "Add_INVENTORY_FAILED":
			 return Object.assign({}, state, {
			   isSubmitting: false
			 })
		case "Add_INVENTORY_SUCCEEDED":
			 return Object.assign({}, state, {
			   isSubmitting: false
			 })
		case "CLEAR_FORM_FOR_INVENTORY":
				return Object.assign({}, state, {
				isSubmitting: false,
				data:defaultState.inventoryData
			}) 
        default:
            return state
    }
}

export default getInventory