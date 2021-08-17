import React from 'react';
import DropDownBox from './DropDownBox';
import "./Header.css";
import logo from "./images/logo.PNG"

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="pl logo"></img>
            <h4>#NoRoomForRacism</h4>
            <DropDownBox/>
        </div>
    )
}

export default Header
