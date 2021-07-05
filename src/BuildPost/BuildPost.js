import React from 'react';
import pizza from '../img/pizza.png';
import "./Components/BuildPost.css";
import Ingredients from './Components/Ingredients';
import Directions from './Components/Directions';

export default function BuildPost() {
   
    return (
      <div className="container">
        <h2>料理名稱</h2>
          <div className="dish-info">
            <div className="receipe-img-container">
            <img className="pizza" src={pizza} alt="pizza"/>
          </div>
          <div className="dish-info-text">
            <div className="dish-info-field">
              <lebel className="sub-title">烹調時間(分鐘)</lebel>
              <select 
                className="receipe-input" 
                name="time"
              >
                <option value="">--請選擇烹調時間--</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
              </select>
              <input type="submit" value="Submit"/>
            </div>   
            <div className="dish-info-field">
              <lebel className="sub-title">份量(人份)</lebel>
              <select className="receipe-input" name="serving">
                  <option value="">--請選擇份數--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
              </select>
              <input type="submit" value="Submit"/>
            </div>
            <div className="description">
              <span className="sub-title">簡介</span>
              <input  
                  className="receipe-input" 
                  placeholder="請輸入食譜敘述"  
                  name=" descriptions"
              />
            </div>
          </div>
        </div>
        <hr/>
        <Ingredients/>
        <hr/>
        <Directions/>
    </div>
    );
  }