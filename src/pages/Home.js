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
<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";


=======
>>>>>>> master

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

<<<<<<< HEAD



const Home = () => {

  
=======
const Home = () => {
>>>>>>> master
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Header />
<<<<<<< HEAD
        <Hero  />
=======
        <Hero />
>>>>>>> master
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
<<<<<<< HEAD
  
}

=======
};
>>>>>>> master

export default Home;
