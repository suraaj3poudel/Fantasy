import React from 'react'
import "./Player.css"
import { useState } from 'react';
import { useEffect} from 'react';
import PlayerCard from './PlayerCard';
import DropDownBox from './DropDownBox';

function Player({match}) {
    const [ player, setPlayerData] = useState([]);
    const [ playerDetails, setPlayerDetails] = useState("hi");
    var pid = match.params.name;
    useEffect(() => {
        fetchData();
        fetchPlayers();
        
        }, []);

    useEffect(()=>{
        setInterval(()=>{
        fetchData();
        fetchPlayers();
        }, 5000)
        }, [])
    
        
    //console.log(match.params.ids);
    const fetchData = () => {
        return fetch("/api/entry/"+pid+"/event/1/picks/")
              .then((response) => response.json())
              .then((data) => setPlayerData(data.picks));}

    const fetchPlayers = () => {
        return fetch("/api/bootstrap-static/")
                .then((response) => response.json())
                .then((data) => setPlayerDetails(data.elements));}
              
       
    


        return (
        
            <div id="table">
                <div className="tableContent">
                <h1 class="playerInfo" > Player Details </h1>
                <DropDownBox/>
                <div className="cards">
            {player.map(function (footballer){ 
                var x =  playerDetails.find(x=> x.id=== footballer.element);
               return(<PlayerCard 
                  image={"https://resources.premierleague.com/premierleague/photos/players/110x140/p"+x.photo.replace(".jpg",".png")}
                  rank={footballer.position==null ? "N/A" : footballer.position}
                  totalPoints={footballer.multiplier ==null ? "N/A" : x.event_points}
                  name={footballer.element ==null ? "N/A" : x.first_name+" "+x.second_name}
                ></PlayerCard>)
                })}
              </div>
              </div>
            </div>
        )
}

export default Player
