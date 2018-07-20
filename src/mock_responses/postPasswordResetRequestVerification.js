import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "user" : {
      "firstName": "Scott",
      "lastName": "Allen",
      "email": "scott@indusriverventures.com"
    }
  }
}

export const failed = {
  "status": {
     "code": 400,
     "message": "Password reset verification failed."
  }
}

export default function mockPostPasswordResetRequestVerification(data) {
  switch (data.token) {
    case 'goodToken':
      return success
      break
    case 'badToken':
      return failed
      break
    default:
      throw new Error('api error')
  }
}
