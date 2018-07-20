let defaultState = {
  lastOnboardingStep: 0
}

function onBoarding(state = defaultState, action) {
  switch (action.type) {
    case "ONBOARDING_STEPS":
      return Object.assign({}, state, {
        lastOnboardingStep: action.payload.response
      })
    default:
      return state
  }
}

export default onBoarding
