import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id": 1
  }
}

export const failed = {
  "status": {
     "code": 404,
     "message": "User does not exists."
  },
  "data": {
  }
}

const responses = [
  success
]

export default function mockPostOnboardingSecurityQuestions(securityData) {
  const matchingResponses = _.filter(responses, response => {
    return response.data.id === securityData.userId
  })
  if (matchingResponses.length > 0) {
    return matchingResponses[0]
  } else {
    throw new Error(failed.status.message)
  }
}
