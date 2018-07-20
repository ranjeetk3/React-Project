import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
'addManufacturerDetails' : {
'companyName' : 'test',
'country' : 'USA',
'streetAddress' : '232test',
'bldgUnitSuite' : 'test',
'city' : 'Newyork',
'state' : 'NY',
'zip' : '445A78',
'salesPhone' : '6666666666',
'emailAddress' : 'test2@test.com',
'supportPhone' : '5555555555',
'tollFreePhone' : '7777777777',
'fax' : '8888888888',
'website' : 'test2@test.com'

    }
  }
}

export const failed = {
  'status': {
     'code': 500,
     'message': 'Technical Error.'
  }
}

export default function mockAddManufacturer(data) {
  switch (data.token) {
    case 'goodToken':
      return success
      break
    default:
      return failed
      break
  }
}
