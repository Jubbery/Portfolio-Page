import React, { Fragment } from 'react';
import { Container, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import js from '../icons/js-img.png'
import html from '../icons/html-img.png'
import css from '../icons/css-img.png'
import bootstrap from '../icons/bootstrap-img.png'

const SkillSection = () => {
    const skills = [
        {
            icon: html,
            description: "Structuring the web's content using modern semantic HTML 5.",
        },
        {
            icon: css,
            description: 'Presenting beautiful web designs and interactions using modern CSS.',
        },
        {
            icon: bootstrap,
            description: 'Rapidly developing responsive websites using the web\'s most popular framework.',
        },
        {
            icon: js,
            description: 'Making interactive experiences, games, web apps, and more using JavaScript.',
        },
    ];

    const renderSkills = () => {
        return skills.map((skill, index) => (
            <div key={index} className="my-3">
                <Card>
                    <CardHeader
                        className="pb-2 px-0"
                        avatar={<img className="img-fluid skills-img" src={skill.icon} alt="" />}
                    />
                    <CardContent className="skills-txt">
                        <Typography variant="h4" color="textSecondary" component="p">
                            {skill.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        ));
    };

    return (
        <Fragment>
            <div id="skills-target"></div>
            <section id="skills-section" className="container-fluid">
                <Typography variant="h2" className="hero-element col-12 text-center mb-5">My Skills</Typography>
                <Container>
                    <Box py={10} className="skills-container">
                        <div className="row">
                            {renderSkills()}
                        </div>
                    </Box>
                </Container>
            </section>
        </Fragment>
    );
};

export default SkillSection;
