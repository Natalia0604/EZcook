import React from 'react';
import pizza from './img/pizza.png';
import Directions from './BuildPostComponents/Directions';
import './App.css';
import "./BuildPostComponents/BuildPost.css";
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
                        <select className="receipe-input" name="time">
                            <option value="">--請選擇所需時間--</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                        </select>
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
                    </div>
                    <div className="description">
                        <span className="sub-title">簡介</span><br/>
                        <input  className="receipe-input" placeholder="請輸入食譜敘述"/>
                    </div>
                </div>
            </div>

            <div className="dish-ingredient">
                <span className="sub-title">食材</span>
                <div className="ingredients">
                    <div className="ingredient-item">
                        <input className="receipe-input" placeholder="請輸入需要食材"/>
                        <input className="receipe-input" placeholder="請輸入需要份量"/>
                        <button className="delete-ingredient">刪除食材</button>
                    </div>
                    <div className="ingredient-item">
                        <input className="receipe-input" placeholder="請輸入需要食材"/>
                        <input className="receipe-input" placeholder="請輸入需要份量"/>
                        <button className="delete-ingredient">刪除食材</button>
                    </div>
                    {/* 將ingredient-item變成一個獨立fnction */}
                    <button className="add-ingredient">加入食材</button>
                    {/* 改按鈕的長度跟位置 */}
                </div>
            </div>
            
            <div className="dish-direction">
                <Directions/>
            </div>
            <div className="buttons">
                <button className="post-btn">發布</button>
                <button className="post-btn">儲存</button>
                <button className="post-btn">刪除</button>
            </div>
        </div>
    )
}
