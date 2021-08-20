import React from 'react'
import Row from './Row'
import "../../../css/Body/LeaguePage/Table.css"

import {useEffect} from "react";
import {useState}  from 'react'
import { AnimatePresence } from 'framer-motion';
//import FlipMove from 'react-flip-move'


const people = []

function Table() {

    const [ peoples, setPeople] = useState(people);
    const [mounted, setM] = useState(true);
    const [num, setNum] = useState([]);
    var players = [];

    var location = window.location.pathname;
    if(location === "/")
        location  =  '/1241059';

    
    const fetchData = () => {
        var link = "https://fantasy.premierleague.com/api/leagues-classic"+location+"/standings/";
        if(mounted){
            return fetch(link)
                  .then(async response => {
                    try {
                     const data = await response.json();
                     console.log("fetching....")
                     setPeople(data.standings.results);
                   } catch(error) {
                     console.log('Error happened here! '+link)
                     console.error(error)
                   }
                  })
        }}


        const fetchNum = () => {
            var link = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=9";
            if(mounted){
                return fetch(link)
                      .then(async response => {
                        try {
                         const data = await response.json();
                         console.log("fetching....")
                         setNum(data);
                       } catch(error) {
                         console.log('Error happened here! '+link)
                         console.error(error)
                       }
                      })
            }}
    useEffect(() => {
        setM(true);
        if(mounted){
            fetchData();
            fetchNum();
        }
        return ()=>setM(false) ;
        },[mounted]);

    useEffect(()=>{
        setInterval(()=>{
        fetchData();
        fetchNum();
        }, 5000)
        }, [])
    

   
    

    
              
              

        for(var i in peoples) {
            var o = {};
            if(peoples.hasOwnProperty(i)) {
            o.rank = peoples[i].rank;
            o.name = peoples[i].player_name;
            o.gw = num[i];
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



    return (
        
        <div id="table">
            <div className="tableContent">
        
        <AnimatePresence keys="nice">
        {players.map((people) => (
           <Row
              key={people.id}
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
