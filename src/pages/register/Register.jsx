import React, { useContext, useRef, useState } from 'react'
import './Register.scss'
import { Link, Navigate } from 'react-router-dom'
import { RegisterCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const username = useRef()
  const email = useRef();
  const password = useRef();
  const country = useRef()
  const city = useRef()
  const confirmPassword = useRef()

  const handleRegister = (e)=>{
    e.preventDefault()

    RegisterCall({username:username.current.value, email:email.current.value,password:password.current.value,from:country.current.value, city:city.current.value},dispatch)

    username.current.value = ""
    email.current.value = ""
    password.current.value = ""
    country.current.value = ""
    city.current.value = ""

  }

  return (
    <div className='login'>
      <div className="wrapper">
        <div className="left">
        <img src="/assets/ShareSphereLogo 2 .png" className='logo' alt="" />
          <span className="loginDesc">
            Connect with friends and the world around you on ShareSphere
          </span>
        </ div>
        <form className="right" onSubmit={handleRegister}>
          <div className="rightTop">
            <div className='inputField'>
                {/* <span>Username</span> */}
                <input type="text" placeholder='USERNAME *' required ref={username} />
            </div>
            <div className='inputField'>
                {/* <span>Email</span> */}
                <input type="email" placeholder='YOUR EMAIL *' required ref={email}  />
            </div>
             
          </div>

          <div className="rightBottom">
            
              <div className='inputField'>
                {/* <span>From</span> */}
                <input type="text" placeholder='COUNTRY' ref={country} />
            </div> 

              <div className='inputField'>
              {/* <span >City</span> */}
              <input type="text" placeholder='CITY' ref={city} />
            </div> 
          </div>
            
            <div className="rightBottom2">

              <div className='inputField'>
                {/* <span style={{marginRight:"10px", marginTop:"-4rem"}}>password</span> */}
                <input type="password" placeholder='PASSWORD *' style={{backgroundColor: "lightcyan"}} ref={password} required/>
              </div>  
              <div className='inputField'>
                {/* <span style={{marginRight:"10px", marginTop:"-4rem"}}>password</span> */}
                <input type="password" placeholder='CONFIRM PASSWORD *' style={{backgroundColor: "lightcyan"}} ref={confirmPassword} required/>
              </div>  
            </div>
            <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress size={"20px"} style={{color:"white"}} /> : "Register"}</button>
            <span className="loginforgot">Already have an account? </span>
            <Link to={'/login'}>
              <button className="LoginButton">Login</button>
            </Link>
          </form>
      </div>
    </div>
  )
}

export default Register;