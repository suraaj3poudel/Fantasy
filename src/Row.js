import React from 'react';
import "./Row.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Row(props) {
    var cl = 'white';
    if(props.index%2 === 0 ){
        cl='#e6e7ef'
    }



    return (
    <motion.div layout id='row_header'  style={{backgroundColor:cl}}
        transition={{duration:2}}> 
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
                    <td>▼</td>
                    <td id='rank'>{props.rank}</td>
                    
                    <td id='name' style={{color:"black", textTransform:'capitalize', textAlign:"center"}}><Link to={{
            pathname: `/player/${props.ids}`,
            state: {pName : props.name,
                    
                   }
        }} style={{color:'black'}} id="link">{props.name}</Link></td>
                    
                    <td id='gwPoints'>{props.gwPoints}</td>
                    <td id='totalPoints'> {props.totalPoints} </td>
                </tr>
            </tbody>
            </table>
    </motion.div> 
    )
}

export default Row
