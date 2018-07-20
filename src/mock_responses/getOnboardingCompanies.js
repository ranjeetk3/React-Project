import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data":[
    {
      "id": 1,
      "name": "Company1"
    },
    {
      "id": 2,
      "name": "Company2"
    },
    {
      "id": 3,
      "name": "Company3"
    },
  ]
}

export const failed = {
  "status": {
     "code": 404,
     "message": "Failed"
  }
}

const responses = [
  success
]

export default function mockGetOnboardingCompanies(userId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
