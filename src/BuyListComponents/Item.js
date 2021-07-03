import React from 'react'

export default function Item({item,toggleItem}) {
    function handleTodoClick(){
        toggleItem(item.id);
    }
    return (
        <>
        <div className="item-container">
            <input type="checkbox" className="check-item" checked={item.complete} onChange={handleTodoClick}></input>
            <span className="item-name">{item.name}</span>
            <button className="delete-btn">x</button>
        </div>
        </>
    )
}
