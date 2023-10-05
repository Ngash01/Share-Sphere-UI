import React, { useEffect, useState } from 'react'
import "./rightBar.scss"
import axios from 'axios'

const RightBar = () => {
  return (
    <div className='RightBar'>
      <div className="wrapper">
        <div className="birthdayContainer">
          <img src="/assets/giftbox.jpg" className='birthdayImg' alt="" />
          <span>
            <b>Angela Angie</b> and <b>3 other Friends</b> have their birthday's today
          </span>
        </div>
        <img src="/assets/party1.jpeg" className='partyImg' alt="" />
        <h3>Online friends</h3>
        <ul className='SidebarList' >
            <li className='SideBarListItem'>
                <img src="/assets/avatar 11.jpeg" className='avatarsidebar' alt="" />
                <span className="sidebarListItemText">Christina Morillo</span>
                <span className="onlineIcon"></span>
            </li>
            <li className='SideBarListItem'>
                <img src="/assets/postpic1.jpeg" className='avatarsidebar' alt="" />
                <span className="sidebarListItemText">Angela Chikuza</span>
                <span className="onlineIcon"></span>
            </li>
            <li className='SideBarListItem'>
                <img src="/assets/postpic3.jpeg" className='avatarsidebar' alt="" />
                <span className="sidebarListItemText">Juma Barassa</span>
                <span className="onlineIcon"></span>
            </li>
           </ul>
           </div>
           </div>
  )
}

export default RightBar; 


