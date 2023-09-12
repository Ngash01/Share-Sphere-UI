import React from 'react';
import "./TopBar.css";
import {MdSearch} from "react-icons/md";
import {IoMdPerson, IoMdNotifications} from "react-icons/io";
import {BsChatLeftDotsFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const TopBar = () => {
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
            <img src="/assets/mikhailportrait.jpeg" alt="" className="avatar" />
        </div>
    </div>
  )
}

export default TopBar;