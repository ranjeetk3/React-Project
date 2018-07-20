import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "user" : {
      "firstName": "Albert",
      "lastName": "Smith",
      "email": "scott@indusriverventures.com"
    }
  }
}

export const failed = {
  "status": {
     "code": 400,
     "message": "Email verification failed."
  }
}

export default function mockPostEmailVerification(data) {
  switch (data.token) {
    case "goodToken":
      return success
      break
    default:
      return failed
      break
  }
}
