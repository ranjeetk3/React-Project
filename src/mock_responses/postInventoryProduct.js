import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id" : "1",
    "name" : "test",
    "price": "89",
    "number" : "ST174001",
    "updated_at" : "2016-11-30 11:35:02",
    "created_at" : "2016-11-30 11:35:02"   
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

export default function mockPostInventoryProduct(data) {
  if (responses.length > 0) {
    return responses[0]
  } else {
	throw new Error(failed.status.message)
  }
}
