import _ from 'lodash'

export const success = {
  "status": {
     "code": 200,
     "message": "OK"
  },
  "data": {
    "userTimeCard": {
      "id":2,
      "user_id":1,
      "date":"2016-10-06",
      "clock_in":"2016-10-06 14:58:01",
      "clock_out":"2016-10-06 14:59:07"
    },
    "timeCardBreak": [
      {
        "id":1,
        "user_time_card_id":2,
        "start_time":"2016-10-06 14:58:29",
        "end_time":"2016-10-06 14:58:53"
      },
      {
        "id":2,
        "user_time_card_id":2,
        "start_time":"2016-10-06 15:06:52",
        "end_time":"2016-10-06 15:06:59"
      }
    ]
  }
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

export default function mockGetTimeCard(timeCardId) {
  if (responses.length > 0) {
    return responses[0]
  } else {
    return failed
  }
}
