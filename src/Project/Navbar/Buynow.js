import React from 'react'
import NavScrollExample from './Navbars'
import { useNavigate } from 'react-router-dom'
import '../Navbar/Buynow.css'
const Buynow = () => {
 const Navigate= useNavigate();
  return (
    <div>
     <NavScrollExample/>
      <div>
        <h1 id='he1'>Your Order has been placed</h1>
        <img  id='img1'src={require("../74500019.webp")} width={'680rem'} height={'500rem'}/>
        <br></br>
        <button onClick={()=>Navigate('/Dashboard')} id='btt8'>More shopping</button>
      </div>
    </div>
  )
}

export default Buynow