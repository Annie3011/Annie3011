import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectcounter } from "./CounterReducer"

function Counter(){
const dispatch = useDispatch()
const reduxdata = useSelector(selectcounter)
    return(
        <>
        <p>{reduxdata}</p>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>dispatch(decrement())}>Dec</button>
        </>
    )
}
export default Counter