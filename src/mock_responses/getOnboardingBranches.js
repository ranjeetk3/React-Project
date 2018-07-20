import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data":[
    {
      "CompanyID":1,
      "CompanyName":"Test  Pvt Ltd",
      "street_1":"ABC",
      "street_2":"PQR",
      "city":"city",
      "state":"state",
      "postal_code":"201301"
    },
    {
      "CompanyID":2,
      "CompanyName":"Chetu India Pvt Ltd",
      "street_1":"ABC",
      "street_2":"PQR",
      "city":"city",
      "state":"state",
      "postal_code":"201301"
    }
  ]
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

export default function mockGetOnboardingBranches(companyId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
