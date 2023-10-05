import React, { createContext, useContext, useEffect, useState } from 'react';
import "./TopBar.css";
import {MdSearch} from "react-icons/md";
import {IoMdPerson, IoMdNotifications} from "react-icons/io";
import {BsChatLeftDotsFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { RxAvatar } from "react-icons/rx"
import {BiSolidDownArrow} from "react-icons/bi"
import { LoginStart, Logout } from '../../context/AuthActions';
import {AiOutlineSetting} from "react-icons/ai"

const TopBar = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    let {user, dispatch} = useContext(AuthContext)
    console.log(user?.data)
    
    const handleDropDown = ()=>{
        setShowDropDown((curr)=> curr ? false : true)
    }

    const handleLogout = (e)=>{
        e.preventDefault()
        dispatch(Logout())
        setShowDropDown(false)
    }

  return (
    <div className='Topbar'>
        <div className="topBarLeft">
            <Link to={'/'}>
                <img src="/assets/ShareSphereLogo 2 .png" className='logo' alt="" />
            </Link>
        </div>
        <div className="topBarCenter">
            <MdSearch className='searchIcon'/>
            <input placeholder='Search for friends, posts or videos' className="searchInput" />
        </div>
        <div className="topBarRight">
            <div className="topBarLinks">
                <span className="topBarLink">HomePage</span>
                <span className="topBarLink">TimeLine</span>
            </div>
            <div className="topBarIcons">
                <div className="topBarItemIcon">
                    <IoMdPerson className='topBarIcon'/>
                    <span className='topBarItemIconBadge'>0</span>
                </div>
                <div className="topBarItemIcon" >
                    <BsChatLeftDotsFill className='topBarIcon'/>
                    <span className='topBarItemIconBadge'>0</span>
                </div>
                <div className="topBarItemIcon">
                    <IoMdNotifications className='topBarIcon'/>
                    <span className='topBarItemIconBadge'>1</span>
                </div>
                
            </div>
            <div style={{marginleft:"6rem"}} onClick={handleDropDown}>
                <AiOutlineSetting style={{cursor:"pointer", fontSize:"20px"}}/>
            </div>
            {/* <Link to={`/profile/${user?.data?.username}`}> */}
            {user?.data?.profilePic ? (
                <img src={user?.data?.profilePic} alt="" className="avatar" /> ) : <RxAvatar size={"40px"} style={{marginRight:"10px", cursor:"pointer", color:"white"}}/>
            }
            {/* </Link>  */}
           {showDropDown && <div className='dropdown' style={{position:'absolute', borderRadius:"0.4rem", top:"4.9rem", right:"3.5rem", backgroundColor:"black", padding:"0.2rem 2rem"}}>
                <p>Settings</p>
                <p onClick={handleLogout}>Log out</p>
            </div>}
        </div>
    </div>
  )
}

export default TopBar;