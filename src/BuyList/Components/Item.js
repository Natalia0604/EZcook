import React from 'react';
// import { firestore } from "../firebase-service";

export default function Item({item,toggleItem}) {
    
    function handleTodoClick(){
        toggleItem(item.id);
    };

    // function handleDeleteItem () {
    //     e.preventDefault();
    //     setTodos(todos.filter((el) => el.id !== todo.id));
    //     firestore.collection("todo")
    //     .doc(key)
    //     .delete()
    //     .then(() => console.log('Document successfully deleted!'))
    // };

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
