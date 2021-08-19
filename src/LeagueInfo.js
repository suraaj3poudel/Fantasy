import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

function LeagueInfo(props) {

    var num=1;
    var infos = props.leag
    return (

        <div style={{fontSize:'2em', marginTop:'20px'}}>
           <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th style={{textAlign:"center"}} colSpan="2">Classic Leagues</th>
                        <th style={{textAlign:"center"}}>Rank</th>
                    </tr>
                </thead>
                
                
                <tbody >
                {infos.map((league) => (
                   
                    <tr key={num}>
                        <td>{num++}</td>
                        <td>{league.entry_rank > league.entry_last_rank? "▼": "▲"}</td>
                            <td style={{textAlign:"left",color:'black'}} className="leagueName"><Link to={{
                        pathname: `/${league.id}`,
                        state: {pName : props.name,
                        }}} >{league.name} </Link></td>

                        <td style={{textAlign:"center"}}>{league.entry_rank}</td>
                        
                    </tr>
                    
                     ))}
                </tbody>
                
               
            </Table> 
        </div>
    )
}

export default LeagueInfo
