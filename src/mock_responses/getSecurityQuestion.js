import _ from 'lodash'


export default function mockGetSecurityQuestion(data) {
  const responsesData = _.filter(responses, response => {
    return response.data.question === securityQuestion.question
  })
  if (responsesData.length > 0) {
    return responsesData[0]
  } else {
    return failed
  }
}
