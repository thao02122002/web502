import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [myStatus, setStatus] = useState(false);
  const [product, setProduct] = useState([{id:1, name:"Thao"}, {id:2, name:"Khai"}]);
  const removeItem = (id) => {
    const newProduct = product.filter(item => item.id !== id);
    setProduct(newProduct)
  }
  return <div>
   
    String: <div style={{background: color, width: 100, height: 100}}>Content</div><br />
    Boolean: {myStatus ? "Ket hon" : "Đoc than"}<br/>
    <hr />
    Number: {count} <br /><button onClick={() => setCount(count+1)}>Click count</button>
    <button onClick={() => setStatus(!myStatus)}>Click status</button>
    {myStatus && 
    <div> Arr: {product.map(item => item.name)} 
    <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>}
    
   

  </div>

 
}

export default App
