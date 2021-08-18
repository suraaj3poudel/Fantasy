import React from 'react'
import "./PlayerInfo.css"
import { useEffect } from 'react';
import { useState } from 'react';
import LeagueInfo from './LeagueInfo';

function PlayerInfo(props) {
    var name = (props.name);

    var id = props.id;

    const [player, setPlayer] = useState([])
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        fetchData();
        }, []);



        const fetchData = () => {
            return fetch("entry/"+id+"/")
                  .then(async response => {
                    try {
                     console.log(response)
                     const data = await response.json();
                     setPlayer(data);
                     setLeagues(data.leagues.classic);
                   } catch(error) {
                     fetchData();
                     //console.log('Error happened here!')
                     //console.error(error)
                   }
        })}

    return (
        <div className="playerDetails">
            <h2>{name}  </h2>
            <div className="playerBody">
                <h3 id="teamName">{player.name}</h3>
                <div className="ranks_points">
                    <div className="box">
                        <table className="mini-boxes" style={{width:'100%'}}  >
                            <colgroup>
                                <col span="1" style={{width: '50%'}}/>
                                <col span="1" style={{width: '50%'}}/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><h2>GW Points</h2></td>
                                    <td className="info"><h1>{player.summary_event_points}</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="box">
                        <table className="mini-boxes" style={{width:'100%'}}  >
                            <colgroup>
                                <col span="1" style={{width: '50%'}}/>
                                <col span="1" style={{width: '50%'}}/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><h2>Total Points</h2></td>
                                    <td className="info"><h1>{player.summary_overall_points}</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="box">
                        <table className="mini-boxes" style={{width:'100%'}}  >
                            <colgroup>
                                <col span="1" style={{width: '50%'}}/>
                                <col span="1" style={{width: '50%'}}/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><h2>GW Rank</h2></td>
                                    <td className="info"><h1>{player.summary_event_rank}</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="box">
                        <table className="mini-boxes" style={{width:'100%'}}  >
                            <colgroup>
                                <col span="1" style={{width: '50%'}}/>
                                <col span="1" style={{width: '50%'}}/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><h2>World Rank</h2></td>
                                    <td className="info"><h1>{player.summary_overall_rank}</h1></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                   
                </div>

                <LeagueInfo leag={leagues}/>

            </div>
        </div>
    )
}

export default PlayerInfo
