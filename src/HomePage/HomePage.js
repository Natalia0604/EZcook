import React from 'react';
import "./Components/HomePage.css";
import cake from "../img/cake.png";

export default function HomePage() {
  
  return (
    <>
    <div className="container">
      <div className="search-bar-container">
        <div className="search-1">
          <h2>還沒有想法嗎?</h2>
          <p className="search-text">手邊有的食材</p>
          <input className="search-input"/><br/>
          <span className="search-text">想吃哪國料理? </span>
          <select name="serving">
            <option value="">--請選擇種類--</option>
            <option value="ch">台式</option>
            <option value="ja">日式</option>
            <option value="it">義式</option>
            <option value="am">美式</option>
          </select>
          <div>
            <button className="search-btn">搜尋</button>
          </div>
        </div>
        <div className="search-2">
          <h2 className="search-title-2">想吃甚麼料理?</h2>
          <input className="search-input"/>
          <div>
            <button className="search-btn">搜尋</button>
          </div>
        </div>
      </div>

      <div className="search-result">
        <h2 className="result-title">搜尋結果如下:</h2>
        <div className="result-items">
          
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p className="result-text">草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>
          <div className="result-item">
            <img className="result-img" src={cake}></img>
            <p>草莓蛋糕</p>
          </div>

        </div>
      </div>
    </div>
  </>
    )
}
