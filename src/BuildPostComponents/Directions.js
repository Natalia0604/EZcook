import React from 'react';
import pasta from './pasta.png';

export default function Directions() {
    const imgStyle={
        width:'100px',
        height: '100px'
    }
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
        <div className="steps">
            <div className="step">
                <div className="img-Container">
                <img className="step-img" src={pasta} style={imgStyle}/>
                </div>
                <div className="step-info">
                    <h3></h3>
                    <input className="step-input"/>
                </div>
            </div>

            <div className="step">
                <div className="img-Container">
                <img className="step-img" src={pasta} style={imgStyle}/>
                </div>
                <div className="step-info">
                    <h3>1</h3>
                    <input className="step-input"/>
                </div>
            </div>
        </div>
    )
}
