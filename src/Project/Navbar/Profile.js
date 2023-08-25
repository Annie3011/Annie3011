import React from 'react'
import NavScrollExample from './Navbars'
import '../Navbar/Profile.css'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  return (
    <div>
      <NavScrollExample/>
      <h4 className='move1'>My Account</h4>
      <div id='flex1'>
        <div>
        <img src={require("../brown-hair-businesswoman.webp")} width={'300rem'} height={'300rem'}/>
        </div>
        <div>
        <h6><b>Username:</b>Annie Ganesh</h6>
        <h6><b>Mail:</b>hbx@gmail.com</h6>
        <h6><b>Mobile Number:</b>1234567890</h6>
        <h6><b>Saved Adress:</b>no.62,jklstreet,chennai,India</h6>
        </div>
        </div>
        <h4 className='move1'>Contact us</h4>
        <div id='flex2'>
        <div>
          <img src={require("../cc.png")} width={'150rem'} height={'150rem'}/>
        </div>
        <div>
        <h4>Customer Care Helpline</h4>
        <h5>6256971232</h5>
        </div>
        </div>
        <div>
          <button id='btt7' onClick={()=>navigate('/login')}>Logout</button>
        </div>
      </div>
  )
}

export default Profile