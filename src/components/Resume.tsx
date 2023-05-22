import React, { Dispatch, SetStateAction, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Drawer, IconButton, Typography } from '@mui/material';
import { FileCopyOutlined, Close } from '@mui/icons-material';
import '../files/CS_resume_jack_roberts.pdf';

const ResumeDrawer = () => {
    const [open, setOpen] = useState(false);
    return (
        <Drawer anchor="left" open={open} onClose={() => setOpen}>
            <div className="offcanvas-header">
                <Typography variant="h6" component="h3" id="resumeCardLabel">
                    <FileCopyOutlined />
                    My Resume
                </Typography>
                <IconButton color="inherit" onClick={() => setOpen}>
                    <Close />
                </IconButton>
            </div>
            <div className="offcanvas-body">
                <Document file={'../files/CS_resume_jack_roberts.pdf'}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </Drawer>
    );
};

export default ResumeDrawer;
