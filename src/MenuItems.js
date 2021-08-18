import React from 'react'
import "./MenuItems.css"

function MenuItems(props) {

    
    if(props.visible){
    return (
        <div className="dropdown-content">
            <a href="/1241059">Camel Crush</a>
            <a href="/37636">Biratnagar Premier League</a>
            <a href="/1292014">Khasi Cup</a>
        </div>
    )
    }
    else{
        return("");
    }
}

export default MenuItems
