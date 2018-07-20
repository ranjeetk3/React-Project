import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id" : "1",
    "status" : "pending",
    "type" : "standard",
    "salutation" : "Mr.",
    "firstName" : "James",
    "lastName" : "Smith",
    "email" : "john@smith.com",
    "profilePictureId" : "0",
    "primaryPhoneId" : "5",
    "companyRole" : "Janitor",
    "updatedAt":"2016-08-31 03:26:29",
    "createdAt":"2016-08-31 03:26:29"     
  }
}

export const failed = {
  "status": {
     "code": 404,
     "message": "Email address not found in record."
  },
  "data": {
  }
}
const responses = [
  success
]
export default function mockPostResetPasswordVerifyEmail(user) {
  const matchingResponses = _.filter(responses, response => {
    return response.data.email === user.email
  })
  if (matchingResponses.length > 0) {
    return matchingResponses[0]
  } else {
    throw new Error(failed.status.message)
  }
}
