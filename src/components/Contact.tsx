import React, { Fragment } from 'react';
import { Typography, Container, Box } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Fragment>
      <div id="contact-target"></div>
      <section id="contact-section">
        <Typography variant="h2" className="hero-element col-12 my-4 text-center">Contact Me</Typography>

        <Container>
          <Box py={10} className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-12 my-3 mb-5">
                <a href="https://github.com/Jubbery" target="_blank" rel="noopener noreferrer">
                  <GitHub className="cont-icons1" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 my-3 mb-5">
                <a href="https://linkedin.com/in/jackrobertsusf" target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="cont-icons2" />
                </a>
              </div>
              <div className="col-md-4 col-sm-12 my-3 mb-5">
                <a href="mailto:jackroberts@usf.edu" target="_blank" rel="noopener noreferrer">
                  <Email className="cont-icons3" />
                </a>
              </div>
            </div>
          </Box>
        </Container>
      </section>
    </Fragment>
  );
};

export default ContactSection;

