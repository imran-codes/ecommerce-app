import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Basket from './components/Basket/Basket'
import Header from './components/Header/Header'
import Details from './components/Details/Details';
import BasketHeader from './components/BasketHeader/BasketHeader'


function App() {

  
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path = "/">
              <Header />
              <Home />
            </Route>
            <Route path = "/basket">
              <BasketHeader />
              <Basket />
            </Route>
            <Route path = "/details/:id">
              <Header />
              <Details />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
