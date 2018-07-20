import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "id" : "1",
    "name" : "companyName",
    "street_1": "street1",
    "street_2": "street2",
    "city": "city",
    "state": "state",
    "postalCode": "1234-674",
    "phoneNumber": "1111111111",
    "extension": "1111111111",
    "faxNumber": "1111111111",
    "ein": "1234567",
    "npi": "123te",
    "medicareNumber": "medicareNumber12",
    "medicaidNumber": "medicaidNumber12",
    "updatedAt":"2016-05-29 12:58:29",
    "createdAt":"2016-05-29 12:58:29"     
  }
}

export const taken = {
  "status": {
     "code": 226,
     "message": "EIN number is already exist."
  },
  "data": {
    "id" : "1",
    "name" : "companyName",
    "street_1": "street1",
    "street_2": "street2",
    "city": "city",
    "state": "state",
    "postalCode": "1234-674",
    "phoneNumber": "1111111111",
    "extension": "1111111111",
    "faxNumber": "1111111111",
    "ein": "1234567",
    "npi": "123te",
    "medicareNumber": "medicareNumber12",
    "medicaidNumber": "medicaidNumber12",
    "updatedAt":"2016-05-29 12:58:29",
    "createdAt":"2016-05-29 12:58:29"         
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
  success,
  taken
]

export default function mockPostSaveCompanyInformation(companyDetails) {
  const matchingResponses = _.filter(responses, response => {
    return response.data.npi === companyDetails.npi
  })
  if (matchingResponses.length > 0) {
    return matchingResponses[0]
  } else {
    return failed
  }
}
