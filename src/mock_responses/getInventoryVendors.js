import _ from 'lodash'

export const success = {
   'status': {
    'code': 200,
    'message': 'OK'
  },
  'data': [
    {
      'id': 2,
      'companyName': 'Philips indai',
      'streetAddress': '232 test',
      'city': 'New York',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '6666666666',
      'supportPhone': '5555555555',
      'tollFreePhone': '7777777777',
      'fax': '8888888888',
      'emailAddress': 'philipsabc@usa.com',
      'website': 'philips@usa.com',
      'categoryName': 'Utilities - Gas',
      'offeringName': 'Products & Services'
    },
    {
      'id': 3,
      'companyName': 'Philips test',
      'streetAddress': '232 test',
      'city': 'New York',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '6666666666',
      'supportPhone': '5555555555',
      'tollFreePhone': '7777777777',
      'fax': '8888888888',
      'emailAddress': 'philipstest@usa.com',
      'website': 'philips@usa.com',
      'categoryName': 'Utilities - Gas',
      'offeringName': 'Products & Services'
    },
    {
      'id': 4,
      'companyName': 'Update Test',
      'streetAddress': '232 test',
      'city': 'New York',
      'state': 'NY',
      'zip': '445A78',
      'country': 'USA',
      'salesPhone': '6666666666',
      'supportPhone': '5555555555',
      'tollFreePhone': '7777777777',
      'fax': '8888888888',
      'emailAddress': 'philips@usa.com',
      'website': 'philips@usa.com',
      'categoryName': 'Utilities - Internet',
      'offeringName': 'Products'
    },
    {
      'id': 5,
      'companyName': 'Chetu',
      'streetAddress': 'A 154',
      'city': 'Noida',
      'state': 'UP',
      'zip': '201310',
      'country': 'INDIA',
      'salesPhone': '58963489635',
      'supportPhone': '78945698745',
      'tollFreePhone': '4589678965',
      'fax': '8888888888',
      'emailAddress': 'philips1@usa.com',
      'website': 'abc.com',
      'categoryName': 'Utilities - Internet',
      'offeringName': 'Products'
    },
    {
      'id': 6,
      'companyName': 'Test India',
      'streetAddress': '232 test',
      'city': 'Taxas',
      'state': 'TX',
      'zip': '34345',
      'country': 'USA',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips@usa.com',
      'website': 'philips@usa.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 7,
      'companyName': 'abc.com',
      'streetAddress': '232 test',
      'city': 'delhi',
      'state': 'delhi',
      'zip': '665666',
      'country': 'India',
      'salesPhone': '9879787878',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips1@usa.com',
      'website': 'usa.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 8,
      'companyName': 'Chetu Inc',
      'streetAddress': 'sec 63',
      'city': 'noida',
      'state': 'UP',
      'zip': '34345',
      'country': 'India',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips3@usa.com',
      'website': 'chetu.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 9,
      'companyName': 'Chetu Inc',
      'streetAddress': 'sec 63',
      'city': 'noida',
      'state': 'UP',
      'zip': '34345',
      'country': 'India',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips3@usa.com',
      'website': 'chetu.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 10,
      'companyName': 'Chetu Inc',
      'streetAddress': 'sec 63',
      'city': 'noida',
      'state': 'UP',
      'zip': '34345',
      'country': 'India',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips3@usa.com',
      'website': 'chetu.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 11,
      'companyName': 'Chetu Inc',
      'streetAddress': 'sec 63',
      'city': 'noida',
      'state': 'UP',
      'zip': '34345',
      'country': 'India',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips3@usa.com',
      'website': 'chetu.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
    },
		{
      'id': 12,
      'companyName': 'Chetu Inc',
      'streetAddress': 'sec 63',
      'city': 'noida',
      'state': 'UP',
      'zip': '34345',
      'country': 'India',
      'salesPhone': '5665464456',
      'supportPhone': '6456655656',
      'tollFreePhone': '8686786787',
      'fax': '8686786787',
      'emailAddress': 'philips3@usa.com',
      'website': 'chetu.com',
      'categoryName': 'Utilities - Cable',
      'offeringName': 'Products'
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

export default function mockGetInventoryVendors(userId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
