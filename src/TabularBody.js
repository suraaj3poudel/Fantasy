import React from 'react'
import './TabularBody.css'
import TableHeader from "./TableHeader"
import DropDownBox from './DropDownBox'
import Table from "./Table"

function TabularBody() {
    return (
        <div>
            <div class="upper_title">
                <h1 id="title"> Premier League Rankings</h1>
            </div>
                <TableHeader/>
                <Table/> 
        </div>
    )
}

export default TabularBody
