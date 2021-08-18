import React from 'react';
import DropDownBox from './DropDownBox';
import "./Header.css";
import logo from "./images/logo.PNG"

function Header() {
    return (
        <div className="header">
            <img id="headerImg" alt="pl logo"></img>
            <div className="menubar">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            
        </div>
    )
}

export default Header
