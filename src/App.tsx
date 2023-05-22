import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import './theme.css';
import Hero from './components/Hero';
import MissionSection from './components/Mission';
import SkillSection from './components/Skill';
import InspirationSection from './components/Inspo';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ResumeDrawer from './components/Resume';

function App() {
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ResumeDrawer />
        <Hero />
        <MissionSection />
        <SkillSection />
        <InspirationSection />
        <ContactSection />
        <Footer />

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"></script> */}
      </header>
    </div>
  );
}

export default App;
