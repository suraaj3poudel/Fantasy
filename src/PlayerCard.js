import React from 'react'
import './PlayerCard.css'

function PlayerCard(props) {
    return (

        <div class="grid">
        <label class="card">
          <div class="card__body">
            <div class="card__body-cover"><img alt= {props.image} class="card__body-cover-image" src={props.image}/> </div>
            <div class="card__body-header" style={{border:"2 px"}}>
              <h4 class="card__body-header-title">{props.name}</h4>
              <p class="card__body-header-subtitle">{props.totalPoints}</p>
            </div>
          </div>
        </label>
        </div>
    )
}

export default PlayerCard
