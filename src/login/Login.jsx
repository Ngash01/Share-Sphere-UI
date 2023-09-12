import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="wrapper">
        <div className="left">
        <img src="/assets/ShareSphereLogo 2 .png" className='logo' alt="" />
          <span className="loginDesc">
            Connect with friends and the world around you on ShareSphere
          </span>
        </div>
        <div className="right">
          {/* <div className="loginBox"></div> */}
            <input type="text" placeholder='email' className='loginInput' />
            <input type="text" placeholder='password' className='loginInput' />
            <button className="loginButton">Login</button>
            <span className="loginforgot">New here? </span>
            <button className="Register">Create an Account</button>
            
            </div>
      </div>
    </div>
  )
}

export default Login;