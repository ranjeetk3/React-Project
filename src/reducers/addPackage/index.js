let defaultState = {
  isSubmitting: false,
	data: {
		name: '',
		product_code: '',
		description: '',
		price: '',
		picture: '',
		product_details:''
	}
}

function addPackage(state = defaultState, action) {

  switch (action.type) {
    case "SET_ADD_PACKAGE_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "ADD_PACKAGE_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "ADD_PACKAGE_FAILED":
			return Object.assign({}, state, {
        isSubmitting: false
      })
      case "ADD_PACKAGE_SUCCEED":
        return state
    default:
      return Object.assign({}, state, {
        isSubmitting: false,
        data: {
          name: '',
          product_code: '',
          description: '',
          price: '',
          product_details:''
        }
      })
  }
}

export default addPackage