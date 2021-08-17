import React from 'react';
import "./Row.css";
import { motion } from 'framer-motion';
import Player from './Player';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Row(props) {
    var cl = 'white';
    const [ view, setViews] = useState("");
    if(props.index%2 ==0 ){
        cl='#e6e7ef'
    }



    return (
    <motion.div layout id='row_header'  style={{backgroundColor:cl}}
        transition={{duration:2}}> 
        

        <Link to={`/player/${props.ids}`} name='{props.name}'>
            <table id="rowTable" style={{width:'100%'}}  >
                
                <colgroup>
                    <col span="1" style={{width: '4%'}}/>
                    <col span="1" style={{width: '4%'}}/>
                    <col span="1" style={{width: '45%'}}/>
                    <col span="1" style={{width: '20%'}}/>
                    <col span="1" style={{width: '20%'}}/>
                </colgroup>
            <tbody>
                    <tr>
                    <td id='green'></td>
                    <td id='rank'>{props.rank}</td>
                    <td id='name' style={{textTransform:'capitalize', textAlign:"center"}}>{props.name}</td>
                    <td id='gwPoints'>{props.gwPoints}</td>
                    <td id='totalPoints'> {props.totalPoints} </td>
                </tr>
            </tbody>
            </table>
        </Link>
    </motion.div> 
    )
}

export default Row
