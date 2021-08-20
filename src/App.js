import React from 'react';
import './App.css';
import Header from './js/Header/Header';
import Footer from './js/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Player from './js/Body/PlayerPage/Player';
import TabularBody from './js/Body/LeaguePage/TabularBody';
import PremTable from './js/Body/Widgets/PremTable';

function App() {

  return (
    <div className="app" >
        <Header/> 
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
