import React from 'react'
import Row from './Row'
import "./Table.css"

import {useEffect} from "react";
import {useState}  from 'react'
import { AnimatePresence } from 'framer-motion';
//import FlipMove from 'react-flip-move'


const people = []

function Table() {

    const [ peoples, setPeople] = useState(people);
    var players = [];
    useEffect(() => {
        fetchData();
        }, []);

    useEffect(()=>{
        setInterval(()=>{
        fetchData();
        }, 1000)
        }, [])
    

    var location = window.location.pathname;
    if(location === "/")
        location  =  '1241059';
    
    console.log(location+"hi");

    const fetchData = () => {
        return fetch("/api/leagues-classic/"+location+"/standings/")
              .then(async response => {
                try {
                 const data = await response.json()
                 setPeople(data.standings.results);
               } catch(error) {
                 console.log('Error happened here!')
                 console.error(error)
               }
              })}
              
              

        for(var i in peoples) {
            var o = {};
            if(peoples.hasOwnProperty(i)) {
            o.rank = peoples[i].rank;
            o.name = peoples[i].player_name;
            o.gw = peoples[i].event_total;
            o.total= peoples[i].total;
            o.id = peoples[i].entry;
            players.push(o); 
            }        
        }


        players.sort((a,b) => {
            return b.gw - a.gw;
           //return Math.random()-0.5;
        });

        // players.sort((a,b) => {
        //     return a.gw - b.gw;
        // });

        console.log(players);
        console.log(players);

    return (
        
        <div id="table">
            <div className="tableContent">
        
        <AnimatePresence>
        {players.map((people) => (
           <Row
              className= "rows"
              ids={people.id}
              index = {players.indexOf(people)}
              rank={people.rank==null ? "N/A" : people.rank}
              name={people.name ==null ? "N/A" : people.name}
              gwPoints={people.gw==null ? "N/A" : people.gw}
              totalPoints={people.total ==null ? "N/A" : people.total}
            ></Row>
            ))}
        </AnimatePresence>
          </div>
        </div>
    )
}

export default Table
