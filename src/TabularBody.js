import React from 'react'
import './TabularBody.css'
import TableHeader from "./TableHeader"
import Table from "./Table"

function TabularBody() {
    return (
        <div>
            <div className="upper_title">
                <h1 id="title"> Premier League Rankings</h1>
            </div>
                <TableHeader/>
                <Table/> 
        </div>
    )
}

export default TabularBody
