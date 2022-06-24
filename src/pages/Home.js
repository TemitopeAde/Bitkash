import { Box } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import HowItWorks from "../components/HowItWorks";
import NeedUs from "../components/NeedUs";
import CustomerLove from "../components/CustomerLove";
import BuyBitcoin from "../components/BuyBitcoin";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Header from "../components/Header";
import { motion } from "framer-motion";



const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


// const BuySchema = Yup.object().shape({
//   currency: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Currency is required"),

//   amount: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Amount is required"),

//   email: Yup.string().email().required("Email is required"),

// });




const Home = () => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Header />
        <Hero  />
        <SectionOne />
        <HowItWorks />
        <NeedUs />
        <CustomerLove />
        <BuyBitcoin />
        <Newsletter />
        <Footer />
        <Footer2 />
      </Box>
    </motion.div>
  );
};

export default Home;
