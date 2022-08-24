import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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

import {useSelector} from "react-redux"
import ProtectedRoute from "./ProtectedRoute";
import EmailVerification from "./pages/EmailVerification";
import EmailAndPhone from "./pages/EmailAndPhone";
import RecoverPasswordConfirm from "./pages/RecoverPasswordConfirm";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const state = useSelector((state) => state);

  console.log(state)


  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-bank-details" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/buy" element={<Buy />} />
        </Route>
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/user/verify/:token" element={<EmailAndPhone />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification-complete" element={<VerificationComplete />} />
        <Route path="/email-and-password-sent" element={<PhoneOTP />} />
        <Route path="/success-page" element={<SucessRegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment-details" element={<BuyConfirm />} />
        <Route path="/security" element={<Security />} />
        <Route path="/two-factor-authentication" element={<TwoFactor />} />
        <Route path="/goggle-authenticator" element={<GoogleAuth />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
        <Route path="/verification-successful" element={<VerificationSuccessful />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/recover-password/:user/:token" element={<RecoverPasswordConfirm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
