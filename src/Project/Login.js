import { useState } from "react";
import "../Project/Login.css"
import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); 
  };
  console.log.apply(values);
  const regibtt =()=> {
    console.log(values.password);
    if (
      values.name !== ""&&
      values.email !== ""&&
      values.password !==""&&
      values.confirmPassword !==""
    ){
      if (values.password === values.confirmPassword){
        window.location.assign("/login")
      }
    }
  }
  const Navigate= useNavigate()
  return (
    <div className="kll1">
    <div className="app">
      <form onSubmit={handleSubmit} className="inpbox">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="btt10" onClick={()=>Navigate('/submit')}>Submit</button>
        <button  className="btt10" onClick={regibtt}><Link to="/login"  className="btt10">Already User Login</Link></button>
      </form>
    </div>
    </div>
  );
};

export default Login;