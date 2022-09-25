import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email , setemail]=React.useState('');
    const [password , setpassword]=React.useState('');
    const loginhand= async()=>{
       let result= await fetch ('http://localhost:5000/login' , {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { 
          "content-Type": "application/json",
        },
       })
       result = await result.json();
       if(result.name){
        localStorage.setItem("user" , JSON.stringify(result));
        navigate("/p");
       }
       else 
       {
        alert("please enter correct details");
       }
    }
  return (
    <div className='loginpage' >
        <h1>LOGIN HERE</h1>
    <input className="login" type="email" placeholder='enter email' onChange={(e)=>setemail(e.target.value)} />
    <input className="login" type="password" placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}/>
    <button className="button" onClick={loginhand} type="button">
        LOGIN
      </button>
    </div>
  )
}