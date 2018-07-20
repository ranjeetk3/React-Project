import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "user_id": 1,
    "company_id": 1,
    "module": {
      "1": {
        "name": "Human Resources",
        "value": true
      },
      "2": {
        "name": "Accounting System",
        "value": false
      },
      "3": {
        "name": "Inventory System",
        "value": true
      },
      "4": {
        "name": "Sales System",
        "value": false
      },
      "5": {
        "name": "Clinical System",
        "value": true
      },
      "6": {
        "name": "Reporting System",
        "value": false
      }
    }
  }
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

export default function getSoftwareOptions() {
  if (responses.length > 0) {
    return responses[0]
  } else {
	throw new Error(failed.status.message)
  }
}
