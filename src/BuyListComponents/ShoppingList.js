import React from 'react';


export default function ShoppingList({items}) {
    return (
    <>
        <h2>我的購物清單</h2>
        <h3>共<span>{items.length}</span>個品項</h3>
    </> 
    )
}
