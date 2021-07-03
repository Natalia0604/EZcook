import {firestore} from "../firebase-service.js";
import React,{useRef} from 'react';
import uuidv4 from 'uuid/v4';

export default function ItemList({setItems}){
    const itemNameRef = useRef();
    function handleAddItem(e){
        e.preventDefault();
        const pername = itemNameRef.current.value;
        let peritem={
            id:uuidv4(),
            name:pername,
            complete:false
        };
            //將資料存到firestore中
        firestore.collection("todo").doc(peritem.id).set(peritem).then(()=>{
            if (pername === "") return //空白不顯示
            console.log(pername);
            setItems(prevItems => {
                return[...prevItems,peritem]
            })
            itemNameRef.current.value = null;  //清空新增品項框
        });   
    };
    return (
        <>
            <div className="input-cloumn">
                <input ref={itemNameRef} className="newItem" type="text" placeholder="新增品項"/>
                <button className="add-btn" onClick={handleAddItem}>+</button>
            </div>
        </>
    );
}
