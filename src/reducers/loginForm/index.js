let defaultState = {
  isSubmitting: false,
  data: {
    email: '',
    password: ''
  },
  messageStatus : {
		status:'',
		message:''
	}
}

function loginForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_LOGIN_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "LOGIN_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "LOGIN_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "LOGIN_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'Logged In succesfully.'
		}
      })
	case "LOGIN_RESET":
      return Object.assign({}, state, {
        isSubmitting: false,
        data:defaultState.data
     })  
    default:
      return state
  }
}

export default loginForm