import React from 'react';
import "./Header.css";
import { useState } from 'react';
import MenuItems from './MenuItems';

function Header() {

    const [visible, setstate] = useState(false)

    return (
        <div className="header" onClick={()=>setstate(!visible)}>
            <img id="headerImg" alt="pl logo"></img>
            <div className="menubar">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <MenuItems visible={visible}/>
        </div>
    )
}

export default Header
