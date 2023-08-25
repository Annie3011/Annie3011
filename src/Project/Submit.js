import React, { useState } from 'react'
import greentick from './Navbar/green tick.avif'
import '../Project/Submit.css'
import { useNavigate } from 'react-router-dom'

const Submit = () => {
  return (
    <div >
     <img className='nnm' src={require("./Navbar/green tick.avif")} width={"480px"} height={"460px"}/>
     <h1 id='vbn'>Successfully Registered</h1>
    </div>
  )
}

export default Submit