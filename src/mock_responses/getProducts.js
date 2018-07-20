import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": [
	{
      "id": 10,
      "number": "GF68079",
      "name": "Bed Safety Rail",
      "price": "50.69",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Bed Accessories"
    },
    {
      "id": 11,
      "number": "GF680710",
      "name": "Bed Safety Rail",
      "price": "50.69",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Bed Accessories"
    },
    {
      "id": 12,
      "number": "GF680711",
      "name": "Bed Safety Rail",
      "price": "50.69",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Bed Accessories"
    },
    {
      "id": 13,
      "number": "GF680712",
      "name": "Bed Safety Rail",
      "price": "50.69",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Bed Accessories"
    },
    {
      "id": 14,
      "number": "GF680713",
      "name": "Bed Safety Rail",
      "price": "50.69",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Bed Accessories"
    },
    {
      "id": 19,
      "number": "ST174001",
      "name": "ff",
      "price": "78",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Medical Equipments"
    },
    {
      "id": 20,
      "number": "ST174001",
      "name": "New product",
      "price": "78.89",
      "manufacutererName": "Resmed",
      "vendorName": "Philips usa",
      "categoryName": "Medical Equipments"
    }
  ]
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

export default function mockGetProducts() {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
