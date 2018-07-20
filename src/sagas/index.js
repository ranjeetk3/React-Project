import "babel-polyfill";
import createUser from './createUser'
import verifyEmailAddress from './verifyEmailAddress'
import verifyPasswordResetRequest from './verifyPasswordResetRequest'
import landingPage from './landingPage'
import saveCompanyInformation from './saveCompanyInformation'
import passwordResetVerifyEmail from './passwordResetVerifyEmail'
import saveOnboardingUsers from './saveOnboardingUsers'
//import getOnboardingBranchLocations from './getOnboardingBranchLocations'
import loginUser from './loginUser'
import getOnboardingSecurityQuestions from './getOnboardingSecurityQuestions'
import getOnboardingCompanies from './getOnboardingCompanies'
import getOnboardingBranches from './getOnboardingBranches'
import saveOnboardingSecurityQuestions from './saveOnboardingSecurityQuestions'
import creditCardForm from './creditCardForm'
import achForm from './achForm'
import onboardingBranchLocationForm from './onboardingBranchLocationForm'

import forgetPasswordReset from './forgetPasswordReset'
import forgotPasswordAnswer from './forgotPasswordAnswer'
import forgotPasswordEmailVerification from './forgotPasswordEmailVerification'
import forgotPasswordQuestions from './forgotPasswordQuestions'
import getUserModulePermission from './getUserModulePermission'
import getInventoryVendors from './getInventoryVendors'
import addInventoryVendor from './addInventoryVendor'
import getInventoryVendorsByCategory from './getInventoryVendorsByCategory'
import getInventoryVendorsByOffering from './getInventoryVendorsByOffering'
import deleteInventoryVendorsById from './deleteInventoryVendorsById'
import getInventoryVendorsById from './getInventoryVendorsById'
import updateInventoryVendorsById from './updateInventoryVendorsById'
import postPermissionUsers from './postPermissionUsers'
import myProfileDashboard from './myProfileDashboard'
import updateProfileDashboard from './updateProfileDashboard'
import userDashboard from './userDashboard'
import timeCard from './timeCard'
import saveSoftwareOptions from './saveSoftwareOptions'
import getSoftwareOptions from './getSoftwareOptions'
import billingInfo from './billingInfo'
import invoice from './invoice'
import invoicePagination from './invoicePagination'
import invoiceDateRangeSearch from './invoiceDateRangeSearch'
import invoiceLastMonthSearch from './invoiceLastMonthSearch'
import manufacturer from './manufacturer'
import addManufacturer from './addManufacturer'
import productManagement from './productManagement'
import deleteManufacturer from './deleteManufacturer'
import getManufacturerById from './getManufacturerById'
import updateManufacturerById from './updateManufacturerById'
import getProducts from './getProducts'
import orderManagement from './orderManagement'
import getOrderById from './getOrderById'
import updateOrderById from './updateOrderById'
import signUpEmailVerification from './signUpEmailVerification'
import postSoftwareOptions from './postSoftwareOptions'
import getProduct from './getProduct'
import addPackage from './addPackage'
import deletePackage from './deletePackage'
import getPackage from './getPackage'
import getPackageItem from './getPackageItem'
import updatePackage from './updatePackage'
import updatePackageItem from './updatePackageItem'
import getProductCategories from './getProductCategories'
import saveProducts from './saveProducts'
import getProductById from './getProductById'
import deleteProduct from './deleteProduct'
import updateProduct from './updateProduct'
import addInventory from './addInventory'
import getCompaniesAddress from './getCompaniesAddress'
import getCompaniesList from './getCompaniesList'
import getInventory from './getInventory'
import getInventoryList from './getInventoryList'
import getProductByCategories from './getProductByCategories'
import getProductList from './getProductList'
import addItemToCart from './addItemToCart'
import deleteCartItemById from './deleteCartItemById'
import getCartDetails from './getCartDetails'


import getRecentChatUsers from './getRecentChatUsers'
import getAllChatsWithUser from './getAllChatsWithUser'
import updateUnreadStatus from './updateUnreadStatus'
import getUserById from './getUserById'
import getUsersByCompanyAndPermissions from './getUsersByCompanyAndPermissions'
import accountInfo from './accountInfo'
import getPurchaseRequestById from './getPurchaseRequestById'

import watchSaga from './watch.js'

export default function* rootSaga() {
  yield [
		createUser(),
		verifyEmailAddress(),
		verifyPasswordResetRequest(),
		landingPage(),
		saveCompanyInformation(),
		passwordResetVerifyEmail(),
		saveOnboardingUsers(),
		creditCardForm(),
		achForm(),
		loginUser(),
		onboardingBranchLocationForm(),
		getOnboardingSecurityQuestions(),
		saveOnboardingSecurityQuestions(),
		getOnboardingCompanies(),
		getOnboardingBranches(),
		forgetPasswordReset(),
		forgotPasswordAnswer(),
		forgotPasswordEmailVerification(),
		forgotPasswordQuestions(),
		getUserModulePermission(),
		getInventoryVendors(),
		addInventoryVendor(),
		getInventoryVendorsByCategory(),
		getInventoryVendorsByOffering(),
		deleteInventoryVendorsById(),
		getInventoryVendorsById(),
		updateInventoryVendorsById(),
		postPermissionUsers(),
		myProfileDashboard(),
		updateProfileDashboard(),
		userDashboard(),
		timeCard(),
		getSoftwareOptions(),
		saveSoftwareOptions(),
		billingInfo(),
		invoice(),
		invoicePagination(),
		invoiceDateRangeSearch(),
		invoiceLastMonthSearch(),
		manufacturer(),
		addManufacturer(),
		getManufacturerById(),
		productManagement(),
		deleteManufacturer(),
		updateManufacturerById(),
		getProducts(),
		orderManagement(),
		getOrderById(),
		updateOrderById(),
		signUpEmailVerification(),
		postSoftwareOptions(),
		getProduct(),
		addPackage(),
		deletePackage(),
		getPackage(),
		getPackageItem(),
		updatePackage(),
		updatePackageItem(),
		getProductCategories(),
		saveProducts(),
		getProductById(),
		deleteProduct(),
		updateProduct(),
		addInventory(),
		getCompaniesAddress(),
		getCompaniesList(),
		getInventory(),
		getInventoryList(),
		getProductByCategories(),
		getProductList(),
		getRecentChatUsers(),
		getAllChatsWithUser(),
		updateUnreadStatus(),
		getUserById(),
		addItemToCart(),
		deleteCartItemById(),
		getCartDetails(),
		getUsersByCompanyAndPermissions(),
		accountInfo(),
		getPurchaseRequestById(),
		watchSaga()
  ]
}
