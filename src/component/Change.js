import { useState } from "react";
function Change(){
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
export default Change