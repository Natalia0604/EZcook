import React,{useState} from 'react';

export default function Ingredients() {
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
    <>
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
    </>
    )
}
