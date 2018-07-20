import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id" : "2",
    "status" : "active",
    "type" : "standard",
    "salutation" : "Mr.",
    "firstName" : "James",
    "lastName" : "Smith",
    "email" : "john@smith.com",
    "profilePictureId" : "0",
    "primaryPhoneId" : "5",
    "companyRole" : "CEO",
    "updatedAt":"2016-05-29 12:58:29",
    "createdAt":"2016-05-29 12:58:29"     
  }
}

export const taken = {
  "status": {
     "code": 460,
     "message": "Email already exists"
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
    "updatedAt":"2016-05-29 12:58:29",
    "createdAt":"2016-05-29 12:58:29"     
  }
}

export const failed = {
  "status": {
     "code": 500,
     "message": "Internal/Database Error"
  },
  "data": {
   }
}

const responses = [
  success,
  taken
]

export default function mockPostUser(user) {
  const matchingResponses = _.filter(responses, response => {
    return response.data.email === user.email
  })
  if (matchingResponses.length > 0) {
    return matchingResponses[0]
  } else {
    return failed
  }
}
