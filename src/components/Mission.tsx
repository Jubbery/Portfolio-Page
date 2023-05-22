import React, { Fragment } from 'react';
import { Container, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { Box } from '@mui/system';

const MissionSection = () => {
    const missions = [
        {
            title: 'Web Development',
            image: 'mission-img3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id est? Sint minima voluptatem ex quia corporis delectus, rerum esse in dolorum impedit fuga magnam cum fugiat atque velit? Illum?',
        },
        {
            title: 'Quantum Computing',
            image: 'mission-img1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id est? Sint minima voluptatem ex quia corporis delectus, rerum esse in dolorum impedit fuga magnam cum fugiat atque velit? Illum?',
        },
        {
            title: 'Artificial Intelligence',
            image: 'mission-img2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id est? Sint minima voluptatem ex quia corporis delectus, rerum esse in dolorum impedit fuga magnam cum fugiat atque velit? Illum?',
        },
        {
            title: 'Virtual Reality',
            image: 'mission-img4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id est? Sint minima voluptatem ex quia corporis delectus, rerum esse in dolorum impedit fuga magnam cum fugiat atque velit? Illum?',
        },
    ];

    const renderMissions = () => {
        return missions.map((mission, index) => (
            <div key={index} className="">
                <Card>
                    <CardHeader title={mission.title} className={mission.image} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {mission.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        ));
    };

    return (
        <Fragment>
            <nav id="mission-target"></nav>
            <section id="mission-section" className="pt-lg-5">
                <Typography variant="h2" className="hero-element col-12 text-center">My Missions</Typography>
                <Container>
                    <Box py={10}>
                        <div className="row">
                            {renderMissions()}
                        </div>
                    </Box>
                </Container>
            </section>
        </Fragment>
    );
};

export default MissionSection;
