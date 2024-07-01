import React from "react";
import './SearchBar.css'; // Import CSS file for SearchBar styles
import logoImage from '../Images/LOGOIMAGE.PNG'; // Import logo image

const SearchBar = () => {
    return (
        <div className="header">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <input type="text" className="iptSearch" placeholder="검색어를 입력하세요" />
            <button type="button" className="search">
                <span>검색</span>
            </button>
        </div>
    )
};

export default SearchBar;