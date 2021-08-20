import React from 'react'
import "../../../css/Body/PlayerPage/Player.css"
import { useState } from 'react';
import Bench from '../../../js/Body/PlayerPositions/Bench';
import GoalKeeper from '../../../js/Body/PlayerPositions/GoalKeeper';
import Defender from '../../../js/Body/PlayerPositions/Defender';
import Midfielder from '../../../js/Body/PlayerPositions/Midfielder';
import Forward from '../../../js/Body/PlayerPositions/Forward';
import { useLocation } from "react-router-dom"
import PlayerInfo from '../../../js/Body/PlayerPage/PlayerInfo';

function Player({match}) {
    const [ player, setPlayerData] = useState([]);
    const [ playerDetails, setPlayerDetails] = useState();
    var pid = match.params.name;
    var bench= [];
    var goalKeeper=[];
    var defender =[];
    var mid =[];
    var forward=[];
    const location = useLocation();
    const pName = location.state?.pName;

    // useEffect(() => {
    //     fetchData();
    //     fetchPlayers();
    //     });

    // useEffect(()=>{
    //     setInterval(()=>{
    //     fetchData();
    //     fetchPlayers();
    //     }, 5000)
    //     })
    
    

    const fetchData = () => {
        return fetch("https://fantasy.premierleague.com/api/entry/"+pid+"/event/1/picks/")
              .then((response) => response.json())
              .then((data) => setPlayerData(data.picks));}

    const fetchPlayers = () => {
        return fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
                .then((response) => response.json())
                .then((data) => setPlayerDetails(data.elements));}

    fetchData();
    fetchPlayers();

        return (
        
            <div id="table">
                <div className="tableContent">
                <PlayerInfo name={pName}
                            id={pid}/>
                    {player.map(function (footballer){ 
                        while(playerDetails == null){
                            fetchPlayers();
                        }
                        var x =  playerDetails.find(x=> x.id=== footballer.element);
                        if(footballer.multiplier!==0){
                            if(x.element_type === 1){
                                goalKeeper.push(footballer);
                            }
                            else if (x.element_type===2){
                                defender.push(footballer);
                            }

                            else if (x.element_type===3){
                                mid.push(footballer);
                            }

                            else if (x.element_type===4){
                                forward.push(footballer);
                            }

                            
                        }
                        else{
                            bench.push(footballer);
                            return "";
                        }
                        return "";
                    }
                    )}

               <div className="bodyBack">
                <GoalKeeper
                    gk ={goalKeeper}
                    pd={playerDetails}
                />
                <Defender 
                    def = {defender}
                    pd= {playerDetails}
                />
                <Midfielder
                    mid = {mid}
                    pd= {playerDetails}
                />
                <Forward
                    for = {forward}
                    pd= {playerDetails}
                />
                </div>
                <Bench 
                    bench={bench}
                    pd ={playerDetails}/>

              </div>
            </div>
        )
}

export default Player
