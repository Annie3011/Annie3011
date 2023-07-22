import axios from "axios"
import { useEffect, useState } from "react"
import Child from "./Child"


function Loaddata(){
const[data,setData]=useState([])
const [loading,setKoading]=useState(false);
function serverCall() {
    setKoading(true)
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .finally(()=>{
      setKoading(false)
    })
    .then((res)=>{
        setData(res.data)
    })
    .catch(()=>{
        setData([])
    })
}
useEffect(function(){
    serverCall();
},[]
)
return(
    <>
    <button onClick={serverCall}>Load Data</button>
    {data.length===0 && <p>No Data found</p>}
    {loading &&<p>Loading...</p>}
    {
        data.map((ele)=>{
            return <Child inform={ele}/>
        })
    }
    </>
)
}

export default Loaddata