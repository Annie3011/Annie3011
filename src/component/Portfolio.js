import '../component/Portfolio.css'
import prot1 from '../component/prot1.png'
import prot2 from '../component/prot2.png'
import prot3 from '../component/prot3.png'
import prot4 from '../component/prot4.png'
function Portfolio(){
    return(
        <>
        <div id='prt'>
            <h1>We Have Done Portfolio</h1>
        
        </div>
        <div id='prots'>
           <img src={prot1}/>
           <img src={prot2}/>
        </div>
        <div id='prots1'>
           <img src={prot3}/>
           <img src={prot4}/>
        </div>
        <div id='prots2'>
            <button>See More</button>
        </div>
        </>
    )
}
export default Portfolio;