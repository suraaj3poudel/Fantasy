import React from 'react';
import './App.css';
import "./Header"
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Player from './Player';
import TabularBody from './TabularBody';

function App() {

 

  return (
    <div className="app">
        <Header/>
        <div class="body">
        <Router>
          <Route exact path="/:id" component={TabularBody}/>
          <Route exact path = "/player/:name" component={Player}/>
        </Router>
        </div>
        <Footer/>   
    </div>
  );
}

export default App;
