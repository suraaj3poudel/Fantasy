import React from 'react'
import "../../../css/Body/PlayerPositions/Forward.css"
import PlayerCard from '../../../js/Body/PlayerPage/PlayerCard';

function Forward(props) {
    var player = props.for;
    var playerDetails = props.pd;

    return (
        <div className="normalBackground" >
            <h1 className ="playerTitle" style={{padding:'1%'}}> Forwards </h1>
            <div className="normalPlayer">
                {player.map(function (footballer){ 
                var x =  playerDetails.find(x=> x.id=== footballer.element);
                return(<PlayerCard
                    key={x.id}
                    vc = {footballer.is_vice_captain}
                    captain= {footballer.is_captain} 
                    image={"https://resources.premierleague.com/premierleague/photos/players/110x140/p"+x.photo.replace(".jpg",".png")}
                    rank={footballer.position==null ? "N/A" : footballer.position}
                    totalPoints={footballer.multiplier ==null ? "N/A" : x.event_points}
                    name={footballer.element ==null ? "N/A" : x.first_name.split(" ")[0]+" "+x.second_name.split("-")[0]}
                    ></PlayerCard>)
                })}
            </div>
        </div>
    )
}

export default Forward
