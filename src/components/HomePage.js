import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToSignUp}>회원가입하기</button>
        </div>
    );
};

export default HomePage;
