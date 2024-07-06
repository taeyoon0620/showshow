import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import MainContent from './components/MainContent';
import LoginArea from './components/LoginArea';
import SNSLinks from './components/SNSLinks';
import SignUp from './components/SignUp';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css'; 

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <Router>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </Grid>
                        <Grid item xs={2}>
                            <SideMenu />
                        </Grid>
                        <Grid item xs={8}>
                            <Routes>
                                <Route path="/" element={<MainContent />} />
                                <Route path="/signup" element={<SignUp />} />
                            </Routes>
                        </Grid>
                        <Grid item xs={2}>
                            <LoginArea />
                            <SNSLinks />
                            <Box mt={2}>
                                <Link to="/signup" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        회원가입
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Router>
    );
};

export default App;
