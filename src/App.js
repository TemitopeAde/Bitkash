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
import KycForm from "./pages/BankDetailsForm";
import VerificationComplete from "./pages/Verification-complete";
import EmailAndPhone from "./pages/EmailAndPhone";
import UpdateEmailAndPhoneInput from "./pages/UpdateEmailandPhoneInput";
import SucessRegistrationPage from "./pages/SucessRegistrationPage";
import MobileNav from "./components/mobileNav";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Signup />} />
        <Route path="/kyc" element={<KycForm />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/d" element={<MobileNav />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/update-number-email" element={<UpdateEmailAndPhoneInput />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification-complete" element={<VerificationComplete />} />
        <Route path="/email-and-password-sent" element={<EmailAndPhone />} />
        <Route path="/success-page" element={<SucessRegistrationPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
