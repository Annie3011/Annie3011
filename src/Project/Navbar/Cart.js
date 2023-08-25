import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Navbar/Cart.css'
import NavScrollExample from './Navbars'
import { render } from '@testing-library/react'
const Cart = () => {
  const [data, setData] = useState([])
  const [Quantity,SetQuantity]= useState()
  useEffect(() => {
    axios.get(`http://localhost:3000/carts`)
        .then((res) =>
            setData(res.data)
        )
        .catch(() => {
            setData([])
        }
        )
}, [])
const Minus=(data)=>{
  data.quantity =data.quantity-1
  axios.put(`http://localhost:3000/carts/${data.id}`,data)
  .then((res)=>{
      console.log(res)
      SetQuantity(res)
  })
  .catch((err)=>{
      console.log(err);
  })
}
const Addition=(data)=>{
  data.quantity = data.quantity+1
  axios.put(`http://localhost:3000/carts/${data.id}`,data)
  .then((res)=>{
      console.log(res)
      SetQuantity(res)
  })
  .catch((err)=>{
      console.log(err);
  })
}
const Deletion=(id)=>{
  const arr = data.filter((e) => e.id !== id);
  axios.delete(`http://localhost:3000/carts/${id}`)
  .then((res)=>{
    console.log(res)
    setData(arr)
})
.catch((err)=>{
    console.log(err);
})

}
  return (
    <div>
      <NavScrollExample/>
     <div className='box0'>
      <h5>Product Image</h5>
      <h5>Product Name</h5>
      <h5>Product Price</h5>
      <h5>Quantity</h5>
      <h5>Delete</h5>
    </div>  
    {data.map((ele)=>{
      console.log(ele.actual_price)
      return(<>
    <div className='box1'>
    <img src={ele.image} width={'100px'} height={'100px'} ></img>
    <p>{ele.name}</p>
    <h5>{ele.price}</h5>
    <button id='blue'className='btt5'onClick={()=>Minus(ele)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></button>
    <p>{ele.quantity}</p>
    <button id='green'className='btt5' onClick={()=>Addition(ele)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>
    <button id='red'className='btt5'  onClick={()=>Deletion(ele.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></button>
    </div>
    </>)})}</div>
  )
}

export default Cart