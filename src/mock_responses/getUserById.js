import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
     "id": 1,
     "status": "active",
     "type": "manager",
     "salutation": "Mr",
     "firstName": "firstName",
     "lastName": "lastName",
     "email": "email@gmail.com",
     "firstName": "firstName",
     "firstName": "firstName",
     "isEmailVerified" :0,
     "lastOnboardingStep":0,
     "hasCompletedOnboarding":0,
     "profilePictureId":null,
     "primaryPhoneId":null,
     "companyRole":"CEO",
     "deletedStatus":0,
     "createdAt":null,
     "updatedAt":null,
     "deletedAt":null
   }
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

export default function mockGetUserById(user) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
