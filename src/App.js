import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUp} />
            </Routes>
        </Router>
    );
};

export default App;
