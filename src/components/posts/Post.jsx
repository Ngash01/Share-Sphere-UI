import React, { useState } from 'react';
import "./Post.scss";
import {FiMoreVertical} from 'react-icons/fi'
import {SiGooglemessages} from "react-icons/si"
import {FcLike} from "react-icons/fc"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {IoMdShareAlt} from "react-icons/io"
import {BiBarChartAlt} from "react-icons/bi"
import { Users } from '../../DummyData'; 


const Post =  ({post}) => {
    const user = Users.filter((user)=>user.id === post.userId)
    const username = user[0].username;
    const profilePicture = user[0].profilePicture;
    console.log(profilePicture)

    const [like, setLike] = useState(false)
    const [count, setCount] = useState(post.likes)

    const handleLike = ()=>{
        setLike((curr)=> curr ? false : true)
        setCount((current)=> like ? current - 1 : current + 1)
    }

  return (
    <div className='post'>
        <div className="wrapper">
            <div className="top">
                <div className="TopLeft">
                    <img src={profilePicture}className='postProfileImg' alt="" />
                    <span className="postUsername">{username}</span>
                    <span className='postTime'>{post.date}</span>
                </div> 
                <div className="TopRight">
                    <FiMoreVertical style={{cursor:"pointer"}}/>
                </div>
            </div>
            <div className="center">
                <p className='postCaption'>{post.desc}</p>
                <img src={post.photo} className='postImg' alt="" />
            </div>
            <div className="bottom">
                <span className='bottomInfo' onClick={handleLike}>
                    {!like ? <AiOutlineHeart className='bottomIcons' /> : <FcLike  className='bottomIcons' />}
                    <p>{count} likes</p>
                </span>
                <span className='bottomInfo'>
                    <FaRegComment className='bottomIcons'/>
                    <p>32 Comments</p>
                </span>
                <span className='bottomInfo'>
                     <IoMdShareAlt className='bottomIcons'/>
                     <p>7 Shares</p>
                </span>
                <span className='bottomInfo'>
                    <BiBarChartAlt/>
                    <p>12.1K Activity</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Post;

