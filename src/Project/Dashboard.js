import React from 'react'
import NavScrollExample from './Navbar/Navbars'
import Holder from './Navbar/Holder'
import Advslide from './Advslide'
import Categoryprods from './Navbar/Categoryprods'
import { useNavigate } from 'react-router-dom'
import '../Project/Dashboard.css'
const Dashboard = () => {
  const Navigate= useNavigate()
  return (
    <div>
    <NavScrollExample/>
    <Advslide/> 
    <Categoryprods case={"Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"}/>
    <button onClick={()=>Navigate("/Dashboard/cables")} className='btt4'
    >See More</button> 
    <Categoryprods case={"Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"}/>
    <button onClick={()=>Navigate("/Dashboard/mobile")} className='btt4'
    >See More</button> 
    <Categoryprods case={"Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"}/>
    <button onClick={()=>Navigate("/Dashboard/earphones")} className='btt4'
    >See More</button> 
     <Categoryprods case={"Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"}/>
    <button onClick={()=>Navigate("/Dashboard/tv")} className='btt4'
    >See More</button>
    <Categoryprods case={"Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"}/>
    <button onClick={()=>Navigate("/Dashboard/remote")} className='btt4'
    >See More</button> 
    {/* <Holder/>  */}
    </div>
  )
} 

export default Dashboard