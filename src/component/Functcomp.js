import { useState } from "react"

function Functcomp(){
    const[uat,setuat]=useState([])
    const[Lname,setLname]=useState('')
    const[Num,setNum]=useState('')
    function addioi(){
        let Newwlw={
            id:uat.length+1,
            call:Lname,
            number:+Num
        }
    setuat(uat.concat(Newwlw)) 
    }
    const Editto= (id)=>{
        let copy=[...uat];
        let bht=copy.findIndex((ele)=>ele.id===id);
        copy[bht].number+=1;
        setuat(copy)
    }
    const Delo= (id)=>{
       let Cpy=[...uat];
       Cpy=Cpy.filter((ele)=>ele.id!==id);
       setuat(Cpy)
    }
    return(
        <>
          <input value={Lname} placeholder="name" onChange={(e)=>setLname(e.target.value)}></input>
          <input value={Num} placeholder="number" onChange={(e)=>setNum(e.target.value)}></input>
          <button onClick={addioi}>Add</button>
          {uat.map((ele)=>{
            return(<>
            <h1>{ele.call}</h1>
            <h4>{ele.number}</h4>
            <button onClick={()=>Editto(ele.id)}>Addition+</button>
            <button onClick={()=>Delo(ele.id)}>Deletion-</button>
            </>)
          })}
        </>
    )
}
export default Functcomp