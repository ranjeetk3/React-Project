let defaultState = {
  isSubmitting: false,
  data: {
    securityQuestionFirst: '',
    securityQuestionSecond: '',
    securityQuestionThird: '',
    securityAnswerFirst: '',
    securityAnswerSecond: '',
    securityAnswerThird: ''
  },
  questions:[],
  messageStatus : {
		status:'',
		message:''
	}
}

function onboardingSecurityQuestionsForm(state = defaultState, action) {
  switch (action.type) {
    case "SET_ONBOARDING_QUESTIONS_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    break
    case "ONBOARDING_QUESTIONS_STARTED":
      return Object.assign({}, state, {
       isSubmitting: true
      })
    case "ONBOARDING_QUESTIONS_GET_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "ONBOARDING_QUESTIONS_GET_SUCCEEDED":
      return Object.assign({}, state, {
        questions: action.payload.response,
        isSubmitting: false
      })
    case "ONBOARDING_QUESTIONS_SAVE_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:0,
			message:action.payload.error
		}
      })
    case "ONBOARDING_QUESTIONS_SAVE_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false,
		messageStatus : {
			status:1,
			message:'Saved succesfully.'
		}
      })
    default:
      return state
  }
}

export default onboardingSecurityQuestionsForm