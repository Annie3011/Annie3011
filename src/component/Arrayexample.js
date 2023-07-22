import { useState } from "react"
import Child from "./Child"
function Arrayexample(){
    const [data,setData]= useState([]
 );
  const [userName,setUser] = useState('');
  const [age,setAge]= useState('');
  const addUser=() =>{
     let newElement = {
        id:data.length+1,
        fname:userName,
        age:+age,
     }  
     setData(data.concat(newElement)) 
  }
  const editUser = (id) =>{
    console.log(id);
     let copyData=[...data];
     let index = copyData.findIndex((ele)=>ele.id === id);
     copyData[index].age+=1;
     setData(copyData)
  }
   const delUser =(id)=> {
     let copyData=[...data];
    copyData=copyData.filter((ele)=> ele.id !==id);
   //  [.filter filters the given id and removes othres so here we given not equalls to given id so vicversa it removes selected id and shows others ]
     setData(copyData);
   }
    return(
    <>  
    <input value={userName} placeholder="Name" onChange={(e)=>setUser(e.target.value)}></input>
    <input value={age} placeholder="age" onChange={(e)=>setAge(e.target.value)}></input>
    <button onClick={addUser}>Add</button>
     {data.map((ele)=>{
        return <><Child inform={ele}/>
        <button onClick={()=>editUser(ele.id)}>Edit</button>
        <button onClick={()=>delUser(ele.id)}>Delete</button>
        </>})
     }
    
    </>
    )
}
export default Arrayexample
