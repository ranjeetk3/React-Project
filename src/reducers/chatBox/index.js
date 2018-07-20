let defaultState = {
	isSubmitting: false,
	data: {
		message:'',
		searchBox:'',
		file:'',
		abc:''
	},
	searchUsersList:[],
	recentChatUsers:[],
	allChatsWithUser:[]
}

function chatBox(state = defaultState, action) {
  switch (action.type) {
    case "SET_CHATBOX_FORM_FIELD_VALUE":
      const update = {}
	  update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
	case "GET_USERS_FAILED":
      return Object.assign({}, state, {
        searchUsersList: []
    })
    case "GET_USERS_SUCCEEDED":
      return Object.assign({}, state, {
        searchUsersList: action.payload.response.data
    })
	case "GET_RECENT_CHAT_USERS_FAILED":
      return Object.assign({}, state, {
        recentChatUsers: []
    })
    case "GET_RECENT_CHAT_USERS_SUCCEEDED":
      return Object.assign({}, state, {
        recentChatUsers: action.payload.response.data
    })
	case "RESET_SEARCH_RESULT":
      return Object.assign({}, state, {
        searchUsersList: []
    })
	case "GET_ALL_CHATS_WITH_USER_SUCCEEDED":
      return Object.assign({}, state, {
        allChatsWithUser: action.payload.response.data
    })
	case "GET_ALL_CHATS_WITH_USER_FAILED":
      return Object.assign({}, state, {
        allChatsWithUser: []
    })
    default:
      return state
  }
}

export default chatBox