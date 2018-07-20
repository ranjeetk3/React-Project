let defaultState = {
  greeting: "hi there!"
}

function example(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_EXAMPLE_GREETING':
      return Object.assign({}, state, {
        greeting: (state.greeting === "hi there!") ? "howdy!" : "hi there!"
      })
    default:
      return state
  }
}

export default example