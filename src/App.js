import { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
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

function App() {
  
  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kyc-verification" element={<Signup />} />
        {/* <Route element={<ProtectedRoute />}> */}

        {/* </Route> */}
        <Route path="/buy-bitcoin" element={<Buy />} />
        <Route path="/transaction-history" element={<History />} />
        <Route path="/payment" element={<Payment />} />
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
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/payment-details" element={<BuyConfirm />} />
        <Route path="/pasword-and-security" element={<Security />} />
        <Route path="/two-factor-authentication" element={<TwoFactor />} />
        <Route path="/goggle-authenticator" element={<GoogleAuth />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
        <Route
          path="/verification-successful"
          element={<VerificationSuccessful />}
        />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route
          path="/recover-password/:token/:id"
          element={<RecoverPasswordConfirm />}
        />
        <Route
          path="/password-reset-link-sent"
          element={<PasswordResetLink />}
        />
        <Route path="/activities" element={<Activities />} />
        <Route path="/banks" element={<Banks />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update-email" element={<ChangeEmail />} />
        <Route path="/update-phone" element={<ChangePhoneNumber />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
