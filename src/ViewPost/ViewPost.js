import React, {useState} from 'react';
// import pizza from './img/pizza.png';
// import pasta from './BuildPostComponents/pasta.png';
import "../BuildPost/Components/BuildPost.css";

export default function ViewPost() {
    const [count ,setCount] = useState(0);

    function minus(){ 
        setCount((preCount)=>preCount -1)
    }

    function plus(){
        setCount((preCount)=> preCount + 1)
    }
    return (
        <div className="container">
            <h2>料理名稱</h2>
            <div className="dish-info">
                <div className="receipe-img-container">
                    {/* <img className="pizza" src={pizza} alt="pizza"/> */}
                </div>
                <div className="dish-info-text">
                    <div className="dish-info-field">
                        <lebel className="sub-title">烹調時間(分鐘)</lebel>
                        <span className="need-time">顯示需要時間</span>
                    </div>
                    <div className="dish-info-field">
                        <lebel className="sub-title">份量(人份)</lebel>
                        <span className="serving">顯示幾人份</span>
                    </div>
                    <div className="description">
                        <span className="sub-title">簡介</span><br/>
                        <span>顯示簡介內容</span>
                    </div>
                </div>
            </div>

            <div className="dish-ingredient">
                <span className="sub-title">食材</span>
                <div className="ingredients">
                    <div className="serving-controll">
                        <button className="minus-btn" onClick={minus}>-</button>
                        <span className="count">{count}</span>
                        <button class="plus-btn" onClick={plus}>+</button>
                    </div>
                    <div className="ingredient-item">
                        <div>顯示需要的食材</div>
                    </div>
                    <button className="add-ingredient">加入購物清單</button>
                    {/* 改按鈕的長度跟位置 */}
                </div>
            </div>
            <span className="sub-title">步驟</span>
            <div className="steps">
                <div className="step-item">
                    <div className="step-item-img-container">
                        {/* <img className="step-item-img" src={pasta}/> */}
                    </div>
                    <div className="step-item-info">
                        <p className="step-item-number">1</p>
                        <div className="step-item-info">步驟描述</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
