import { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Buy from "./pages/Buy";
import History from "./pages/History";
import Payment from "./pages/Payment";
import RecoverPassword from "./pages/RecoverPassword";
import EmailConfirmation from "./pages/Email-confirmation";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import VerificationComplete from "./pages/Verification-complete";
import UpdateEmailAndPhoneInput from "./pages/UpdateEmailandPhoneInput";
import SucessRegistrationPage from "./pages/SucessRegistrationPage";
import Dashboard from "./pages/Dasboard";
import BuyConfirm from "./pages/BuyConfirm";
import Security from "./pages/Security";
import TwoFactor from "./pages/TwoFactor";
import GoogleAuth from "./pages/GoogleAuth";
import PhoneVerification from "./pages/PhoneVerification";
import PhoneOTP from "./pages/PhoneOTP";
import VerificationSuccessful from "./pages/Verification-successful";
import ChangePassword from "./pages/ChangePassword";
import Notification from "./pages/Notification";

import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import EmailVerification from "./pages/EmailVerification";
import EmailAndPhone from "./pages/EmailAndPhone";
import RecoverPasswordConfirm from "./pages/RecoverPasswordConfirm";
import PasswordResetLink from "./pages/PasswordResetLink";
import Activities from "./pages/Activities";
import Banks from "./pages/Banks";
import Logout from "./pages/Logout";
import ChangeEmail from "./pages/ChangeEmail";
import ChangePhoneNumber from "./pages/ChangeNumber";
import { getAllTransactions } from "./state/action-creators";
import Test from "./pages/test";
import About from "./pages/about";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";
import Refund from "./pages/refund";
import DeliveryPolicy from "./pages/delivery";
import CookiesPolicy from "./pages/cookies";
import Homepage from "./pages/homepage";
import TermsAndConditions from "./pages/terms-conditions";
import AdminDashboard from "./pages/admin/dashboard";
import UsersList from "./pages/admin/users-list";
import UserDetails from "./pages/admin/user-details";
import AdminsList from "./pages/admin/admins-list";
import AddAdmin from "./pages/admin/add-admin";
import Reg from "./pages/Registration";
import Modal from "./components/Modal";
import EditBank from "./pages/EditBank";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Homepage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/delivery-policy" element={<DeliveryPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Amin Routes */}
        <Route path="/admin">
          <Route index element={<AdminDashboard />} />
          <Route path="users-list" element={<UsersList />} />
          <Route path="user-details" element={<UserDetails />} />
          <Route path="admins-list" element={<AdminsList />} />
          <Route path="add-admin" element={<AddAdmin />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/kyc-verification" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user-dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/buy-bitcoin" element={<Buy />} />
        <Route path="/transaction-history" element={<History />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/banks" element={<Banks />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update-email" element={<ChangeEmail />} />
        <Route path="/update-phone" element={<ChangePhoneNumber />} />

        <Route path="/payment-details" element={<BuyConfirm />} />
        <Route path="/pasword-and-security" element={<Security />} />
        <Route path="/two-factor-authentication" element={<TwoFactor />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/goggle-authenticator" element={<GoogleAuth />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/edit-bank" element={<EditBank />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/bank-added" element={<Modal />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/user/verify/:uid" element={<EmailAndPhone />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration" element={<Register />} />
        <Route
          path="/verification-complete"
          element={<VerificationComplete />}
        />
        <Route path="/email-and-password-sent" element={<PhoneOTP />} />
        <Route path="/success-page" element={<SucessRegistrationPage />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
        <Route
          path="/verification-successful"
          element={<VerificationSuccessful />}
        />

        <Route
          path="/recover-password/:token"
          element={<RecoverPasswordConfirm />}
        />
        <Route
          path="/password-reset-link-sent"
          element={<PasswordResetLink />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
