import firebase from "firebase/app";
import "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './Nav';
import HomePage from "./HomePage";
import BuildPost from "./BuildPost";
import BuyList from "./BuyList";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/BuyList" component={BuyList}/>
          <Route path="/BuildPost" component={BuildPost}/>
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(<App />,document.getElementById('root'));

