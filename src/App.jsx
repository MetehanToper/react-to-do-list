import { BsDot } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { FaListCheck } from 'react-icons/fa6'
import React , { useState } from 'react'
import './App.css'

function App() {

   const [newItem, setNewItem]= useState(""); 
   const [items, setItems]= useState([]);

   function addItem(){

    if(!newItem){
      alert("ENTER AN İTEM..");
      return;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem,
      isCompleted: false,
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("");
   }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addItem();
    }
  }



   function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
   }   
   function lineItem(id) {
    const updatedItems = items.map((item) =>{
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }; // Tamamlama durumunu tersine çevir
      }
      return item; // Eksik ifade, bu öğeyi olduğu gibi geri döndürmek için kullanılır.
    });
    setItems(updatedItems);
  }


  return (
    <>
      <main className='mt-9 flex justify-center '>
        <section className='border-solid rounded-lg border-2 border-gray-400 bg-slate-500 text-center w-3/5 '> 
            <h1 className='text-xl font-bold m-5 font text-red-900 flex justify-center items-center gap-3'> <FaListCheck />  TO-DO LİST APP</h1> 

            <input 
              type='text'
              placeholder='Add an item..'
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              onKeyPress={handleKeyPress}
              className='w-1/2 h-8 rounded-lg text-center'
            />

             <button className='w-24 ml-2 border-solid rounded-lg border-2 bg-red-900 text-center text-pink-50 py-1 px-1.5 hover:bg-pink-50 hover:text-red-900 ' onClick={() => addItem()} > ADD </button>

            <ul className='block mt-3 p-5 list-inside text-start '>
              {items.map(item => {
                return(
                  <li  className={`text-lg list-disc m-2 text-pink-50 border-solid border-2 w-full flex justify-between p-2 ${item.isCompleted ? 'line-through' : ''}`}
                  key={item.id}> 
                  <BsDot 
                  className="text-3xl" /> {item.value}
                  <div className="flex items-center ">
                    <button className='w-8 border-solid rounded-lg border-2 bg-green-900 text-pink-50 py-1 mx-5
                    text-center text-sm '  onClick={() => lineItem(item.id)} > <MdOutlineDoneOutline className="text-lg w-full " /> </button>
                    <button className='w-8 border-solid rounded-lg border-2 bg-red-900 text-pink-50 py-1 mx-5
                    text-center text-sm '  onClick={() => deleteItem(item.id)} > <AiFillDelete className="text-lg w-full " /> </button>
                  </div>
                  </li>
                )
              })}
            </ul>
        </section>
      </main>
    </>
  )
}

export default App
