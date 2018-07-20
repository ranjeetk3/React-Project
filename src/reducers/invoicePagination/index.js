let defaultState = {
  invoiceData: []
}

function invoicePagination(state = defaultState, action) {
  switch (action.type) {
    case "INVOICE_FAILED":
      return Object.assign({}, state, {
      })
    case "INVOICE_SUCCEEDED":
      return Object.assign({}, state, {
        invoiceData:action.payload.response.data
      })
    default:
      return state
  }
}

export default invoicePagination