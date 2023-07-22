import axios from "axios";
import { Component } from "react";

class Basiccomp extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
       
    };
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/comments')
    .finally(()=>{
    })
    .then((res)=>{
       
        this.setState({ data:res.data})
    })
    .catch(()=>{
        this.setState({data:[]})
    })
    }
    Changehandler() {
        this.setState({
            data: "Welcome"
        })
    }
    render(){
        return (
            <>
                {/* <h2>{data}</h2>
                <button onClick={() => this.Changehandler()}>Change</button> */}
            {this.state.data.map((ele)=>{
            return <h1 >{ele.name}</h1>
        })}
            </>
        )
    }
};



export default Basiccomp