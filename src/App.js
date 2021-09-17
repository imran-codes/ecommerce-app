import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Basket from './components/Basket/Basket'
import Header from './components/Header/Header'
import Details from './components/Details/Details';


function App() {

  
  return (
    <Router>
      <Header />
      <div className="App">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/basket">
              <Basket />
            </Route>
            <Route path = "/details/:id">
              <Details />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
