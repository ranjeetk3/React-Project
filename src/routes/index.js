import React from 'react' // eslint-disable-line no-unused-vars
import { Route, IndexRoute, Link } from 'react-router'

// stage
import Stage from '../components/Stage'
import { browserHistory } from 'react-router'
// pages
import EmailVerificationPage from '../components/EmailVerificationPage'
import LoginPage from '../components/LoginPage'
import PasswordResetPage from '../components/PasswordResetPage'
import SignupPage from '../components/SignupPage'
import SignupSuccessPage from '../components/SignupSuccessPage'
import LandingPage from '../components/LandingPage'
import SecurityQuestionPage from '../components/SecurityQuestionPage'
import LoadingGraphic from '../components/LoadingGraphic'
//import ForgotPasswordPage from '../components/ForgotPasswordPage'
import OnBoarding from '../components/OnBoarding'
import CompanyDetailsForm from '../components/CompanyDetailsForm'
import DummyPage from '../components/DummyPage'
import ForgotPasswordQuestions from '../components/ForgotPasswordQuestions'
import ForgotResetPassword from '../components/ForgotResetPassword'
import PasswordResetRequestPage from '../components/PasswordResetRequestPage'
import PasswordResetEmailLink from '../components/PasswordResetEmailLink'
import OnboardingBillingForm from '../components/OnboardingBillingForm'
import OnBoardingUsersForm from '../components/OnBoardingUsersForm'
import OnboardingSecurityQuestionsForm from '../components/OnboardingSecurityQuestionsForm'

import OnboardingBranchLocationForm from '../components/OnboardingBranchLocationForm'
import ForgotPasswordForm from '../components/ForgotPasswordForm'
import ResendLinkPassword from '../components/ResendLinkPassword'
import ResetPasswordSuccess from '../components/ResetPasswordSuccess'
import ForgetResetPasswordPage from '../components/ForgetResetPasswordPage'
import SubMenu from '../components/SubMenu'
import MyProfileDashboard from '../components/MyProfileDashboard'
import TimeClock from '../components/TimeClock'
import AddInventoryVendor from '../components/AddInventoryVendor'
import UserSetting from '../components/UserSetting'
import SoftwareOptions from '../components/SoftwareOptions'
import BillingInformation from '../components/BillingInformation'
import Invoice from '../components/Invoice'
import Manufacturer from '../components/Manufacturer'
import OrderManagement from '../components/OrderManagement'
import Vendor from '../components/Vendor'
import Package from '../components/Package'
import AddPackage from '../components/AddPackage'
import AddManufacturer from '../components/AddManufacturer'
import InventoryProducts from '../components/InventoryProducts'
import InventoryProductForm from '../components/InventoryProductForm'
import Inventory from '../components/Inventory'
import AddInventory from '../components/AddInventory'
import UpdatePackage from '../components/UpdatePackage'
import ChatBox from '../components/ChatBox'
import MainMessenger from '../components/MainMessenger'
import MobileChat from '../components/MobileChat'
import MainChat from '../components/MainChat'
import PurchaseRequest from '../components/PurchaseRequest'
import CartDetails from '../components/CartDetails'


//link

var Routes = (<Route path="/" component={Stage}>
	<Route path="/login" component={LoginPage}/>
	<Route path="/signup" component={SignupPage}/>
	<Route path="/signup/success" component={SignupSuccessPage}/>
	<Route path="/reset_password" component={PasswordResetPage}/>
	<Route path="/verify" component={EmailVerificationPage}/>
	<Route path="/security_question" component={SecurityQuestionPage}/>
	<Route path="/dummyPage" component={DummyPage}/>
	<Route path="/onBoarding" component={OnBoarding}/>
	<Route path="/passwordResetEmailLink" component={PasswordResetEmailLink}/>
	<Route path="/onboardingBillingForm" component={OnboardingBillingForm}/>
	<Route path="/onBoardingUsersForm" component={OnBoardingUsersForm}/>
	<Route path="/OnboardingBranchLocationForm" component={OnboardingBranchLocationForm}/>
	<Route path="/forgot_password_form" component={ForgotPasswordForm}/>
	<Route path="/reset_password_success" component={ResetPasswordSuccess}/>
	<Route path="/forget_reset_password_page" component={ForgetResetPasswordPage}/>
	<Route path="/forget_password_questions" component={ForgotPasswordQuestions}/>
	<Route path="/password_reset_request_page" component={PasswordResetRequestPage}/>
	<Route path="/subMenu" component={SubMenu}/>
	<Route path="/addInventoryVendor" component={AddInventoryVendor}/>
	<Route path="/user_setting" component={UserSetting}/>
	<Route path="/profile_dashboard" component={MyProfileDashboard}/>
	<Route path="/time_clock" component={TimeClock}/>
	<Route path="/software_options" component={SoftwareOptions}/>
	<Route path="/invoice" component={Invoice}/>
	<Route path="/billing_information" component={BillingInformation}/>
	<Route path="/manufacturer" component={Manufacturer}/>
	<Route path="/add_manufacturer" component={AddManufacturer}/>
	<Route path="/vendor" component={Vendor}/>
	<Route path="/onboarding_security_questions" component={OnboardingSecurityQuestionsForm}/>
	<Route path="/package" component={Package}/>
	<Route path="/add_package" component={AddPackage}/>
	<Route path="/inventory_products" component={InventoryProducts}/>
	<Route path="/inventory_product_form" component={InventoryProductForm}/>
	<Route path="/add_inventory" component={AddInventory}/>
    <Route path="/inventory" component={Inventory}/>
    <Route path="/update_package" component={UpdatePackage}/>
	<Route path="/chat_box" component={ChatBox}/>
	<Route path="/main_messenger" component={MainMessenger}/>
	<Route path="/mobile_chat" component={MobileChat}/>
	<Route path="/main_chat" component={MainChat}/>
	<Route path="/purchase_request" component={PurchaseRequest}/>
	<Route path="/cart_details" component={CartDetails}/>
	<IndexRoute component={LoginPage}/>
</Route>)
  
module.exports = Routes
