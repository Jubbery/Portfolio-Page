import React, { Fragment } from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import alan from '../img/alan-turing.jpg'
import zeilinger from '../img/zeilinger.jpg'
import linus from '../img/linus-torvalds.jpg'

const InspirationSection = () => {
    const inspirationItems = [
        {
            imgSrc: alan,
            name: 'Alan Turing',
            quote: '“We can only see a short distance ahead, but we can see plenty there that needs to be done.”',
        },
        {
            imgSrc: zeilinger,
            name: 'Anton Zeilinger',
            quote: '“Maybe knowledge is as fundamental, or even more fundamental than [material] reality.”',
        },
        {
            imgSrc: linus,
            name: 'Linus Torvalds',
            quote: '"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',
        },
    ];

    const renderInspirationItems = () => {
        return inspirationItems.map((item, index) => (
            <Box key={index}>
                <img src={item.imgSrc} className="img-fluid d-block w-100" alt={item.name} />
                <div className="carousel-caption d-md-block">
                    <h3>{item.name}</h3>
                    <p>{item.quote}</p>
                </div>
            </Box>
        ));
    };

    return (
        <Fragment>
            <div id="inspiration-target"></div>
            <section className="container-fluid" id="inspiration-section">
                <Typography variant="h2" className="hero-element col-12 my-4 text-center">My Inspiration</Typography>
                <Container>
                    <Box display={{ xs: 'none', lg: 'block', md: 'block' }}>
                        <Carousel animation="slide">
                            {renderInspirationItems()}
                        </Carousel>
                    </Box>
                    <Box display={{ xs: 'block', xl: 'none', lg: 'none', md: 'none', sm: 'block' }}>
                        <Carousel animation="slide">
                            {renderInspirationItems()}
                        </Carousel>
                    </Box>
                </Container>
            </section>
        </Fragment>
    );
};

export default InspirationSection;

