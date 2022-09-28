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
import axios from "axios";
import { useEffect } from "react";



const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};




const Home = () => {

  const fetchPro = async () => {
    const url = "https://www.griffati.com/restful/export/api/products.json";

    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "HTTP Basic (df2bfc17-3b99-4243-b6bc-a8442947695a: Fiverr188!)"
      },
    };

    await axios.get(url, {}, config)
      .then((data) => console.log(data)).catch((error) => console.log(error))
  };

  useEffect(() => {
    fetchPro();
  });

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
  
}


export default Home;
