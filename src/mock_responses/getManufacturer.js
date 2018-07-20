import _ from 'lodash'

export const success = {
     'status': {
    'code': 200,
    'message': 'OK'
  },
  'data': [
    {
      'id': 1,
      'companyName': 'test',
      'streetAddress': '232test',
      'bldgUnitSuite': 'test',
      'city': 'Newyork',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '6666666666',
      'supportPhone': '5555555555',
      'tollFreePhone': '7777777777',
      'fax': '8888888888',
      'emailAddress': 'test2@test.com',
      'website': 'test2@test.com',
      'deletedStatus': 0,
      'createdAt': '2016-10-18 09:26:54',
      'updatedAt': '2016-10-18 09:26:54',
      'deletedAt': null
    },
    {
      'id': 2,
      'companyName': 'test1',
      'streetAddress': 'test1',
      'bldgUnitSuite': 'test1',
      'city': 'Newyork',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '111111111',
      'supportPhone': '111111111',
      'tollFreePhone': '111111111',
      'fax': '111111111',
     'emailAddress': 'test1@test.com',
      'website': 'test1@test.com',
      'deletedStatus': 0,
      'createdAt': '2016-10-18 09:27:49',
      'updatedAt': '2016-10-18 09:27:49',
      'deletedAt': null
    },
    {
      'id': 3,
      'companyName': 'test3',
      'streetAddress': 'test3',
      'bldgUnitSuite': 'test3',
      'city': 'Newyork',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '333333333',
      'supportPhone': '333333333',
      'tollFreePhone': '333333333',
      'fax': '333333333',
      'emailAddress': 'test3@test.com',
      'website': 'test3@test.com',
      'deletedStatus': 0,
      'createdAt': '2016-10-18 09:28:24',
      'updatedAt': '2016-10-18 09:28:24',
      'deletedAt': null
    }
  ]

}

export const failed = {
  'status': {
     'code': 404,
     'message': 'Failed'
  }
}

const responses = [
  success
]

export default function mockGetManufacturer(userId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
