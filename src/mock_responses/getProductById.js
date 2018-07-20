import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
	"id": 45,
    "number": "ST174001",
    "name": "tt",
    "price": "67",
    "manufacutererName": "Resmed",
    "vendorName": "Philips usa",
    "categoryName": "Medical Equipments",
    "categoryId": 1
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

export default function mockGetProductById(id) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
