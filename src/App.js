import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Basket from './components/Basket'
import Header from './components/Header'
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
