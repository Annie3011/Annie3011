import { useState } from "react";
function Change1(){
    const[text,setText]=useState('Hello')
    return(
       <>
        <div>
       <p>{text}</p>
        <button onClick={()=>setText('Welcome')}>Change</button>
        </div>
        </>
    )
}
export default Change1