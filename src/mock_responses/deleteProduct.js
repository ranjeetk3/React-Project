import _ from 'lodash'

export const success = {
  "status": {
	"code": 200,
	"message": "Product deleted successfully"
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
     "code": 500,
     "message": "Internal/Database Error"
  },
  "data": {
  }
}

const responses = [
  success
]

export default function mockDeleteProduct(id) {
  if (responses.length > 0) {
    return responses[0]
  } else {
	throw new Error(failed.status.message)
  }
}
