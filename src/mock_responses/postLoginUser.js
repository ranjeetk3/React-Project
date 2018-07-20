import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id": 5,
    "status": "active",
    "type": "admin",
    "salutation" : "Mr.",
    "firstName" : "James",
    "lastName" : "Smith",
    "email" : "john@smith.com",
    "isEmailVerified": 0,
    "lastOnboardingStep": "0",
    "hasCompletedOnboarding": 0,
    "profilePictureId": null,
    "primaryPhoneId": 1,
    "companyRole": "PHP Developer",
    "createdAt": "2016-09-02 17:30:23",
    "updatedAt": "2016-09-02 17:30:24"     
  }
}

export const failed = {
  "status": {
    "code": 404,
    "message": "Unauthorized (incorrect user name and/or password)"
  },
  "data": {
  }
}

const responses = [
  success
]

export default function mockPostLoginUser(user) {
  const matchingResponses = _.filter(responses, response => {
    return response.data.email === user.email
  })
  if (matchingResponses.length > 0) {
    return matchingResponses[0]
  } else {
    throw new Error(failed.status.message)
  }
}
