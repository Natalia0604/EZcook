import React,{useState} from 'react';
import pizza from './img/pizza.png';
// import pasta from './BuildPostComponents/pasta.png';
// import Directions from './BuildPostComponents/Directions';
import './App.css';
import "./Components/BuildPost.css";

export default function BuildPost() {
    const [inputList, setInputList] = useState([{ ingredients: "", ingredientCount: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { ingredients: "", ingredientCount: "" }]);
    };
   
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
        <div className="dish-ingredient"> 
          <span className="sub-title">食材</span>
          <div className="ingredients">
            {inputList.map((x, i) => {
              return (
                <div className="ingredient-item">
                  <input
                    className="receipe-input"
                    name="ingredients"
                    placeholder="請輸入需要食材"
                    value={x.ingredients}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="receipe-input"
                    name="ingredientCount"
                    placeholder="請輸入需要份數"
                    value={x.ingredientCount}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <span className="btn-box">
                    {inputList.length !== 1 && <button
                      className="delete-ingredient"
                      onClick={() => handleRemoveClick(i)}>刪除</button>}
                    {inputList.length - 1 === i && <button 
                      className="delete-ingredient"
                      onClick={handleAddClick}>增加</button>}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
    );
  }