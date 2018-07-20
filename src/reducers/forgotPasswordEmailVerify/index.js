let defaultState = {
  isSubmitting: false,
  error:null,
  data: {
    securityQuestionFirst: '',
    securityQuestionSecond: '',
    securityQuestionThird: '',
    securityAnswerFirst: '',
    securityAnswerSecond: '',
    securityAnswerThird: ''
  },
  userData:null
}

function forgotPasswordEmailVerify(state = defaultState, action) {
  switch (action.type) {
    case "SET_FORGET_PASSWORD_QUESTIONS_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "FORGET_PASSWORD_EMAIL_VERIFICATION_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
        error: e.message
      })
    case "FORGET_PASSWORD_EMAIL_VERIFICATION_SUCCEEDED":
       return Object.assign({}, state, {
        isSubmitting: false,
        userData: action.payload.response.data
      })
    default:
      return state
  }
}

export default forgotPasswordEmailVerify