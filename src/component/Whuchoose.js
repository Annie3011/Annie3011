import '../component/Whychose.css'

import chose1 from '../component/chose1.jpg'
import chose2 from '../component/chose2.png'
import chose3 from '../component/chose3.png'
function Whychose(){
    return(
        <>
        <div id='bgc'>
        <div id='wcu'>
            <h1>Why Chose us</h1>
        </div>
        <div id='lin3'></div>
        <div id='fli'>
            <div className='cln'>
                 <img src={chose1}/>
                 <h1>Project Done</h1>
                 <h1>1000+</h1>
                 <button>Read More</button>
            </div>
            <div className='cln'>
                 <img src={chose2}/>
                 <h1>Happy Clients</h1>
                 <h1>900+</h1>
                 <button>Read More</button>
            </div>
            <div className='cln'>
                 <img src={chose3}/>
                 <h1>Awards</h1>
                 <h1>100+</h1>
                 <button>Read More</button>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Whychose;