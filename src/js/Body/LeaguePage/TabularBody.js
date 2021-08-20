import React from 'react'
import '../../../css/Body/LeaguePage/TabularBody.css'
import TableHeader from "../../../js/Body/LeaguePage/TableHeader"
import Table from "../../../js/Body/LeaguePage/Table"

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
