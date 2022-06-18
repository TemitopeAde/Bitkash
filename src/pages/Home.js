import { Box } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import HowItWorks from '../components/HowItWorks';
import NeedUs from '../components/NeedUs';
import CustomerLove from '../components/CustomerLove';
import BuyBitcoin from '../components/BuyBitcoin';

const Home = () => {
  return (
    <Box>
      <Hero />
      <SectionOne />
      <HowItWorks />
      <NeedUs />
      <CustomerLove />
      <BuyBitcoin />
    </Box>
  )
}

export default Home