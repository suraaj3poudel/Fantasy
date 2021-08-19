import React from 'react';
import './App.css';
import "./Header"
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Player from './Player';
import TabularBody from './TabularBody';
import { useState } from 'react';
import PremTable from './PremTable';

function App() {

  const [visible, setstate] = useState(false)

  return (
    <div className="app" >
        <Header visible={visible}/> 
        <div className="body" >
        <Router>
          <Route exact path="/" component={TabularBody}/>
          <Route exact path="/:id" component={TabularBody}/>
          <Route exact path = "/player/:name" component={Player}/>
          <Route exact path = "/prem-table" component={PremTable}/>
        </Router>
        </div>
        <Footer/>  
    </div>
  );
}

export default App;
