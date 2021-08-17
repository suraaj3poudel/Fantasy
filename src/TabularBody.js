import React from 'react'
import './TabularBody.css'
import TableHeader from "./TableHeader"
import Table from "./Table"
import DropDownBox from './DropDownBox'

function TabularBody() {
    return (
        <div>
            <div class="upper_title">
                <h1 id="title"> Premier League Rankings</h1>
                <DropDownBox/>
            </div>
                <TableHeader/>
                <Table/> 
        </div>
    )
}

export default TabularBody
