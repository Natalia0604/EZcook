import React from 'react';
import pizza from './img/pizza.png';
import Directions from './BuildPostComponents/Directions';

export default function BuildPost() {
    return (
        <div className="recipe-container">
            <div className="receipe-info-left">
                <h2>料理名稱</h2>
                <div>
                    <img className="pizza" src={pizza} alt="pizza"/>
                </div>
                <div className="time-field">
                    <span>時間</span>
                    <input/>
                </div>
                <div className="serving-field">
                    <span>份量</span>
                    <input/>
                </div>
            </div>
            <div className="receipe-info-right">
                <div className="description">
                    <span>簡介</span>
                    <input/>
                </div>
                <div className="ingredients">
                    <span>食材</span>
                    <input/>
                </div>
                <div className="directions">
                    <span>步驟</span>
                    <Directions/>
                </div>
            </div>
            <div className="buttons">
                <button>發布</button>
                <button>儲存</button>
                <button>刪除</button>
            </div>
        </div>
    )
}
