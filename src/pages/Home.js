import { Box } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <Box>
      <Hero />
      <SectionOne />
      <HowItWorks />
    </Box>
  )
}

export default Home