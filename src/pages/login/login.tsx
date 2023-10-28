import React, { useState } from "react";
import { signIn } from "../../firebase/auth";
import { useNavigate } from 'react-router-dom';
import './style.css'

interface ILogin {
    [key : string] : string;
}
const Login = () => {
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState<ILogin | null>(null);

    const handleSubmit = () => {
        if(loginData && loginData.email !== '' && loginData.email !== ''){
            const payload = {
                email:loginData?.email.trim(),
                password:loginData?.password.trim()
            }
            signIn({ ...payload,navigate});
        }else{
            alert("Some field are missing")
        } 
    }

    const handleLogin = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setLoginData((prev)=>({
            ...prev,
            [name]:value
        }))

    }


    return <>
        <div className="login-container-wrapper">
        <div className="login-container">
          <h2>Login</h2>
       
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={loginData?.email}
                onChange={(e)=>handleLogin(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={loginData?.password}
                onChange={(e)=>handleLogin(e)}
              />
            </div>
            <button onClick={()=>handleSubmit()} className="btn">Login</button>
        </div>
        </div>
    </>
}

export default Login;