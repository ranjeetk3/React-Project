let defaultState = {
  isSubmitting: false,
  data: {
    salutation: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
    allAccessReports: false,
    
    allAccessBilling: false,
    
    allAccessCheckHr: false,
    allAccessClinical: false,
    allAccessSales: false,
    allAccessInventory: false,
    allAccessAccount: false,
    
    branchesList:'',
    
    reportsAccEdit:false, reportsAccDelete:false, reportsAccView:false,
    reportsClinicalEdit:false, reportsClinicalDelete:false, reportsClinicalView:false,
    reportsHrEdit:false, reportsHrDelete:false, reportsHrView:false,
    reportsInventoryEdit:false, reportsInventoryDelete:false, reportsInventoryView:false,
    reportsSalesEdit:false, reportsSalesDelete:false, reportsSalesView:false,
    
    billAccEdit:false, billAccDelete:false, billAccView:false,
    billClinicalEdit:false, billClinicalDelete:false, billClinicalView:false,
    billHrEdit:false, billHrDelete:false, billHrView:false,
    billInventoryEdit:false, billInventoryDelete:false, billInventoryView:false,
    billSalesEdit:false, billSalesDelete:false, billSalesView:false,
    
    hrAccAdd:false,  hrAccEdit:false, hrAccDelete:false, hrAccView:false,
    hrClinicalEdit:false, hrClinicalDelete:false, hrClinicalView:false,
    hrHrEdit:false, hrHrDelete:false, hrHrView:false,
    hrInventoryEdit:false, hrInventoryDelete:false, hrInventoryView:false,
    hrSalesEdit:false, hrSalesDelete:false, hrSalesView:false,
    
    clinicalAccEdit:false, clinicalAccDelete:false, clinicalAccView:false,
    clinicalClinicalEdit:false, clinicalClinicalDelete:false, clinicalClinicalView:false,
    clinicalHrEdit:false, clinicalHrDelete:false, clinicalHrView:false,
    clinicalInventoryEdit:false, clinicalInventoryDelete:false, clinicalInventoryView:false,
    clinicalSalesEdit:false, clinicalSalesDelete:false, clinicalSalesView:false,
    
    salesAccEdit:false, salesAccDelete:false, salesAccView:false,
    salesClinicalEdit:false, salesClinicalDelete:false, salesClinicalView:false,
    salesHrEdit:false, salesHrDelete:false, salesHrView:false,
    salesInventoryEdit:false, salesInventoryDelete:false, salesInventoryView:false,
    salesSalesEdit:false, salesSalesDelete:false, salesSalesView:false,
    
    inventoryAccEdit:false, inventoryAccDelete:false, inventoryAccView:false,
    inventoryClinicalEdit:false, inventoryClinicalDelete:false, inventoryClinicalView:false,
    inventoryHrEdit:false, inventoryHrDelete:false, inventoryHrView:false,
    inventoryInventoryEdit:false, inventoryInventoryDelete:false, inventoryInventoryView:false,
    inventorySalesEdit:false, inventorySalesDelete:false, inventorySalesView:false,
    
    accAccEdit:false, accAccDelete:false, accAccView:false,
    accClinicalEdit:false, accClinicalDelete:false, accClinicalView:false,
    accHrEdit:false, accHrDelete:false, accHrView:false,
    accInventoryEdit:false, accInventoryDelete:false, accInventoryView:false,
    accSalesEdit:false, accSalesDelete:false, accSalesView:false,
  },
  users: []
}

function addEmployee(state = defaultState, action) {
  switch (action.type) {
    case "SET_ADD_EMPLOYEE_FORM_FIELD_VALUE":
      const update = {}
      update[action.params.field] = action.params.value
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, update)
      })
    case "ADD_EMPLOYEE_STARTED":
      return Object.assign({}, state, {
        isSubmitting: true
      })
    case "ADD_EMPLOYEE_FAILED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    case "ADD_EMPLOYEE_SUCCEEDED":
      return Object.assign({}, state, {
        isSubmitting: false
      })
    default:
      return state
  }
}

export default addEmployee