import React from 'react';
import { Container, Typography } from '@mui/material';
import heroImage from '../img/hero-pfp.jpg'

const Hero = () => {
    return (
        <section className="container-fluid" id="hero-section">
            <Container>
                <img className="animate__animated animate__pulse animate__slow hero-img" src={heroImage} alt="" />
                <div className="col-12 hero-element">
                    <Typography variant="h1">Jack Roberts</Typography>
                    <Typography variant="h4">USF Junior in Computer Science</Typography>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
