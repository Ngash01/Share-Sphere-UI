import React, { useContext, useRef, useState } from 'react'
import './Login.scss';
import { Link } from 'react-router-dom';
import { LoginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {

  const {user, isFetching, dispatch} = useContext(AuthContext)
  
  const email = useRef();
  const password = useRef();

    const handleClick = (e)=>{
      e.preventDefault()
      LoginCall({email: email.current.value, password:password.current.value}, dispatch)
    }

    // console.log(user)

  
  return (
    <div className='login'>
      <div className="wrapper">
        <div className="left">
        <img src="/assets/ShareSphereLogo 2 .png" className='logo' alt="" />
          <span className="loginDesc">
            Connect with friends and the world around you on ShareSphere
          </span>
        </div>
        <form className="right" onSubmit={handleClick}>
            <input type="email" placeholder='email' required className='loginInput' ref={email}/>
            <input type="password" placeholder='password' required className='loginInput' ref={password}/>
            <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress size={"20px"} style={{color:"white"}} /> : "Log In"}</button>
            <span className="loginforgot">New here? </span>
            <Link to={'/register'}>
              <button className="RegisterButton">Create an Account</button>
            </Link>
            
            </form>
      </div>
    </div>
  )
}

export default Login;