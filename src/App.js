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

function App() {

  const [visible, setstate] = useState(false)

  return (
    <div className="app" onClick={()=>setstate(!visible)}>
        <Header visible={visible}/>
        <div class="body" >
        <Router>
        <Route exact path="/" component={TabularBody}/>
          <Route exact path="/:id" component={TabularBody}/>
          <Route exact path = "/player/:name" component={Player}/>
        </Router>
        </div>
        <Footer/>  
    </div>
  );
}

export default App;
