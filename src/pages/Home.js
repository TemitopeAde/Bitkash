import { Box } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import HowItWorks from '../components/HowItWorks';
import NeedUs from '../components/NeedUs';
import CustomerLove from '../components/CustomerLove';
import BuyBitcoin from '../components/BuyBitcoin';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Header from '../components/Header';

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <SectionOne />
      <HowItWorks />
      <NeedUs />
      <CustomerLove />
      <BuyBitcoin />
      <Newsletter />
      <Footer />
      <Footer2 />
    </Box>
  )
}

export default Home