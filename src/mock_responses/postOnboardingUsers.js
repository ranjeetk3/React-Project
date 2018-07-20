import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id" : "1",
    "firstName" : "John",
    "lastName": "Deo",
    "companyRole" : "Human Resourcess Manager",
    "email" : "john@healthcare.com",
    "companyName" : "xyz company",
    "updatedAt" : "2016-05-29 12:58:29",
    "createdAt" : "2016-05-29 12:58:29"     
  }
}

export const taken = {
  "status": {
     "code": 460,
     "message": "Email already exists"
  },
  "data": {
    "id" : "1",
     "firstName" : "John",
     "lastName": "Deo",
     "companyRole" : "Human Resourcess Manager",
     "email" : "john1@healthcare.com",
     "companyName" : "xyz company",
     "updatedAt" : "2016-05-29 12:58:29",
     "createdAt" : "2016-05-29 12:58:29"  
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

export default function mockPostOnboardingUsers(user) {
  return responses[0]
}
