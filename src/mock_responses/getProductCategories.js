import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": [
    {
      "id": 1,
      "parent_id": 0,
      "name": "Medical Equipments",
      "deleted_status": 0,
      "created_at": "2016-10-12 13:42:18",
      "updated_at": "2016-10-12 13:42:18",
      "deleted_at": null
    },
    {
      "id": 2,
      "parent_id": 0,
      "name": "Medical Supplies",
      "deleted_status": 0,
      "created_at": "2016-10-12 13:42:18",
      "updated_at": "2016-10-12 13:42:18",
      "deleted_at": null
    },
    {
      "id": 3,
      "parent_id": 0,
      "name": "Fitness Products",
      "deleted_status": 0,
      "created_at": "2016-10-12 13:42:18",
      "updated_at": "2016-10-12 13:42:18",
      "deleted_at": null
    },
    {
      "id": 4,
      "parent_id": 0,
      "name": "Long Term Care",
      "deleted_status": 0,
      "created_at": "2016-10-12 13:42:18",
      "updated_at": "2016-10-12 13:42:18",
      "deleted_at": null
    },
    {
      "id": 5,
      "parent_id": 0,
      "name": "Physical Therapy Products",
      "deleted_status": 0,
      "created_at": "2016-10-12 13:42:18",
      "updated_at": "2016-10-12 13:42:18",
      "deleted_at": null
    }
	]
}

export const failed = {
  "status": {
     "code": 404,
     "message": "No data is found in record."
  }
}

const responses = [
  success
]

export default function mockGetProductCategories() {
  if (responses.length > 0) {
    return responses[0]
  } else {
	throw new Error(failed.status.message)
  }
}
