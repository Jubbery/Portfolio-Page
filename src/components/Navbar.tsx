import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AdjustOutlined, CodeOutlined, LightbulbOutlined, Inbox, FileCopyOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <AppBar id="navbar-example2" position="fixed" sx={{ px: 3 }}>
            <Toolbar>
                <Typography variant="h6" component="a" href="#" sx={{ flexGrow: 1 }}>
                    Jack's Portfolio
                </Typography>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        // Handle menu toggle
                    }}
                >
                    <AdjustOutlined />
                </IconButton>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#mission-target">
                                <AdjustOutlined className="nav-icons" />
                                Mission
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills-target">
                                <CodeOutlined className="nav-icons" />
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#inspiration-target">
                                <LightbulbOutlined className="nav-icons" />
                                Inspiration
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-target">
                                <Inbox className="nav-icons" />
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#resumeCard" aria-controls="resumeCard">
                                <FileCopyOutlined className="nav-icons" />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

