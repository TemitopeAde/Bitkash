import { Box, Container } from '@mui/material';
import React from 'react';

import './footer.css';

const Footer2 = () => {
  let year = new Date()
  return (
    <Box className="footer2">
        <Container>
            <p>Copyright @Bitkash {year.getFullYear()}. All Rights Reserved.</p>
        </Container>
    </Box>
  )
}

export default Footer2