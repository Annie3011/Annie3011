import axios from "axios"
import { useEffect, useState } from "react"
import '../component/Page.css'
function Pagination() {
    const [posts, setPosts] = useState([]);
    const[perpage,setPerpage] =useState(10);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
    }, []);
    const numofPages = Math.ceil(posts.length/perpage);
    const Pages = [...Array(numofPages+1).keys()].slice(1);
    const [currentpage,setCurrentpage] = useState(1);
    const indexOflast = currentpage * perpage;//2*10=20
    const indexofFirst = indexOflast - perpage;//20-10=10
    const Visibleposts = posts.slice(indexofFirst,indexOflast); //10,20
    const prevHandler =()=>{
        if(currentpage !==1){setCurrentpage(currentpage-1)};
    };
    const nextHandler =()=> {
        if(currentpage !== numofPages){setCurrentpage(currentpage+1)};
    };
    console.log(Pages);
    return (
        <>
        <div>
                {Visibleposts.map((posts)=>
                <p key={posts.id}>{posts.title}</p>)}
            </div>
            <div>
                <span onClick={prevHandler}>Prev</span>
                <h6>{Pages.map((page)=>(
                  <span onClick={()=>setCurrentpage(page)} key={page}>{page}</span>  
                ))}
                </h6>
                <span onClick={nextHandler}>Next</span>
            </div>
        </>
    )
}
export default Pagination