import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// custom reducers
import emailVerificationForm from './emailVerificationForm'
import example from './example'
import loginForm from './loginForm'
import modal from './modal'
import passwordResetForm from './passwordResetForm'
import passwordResetRequestForm from './passwordResetRequestForm'
import passwordResetRequestVerificationForm from './passwordResetRequestVerificationForm'
import session from './session'
import registrationForm from './registrationForm'
import forgotPasswordForm from './forgotPasswordForm'
import companyDetailsForm from './companyDetailsForm'
import landingPage from './landingPage'
import onBoarding from './onBoarding'
import dummyPage from './dummyPage'
import forgotPasswordQuestions from './forgotPasswordQuestions'
import onBoardingUsersForm from './onBoardingUsersForm'
import onboardingSecurityQuestionsForm from './onboardingSecurityQuestionsForm'
import onboardingBranch from './onboardingBranch'
import creditCardForm from './creditCardForm'
import achForm from './achForm'
import onboardingBranchLocationForm from './onboardingBranchLocationForm'

import forgetResetPassword from './forgetResetPassword'
import forgotPasswordAnswer from './forgotPasswordAnswer'
import forgotPasswordEmailVerify from './forgotPasswordEmailVerify'
import securityQuestionForm from './securityQuestionForm'
import getUserModulePermission from './getUserModulePermission'
import getInventoryVendors from './getInventoryVendors'
import addInventoryVendor from './addInventoryVendor'
import getInventoryVendorsByCategory from './getInventoryVendorsByCategory'
import getInventoryVendorsByOffering from './getInventoryVendorsByOffering'
import deleteInventoryVendorsById from './deleteInventoryVendorsById'
import myProfileDashboard from './myProfileDashboard'
import userDashboard from './userDashboard'
import timeCard from './timeCard'
import softwareOptions from './softwareOptions'
import billingInfo from './billingInfo'
import invoice from './invoice'
import invoicePagination from './invoicePagination'
import manufacturer from './manufacturer'
import addManufacturer from './addManufacturer'
import productManagement from './productManagement'
import orderManagement from './orderManagement'
import signUpEmailVerification from './signUpEmailVerification'
import getProduct from './getProduct'
import addPackage from './addPackage'
import getPackage from './getPackage'
import addInventory from './addInventory'
import getCompaniesAddress from './getCompaniesAddress'
import getCompaniesList from './getCompaniesList'
import getInventory from './getInventory'
import getProductByCategories from './getProductByCategories'
import getProductCategories from './getProductCategories'
import chatBox from './chatBox'
import users from './users'
import purchaseRequest from './purchaseRequest'

//import passwordResetEmailLink from './passwordResetEmailLink'
// combine reducers
const rootReducer = combineReducers({
	emailVerificationForm,
	example,
	loginForm,
	modal,
	passwordResetForm,
	passwordResetRequestForm,
	passwordResetRequestVerificationForm,
	routing,
	session,
	registrationForm,
	forgotPasswordForm,
	companyDetailsForm,
	landingPage,
	onBoarding,
	creditCardForm,
	dummyPage,
	achForm,
	onboardingBranchLocationForm,
	forgotPasswordQuestions,
	onBoardingUsersForm,
	onboardingSecurityQuestionsForm,
	onboardingBranch,
	forgetResetPassword,
	forgotPasswordAnswer,
	forgotPasswordEmailVerify,
	securityQuestionForm,
	getInventoryVendors,
	addInventoryVendor,
	getInventoryVendorsByCategory,
	getInventoryVendorsByOffering,
	deleteInventoryVendorsById,
	getUserModulePermission,
	myProfileDashboard,
	userDashboard,
	timeCard,
	softwareOptions,
	billingInfo,
	invoice,
	invoicePagination,
	manufacturer,
	addManufacturer,
	productManagement,
	orderManagement,
	signUpEmailVerification,
	getProduct,
	addPackage,
	getPackage,
	addInventory,
	getCompaniesAddress,
	getCompaniesList,
	getInventory,
	getProductByCategories,
	getProductCategories,
	chatBox,
	users,
	purchaseRequest,
 // passwordResetEmailLink
})

export default rootReducer