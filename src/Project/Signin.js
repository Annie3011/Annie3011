import React from 'react';
import { emailValidator, passwordValidator } from '../Project/regexValidator';
import {Link, useHistory} from "react-router-dom"
import "../Project/Signin.css"
function Signin(){
//    const history = useHistory()
	const [input, setInput] = React.useState({ email: '', password: '' });
	const [errorMessage, seterrorMessage] = React.useState('');
	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	// React.useEffect(()=>{
	// 	if(localStorage.getItem('auth')) history.push('/')
	// },[])
	const formSubmitter = e => {
		e.preventDefault();
		seterrorMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');
		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');
		// history.push('/')
		// localStorage.setItem('auth', true)
	};
    return(<>
	<div className='kll'>
    <div id='div3'>
        <form onSubmit={formSubmitter} className='inp2'>
             <h1>Login Here</h1> 
             {errorMessage.length > 0 && <div style={{marginBottom:"10px",color:"red"}}>{errorMessage}</div>}
            <label>Email</label> 
            <input type='email' name='email'placeholder="Enter your Mail" onChange={handleChange}></input>
            <label>Password</label>
            <input type='password' name='password' placeholder="Enter your password" onChange={handleChange}></input> 
			<button className="btt10"><Link to="/Dashboard" className="btt10">Login</Link></button>
        </form>
    </div>
	</div>
    </>)
}
export default Signin