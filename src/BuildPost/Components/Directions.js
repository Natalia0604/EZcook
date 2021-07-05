import React from 'react';
import pasta from '../../img/pasta.png';

export default function Directions(values,setValues) {
    // const [list, setList] = useState([]); //[{count:1,text:"步驟內容"},{count:2,text:"步驟內容2"}]
    // const [count, setCount]= useState(1);
    // const [text, setText] = useState("");
    // const addText=()=>{
    //     let item={
    //         count:setCount(prevCount=>{
    //             prevCount+1
    //         }),
    //         text:text
    //     }
    // }

    return (
        <>
            <span className="sub-title">步驟</span>
            <div className="steps">
                <div className="step-btns">
                    <button className="step-btn">新增步驟</button>
                    <button className="step-btn">刪除步驟</button>
                    <button className="step-btn">移動步驟</button>
                </div>
                <div className="step-item">
                    <div className="step-item-img-container">
                        <img className="step-item-img" src={pasta}/>
                    </div>
                    <div className="step-item-info">
                        <p className="step-item-number">1</p>
                        <input 
                            className="step-item-inputtext" 
                            placeholder="請輸入步驟說明(100字以內)" 
                            name="directions"
                            
                        />
                    </div>
                </div>
            </div>
            <div className="steps">
                <div className="step-btns">
                    <button className="step-btn">新增步驟</button>
                    <button className="step-btn">刪除步驟</button>
                    <button className="step-btn">移動步驟</button>
                </div>
                <div className="step-item">
                    <div className="step-item-img-container">
                        <img className="step-item-img" src={pasta}/>
                    </div>
                    <div className="step-item-info">
                        <p className="step-item-number">1</p>
                        <input className="step-item-inputtext" placeholder="請輸入步驟說明(100字以內)"/>
                    </div>
                </div>
                {/* 將steps變成一個function */}
            </div>
        </>
    )
}
