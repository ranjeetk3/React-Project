let defaultState = {
  isSubmitting: false,
  data:null,
}

function getProductByCategories(state = defaultState, action) {
  switch (action.type) {
    case "GET_PRODUCT_BY_CATAGORIES_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "GET_PRODUCT_BY_CATAGORIES_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "GET_PRODUCT_BY_CATAGORIES_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
        data: action.payload.response.data
      })
    default:
      return state
  }
}

export default getProductByCategories