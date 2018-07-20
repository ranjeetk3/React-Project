import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
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
  success
]

export default function mockPostSoftwareOptions(data) {
  if (responses.length > 0) {
    return responses[0]
  } else {
	throw new Error(failed.status.message)
  }
}
