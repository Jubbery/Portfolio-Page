import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <section className="bg-dark text-center text-white mt-0" id="footer-section">
      <Box py={3} style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © Jack Roberts 2022
      </Box>
    </section>
  );
};

export default Footer;
