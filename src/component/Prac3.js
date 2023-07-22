import { useState } from "react"
import Prachild from "../component/Prachild"
function Prac(){
 const[wish,setWish]=useState([]);
 const[info,addInfo]=useState('');
 const[gifo,addGifo]= useState('');
 const addit =()=>{
    let abc1 = {
        id:wish.length+1,
        one:info,
        two:gifo,
    }
setWish(wish.concat(abc1));

 }
 const editInfo = () =>{

 }
 const delInfo = () =>{
    
 }
 return(
    <>
    <input value={info} placeholder="wish" onChange={(e)=>addInfo(e.target.value)}></input>
    <input value={gifo} placeholder="Greet" onChange={(e)=>addGifo(e.target.value)}></input>
    <button onClick={addit}>Add</button>
    {wish.map((ele)=>{
        return(
            <>
            <Prachild attri={ele}/>
            <button onClick={()=>editInfo(ele.id)}>Edito</button>
            <button onClick={()=>delInfo(ele.id)}>Deletee</button>
            </>
        )
    })}
    </>
 )
}

export default Prac