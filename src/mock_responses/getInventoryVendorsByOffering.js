import _ from 'lodash'

export const success = {
   'status': {
    'code': 200,
    'message': 'OK'
  },
  'data': [
    {
      'id': 2,
      'name': 'Philips indai'
    },
    {
      'id': 3,
      'name': 'Philips test'
    },
    {
      'id': 4,
      'name': 'zdfsdf'
    },
    {
      'id': 5,
      'name': 'Chetu'
    },
    {
      'id': 6,
      'name': 'Test India'
      
    },
		{
      'id': 7,
      'name': 'abc.com'
      
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

export default function mockGetInventoryVendorsByOffering(userId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
