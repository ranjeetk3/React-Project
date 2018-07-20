let defaultState = {
  isSubmitting: false,
  data:[],
  messageStatus : {
		status:'',
		message:''
	}
}

function softwareOptions(state = defaultState, action) {
  switch (action.type) {
    case "SOFTWARE_OPTIONS_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "SOFTWARE_OPTIONS_SAVE_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "SOFTWARE_OPTIONS_SAVE_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'Update succesfully.'
		}
      })
    case "SOFTWARE_OPTIONS_GET_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "SOFTWARE_OPTIONS_GET_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
        data: action.payload.response.data
      })
    default:
      return state
  }
}

export default softwareOptions