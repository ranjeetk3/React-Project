let defaultState = {
  isSubmitting: false,
  data:null
}

function getCompaniesAddress(state = defaultState, action) 
{
    switch (action.type) 
    {
        case "GET_COMPANY_ADDRESS_LIST_STARTED":
            return Object.assign({}, state, {
            isSubmitting: true
            })
        case "GET_COMPANY_ADDRESS_LIST_FAILED":
            return Object.assign({}, state, {
            isSubmitting: false
            })
        case "GET_COMPANY_ADDRESS_LIST_SUCCEEDED":
            return Object.assign({}, state, {
            isSubmitting: false,
	       data: action.payload.response.data
            })
        default:
            return state
    }
}

export default getCompaniesAddress