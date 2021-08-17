import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';

function DropDownBox() {
    const [title, setTitle] = useState("");

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle  variant="success" id="dropdown-basic">
                    {title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/1241059" onClick={()=>setTitle("Camel Crush")}>Camel Crush</Dropdown.Item>
                    <Dropdown.Item href="/37636" onClick={()=>setTitle("BPL")}>Biratnagar Premier League</Dropdown.Item>
                    <Dropdown.Item href="/1292014" onClick={()=>setTitle("Khasi Cup")}>Khasi Cup</Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
        </div>
    )
}

export default DropDownBox
