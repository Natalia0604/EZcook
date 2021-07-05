import "./Components/BuyList.css";
import React,{useState} from 'react';
import ShoppingList from './Components/ShoppingList';
import Item from './Components/Item';
import ItemList from "./Components/ItemList";
import '../App.css';

export default function BuyList() {
    const [items, setItems] = useState([]);
    // useEffect(()=>{
    //     firestore.collection("todo").get().then((querySnapshot)=>{
    //         let data=[];
    //         querySnapshot.forEach((doc)=>{
    //           data.push(doc.data());
    //           console.log(`${doc.id} => ${doc.data()}`);
    //         });
    //         setTodos(data);
    //     });
    // },[true])

    function toggleItem(id){
        const NewItems =[...items]
        const item = NewItems.find(item => item.id === id)
        item.complete = ! item.complete
        setItems(NewItems)
    }
    
    return (
    <>
        <div className="container">
           <ShoppingList items={items}/>
            <ItemList setItems={setItems}/>
            <hr/>
           <div className="shopList-container">
                {items.map((item)=>(<Item key={item.id} item={item} toggleItem={toggleItem}/>))}
           </div>
        </div>
    </>
    )
};
