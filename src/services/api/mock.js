import mockPostUser from '../../mock_responses/postUser.js'
import mockPostEmailVerification from '../../mock_responses/postEmailVerification.js'
import mockPostPasswordResetRequestVerification from '../../mock_responses/postPasswordResetRequestVerification.js'
import mockGetUserById from '../../mock_responses/getUserById.js'
import mockPostSaveCompanyInformation from '../../mock_responses/postSaveCompanyInformation.js'
import mockPostOnboardingUsers from '../../mock_responses/postOnboardingUsers.js'
import mockPostResetPasswordVerifyEmail from '../../mock_responses/postResetPasswordVerifyEmail.js'
import mockPostLoginUser from '../../mock_responses/postLoginUser.js'
import mockPostOnboardingSecurityQuestions from '../../mock_responses/postOnboardingSecurityQuestions.js'
import mockGetOnboardingCompanies from '../../mock_responses/getOnboardingCompanies.js'
import mockGetOnboardingBranches from '../../mock_responses/getOnboardingBranches.js'
import mockGetInventoryVendors from '../../mock_responses/getInventoryVendors.js'
import mockGetInventoryVendorsByCategory from '../../mock_responses/getInventoryVendorsByCategory.js'
import mockGetInventoryVendorsByOffering from '../../mock_responses/getInventoryVendorsByOffering.js'
import mockGetInventoryVendorsById from '../../mock_responses/getInventoryVendorsById.js'
import mockGetTimeCard from '../../mock_responses/getTimeCard.js'
import mockGetSoftwareOptions from '../../mock_responses/getSoftwareOptions.js'
import mockPostSoftwareOptions from '../../mock_responses/postSoftwareOptions.js'
import mockGetManufacturer from '../../mock_responses/getManufacturer.js'
import mockAddManufacturer from '../../mock_responses/addManufacturer.js'
import mockGetProducts from '../../mock_responses/getProducts.js'
import mockGetProductById from '../../mock_responses/getProductById.js'
import mockPostInventoryProduct from '../../mock_responses/postInventoryProduct.js'
import mockGetProductCategories from '../../mock_responses/getProductCategories.js'
import mockDeleteProduct from '../../mock_responses/deleteProduct.js'

export default {
  postUser(user) {
    return mockPostUser(user)  
  },
  postEmailVerification(data) {
    return mockPostEmailVerification(data)  
  },
  postPasswordResetRequestVerification(data) {
    return mockPostPasswordResetRequestVerification(data)
  },
  getUserById(data) {
    return mockGetUserById(data)
  },
  postSaveCompanyInformation(companyDetails) {
    return mockPostSaveCompanyInformation(companyDetails)
  },
  postOnboardingUsers(userDetails) {
    return mockPostOnboardingUsers(userDetails)
  },
  postResetPasswordVerifyEmail(user) {
    return mockPostResetPasswordVerifyEmail(user)
  },
  postLoginUser(user) {
    return mockPostLoginUser(user)
  },
  postOnboardingSecurityQuestions(securityData) {
    return mockPostOnboardingSecurityQuestions(securityData)
  },
  getOnboardingCompanies(userId) {
    return mockGetOnboardingCompanies(userId)
  },
  getOnboardingBranches(companyId) {
    return mockGetOnboardingBranches(companyId)
  },
	getInventoryVendors(userId) {
    return mockGetInventoryVendors(userId)
  },
	getInventoryVendorsByCategory(userId) {
    return mockGetInventoryVendorsByCategory(userId)
  },
	getInventoryVendorsByOffering(userId) {
    return mockGetInventoryVendorsByOffering(userId)
  },
	getInventoryVendorsById(userId) {
    return mockGetInventoryVendorsById(userId)
  },
   getTimeCard(timeCardId) {
    return mockGetTimeCard(timeCardId)
  },
  getSoftwareOptions() {
    return mockGetSoftwareOptions()
  },
  postSoftwareOptions(data) {
    return mockPostSoftwareOptions(data)
  },
  getManufacturer() {
    return mockGetManufacturer()
  },
  addManufacturer() {
    return mockAddManufacturer()
  },
  getProducts() {
    return mockGetProducts()
  },
  getProductById(id) {
    return mockGetProductById(id)
  },
  postInventoryProduct(data) {
    return mockPostInventoryProduct(data)
  },
  postInventoryProduct(data) {
    return mockPostInventoryProduct(data)
  },
  getProductCategories() {
    return mockGetProductCategories()
  },
  deleteProduct(id) {
    return mockDeleteProduct(id)
  }
}