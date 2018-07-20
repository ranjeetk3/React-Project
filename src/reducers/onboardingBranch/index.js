let defaultState = {
  isSubmitting: false,
  data: {
  },
  branchesList:[]
}

function onboardingBranch(state = defaultState, action) {
  switch (action.type) {
    case "SET_BRANCH_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    break
    case "COMPANY_BRANCH_STARTED":
     return Object.assign({}, state, {
       isSubmitting: true
     })
    case "COMPANY_BRANCH_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "COMPANY_BRANCH_SUCCEEDED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
     case "ONBOARDING_BRANCH_GET_FAILED":
     return Object.assign({}, state, {
       isSubmitting: false
     })
    case "ONBOARDING_BRANCH_GET_SUCCEEDED":
     return Object.assign({}, state, {
       branchesList: action.payload.response.data,
       isSubmitting: false
     })
    default:
      return state
  }
}

export default onboardingBranch