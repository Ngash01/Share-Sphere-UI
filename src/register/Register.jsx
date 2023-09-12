import React, { useState } from 'react'
import './Register.scss'

const Register = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='login'>
      <div className="wrapper">
        <div className="left">
        <img src="/assets/ShareSphereLogo 2 .png" className='logo' alt="" />
          <span className="loginDesc">
            Connect with friends and the world around you on ShareSphere
          </span>
        </ div>
        <div className="right">
            <div className='inputField'>
              <span>First Name: </span>
              <input type="text" placeholder='first name'  />
            </div>
            <div className='inputField'>
              <span>Last Name: </span>
              <input type="text" placeholder='last name'  />
            </div> 
            <div className='inputField'>
              <span>Username: </span>
              <input type="text" placeholder='username'  />
            </div>      
            <div className='inputField'>
              <span style={{marginRight:"2rem"}}>email: </span>
              <input type="text" placeholder='email'  />
            </div>  
            <div className='inputField'>
              <span>password: </span>
              <input type="text" placeholder='password'  />
            </div>  
       
            <button className="loginButton">Register</button>
            <span className="loginforgot">Already have an account? </span>
            <button className="Register">Login</button>
            
            </div>
      </div>
    </div>
  )
}

export default Register;