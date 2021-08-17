import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './PlayerCard.css'

function PlayerCard(props) {
    return (

        <div class="grid">
        <label class="card">
          <div class="card__body">
            <div class="card__body-cover"><img class="card__body-cover-image" src={props.image}/> </div>
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
