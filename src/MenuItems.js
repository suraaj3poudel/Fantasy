import React from 'react'
import "./MenuItems.css"

function MenuItems(props) {

    
    if(props.visible){
    return (
        <div className="dropdown-content">
            <a href="/1241059">Camel Crush</a>
            <a href="/37636">Biratnagar Premier League</a>
            <a href="/1292014">Khasi Cup</a>
            <br></br>
            <h4 style={{color:'black', marginLeft:'20px'}}>Additional Data</h4>
            <a href="/prem-table">Premier League Table</a>
        </div>
    )
    }
    else{
        return("");
    }
}

export default MenuItems
