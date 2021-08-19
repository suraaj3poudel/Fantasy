import React from 'react'
import './PlayerCard.css'

function PlayerCard(props) {

    var capt="";
    var multiplier=1;
    var clas = "card__body-header";

    if(props.captain){
      capt=" (C)";
      multiplier =2;
      clas="cap"
    }

    if(props.vc){
      capt=" (VC)";
    }


    return (

        <div className="grid">
        <label className="card" >
          <div className="card__body">
            <div className="card__body-cover"><img alt= {props.name} className="card__body-cover-image" src={props.image}/> </div>
            <div className={clas} style={{border:"2 px"}}>
              <h4 className="card__body-header-title" style={{color:'black'}}>{props.name + capt}</h4>
            </div>
            <p className="card__body-header-subtitle">{props.totalPoints*multiplier}</p>
          </div>
        </label>
        </div>
    )
}

export default PlayerCard
