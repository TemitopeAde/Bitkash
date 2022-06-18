import { Box } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import HowItWorks from '../components/HowItWorks';
import NeedUs from '../components/NeedUs';
import CustomerLove from '../components/CustomerLove';

const Home = () => {
  return (
    <Box>
      <Hero />
      <SectionOne />
      <HowItWorks />
      <NeedUs />
      <CustomerLove />
    </Box>
  )
}

export default Home