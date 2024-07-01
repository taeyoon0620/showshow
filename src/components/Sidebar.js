import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Sidebar 컴포넌트에서 사용할 CSS 파일

const Sidebar = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="sidebar">
            <button className="signup-button" onClick={goToSignUp}>회원가입</button>
        </div>
    );
};

export default Sidebar;