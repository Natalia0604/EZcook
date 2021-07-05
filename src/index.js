import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './Nav';
import HomePage from "./HomePage/HomePage.js";
import BuildPost from "./BuildPost/BuildPost.js";
import BuyList from "./BuyList/BuyList.js";
import ViewPost from "./ViewPost/ViewPost.js";
import Member from "./Member/Member.js";
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
          <Route path="/ViewPost" component={ViewPost}/>
          <Route path="/Member" component={Member}/>
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(<App />,document.getElementById('root'));

