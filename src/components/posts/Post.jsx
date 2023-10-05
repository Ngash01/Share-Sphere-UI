import React, { useState, useEffect, useContext } from 'react';
import "./Post.scss";
import {FiMoreVertical} from 'react-icons/fi'
import {SiGooglemessages} from "react-icons/si"
import {FcLike} from "react-icons/fc"
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"
import {IoMdShareAlt} from "react-icons/io"
import {BiBarChartAlt} from "react-icons/bi"
import { Users } from '../../DummyData'; 
import axios from 'axios';
import {Link} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import { AuthContext } from '../../context/AuthContext';
import { format } from "timeago.js"
import {BsPersonCircle} from "react-icons/bs"


const Post =  ({post}) => {
    const {variable} = useContext(AuthContext) 
    // console.log(variable)
    const [user, setUser] = useState({})
    const [userLoading, setUserLoading] = useState(false)
    const {user: currentUser} = useContext(AuthContext)
    
    // console.log("post usersId",post.userId)

    useEffect(()=>{
        const fetchedData = async()=>{
          const res = await axios.get(`https://share-sphere.onrender.com/users/one?userId=${post.userId}`)
          setUser(res.data)
          setUserLoading(true)
        //   console.log("users data", res.data)
        }
        fetchedData()

      },[post.userId])

    
    const [like, setLike] = useState(true)
    const [count, setCount] = useState(post.likes.length + Number(278346) )
    const usersname  = (user.username)

    // useEffect(()=>{
    //     setCount(post.likes.includes(currentUser._id))
    // },[currentUser._id, post.likes])

    const handleLike = ()=>{
        try{
         axios.put(`http://localhost:5000/posts/like/${post._id}`, {userId: currentUser._id})
        //  console.log("id of the post we like", )

            setCount((current)=> like  ? current + 1 : current - 1)

        }catch(err){
            console.log(err)
        }
        setLike((curr)=> !curr)
    }

  return (
    <div className='post'>
        <div className="wrapper">
            <div className="top">
                <div className="TopLeft">
                    <Link to={`/profile/${usersname}`}>
                        {!userLoading ?   <Skeleton animation="wave" variant="circular" width={40} height={40} /> :
                         user?.profilePic ? <img src={user?.profilePic}className='postProfileImg' alt="" /> : <BsPersonCircle style={{fontSize:"35px", cursor:"pointer", color:"black"}} />
                        }
                    </Link>
                    <span className="postUsername">{user?.username}</span>
                    <span className='postTime'>{format(post?.createdAt)}</span>
                </div> 
                <div className="TopRight">
                    <FiMoreVertical style={{cursor:"pointer"}}/>
                </div>
            </div>
            
            <div className="center">
                <p className='postCaption'>{post?.desc}</p>            
                    {post?.img.startsWith('http') ? <img src={post?.img} className='postImg' alt=""/> :
                      <img src={`http://localhost:5000/Images/${post?.img}`} style={{objectPosition:"center top"}} className='postImg' alt="" /> 
                    }
            </div>
            
            <div className="bottom">
                <span className='bottomInfo' onClick={handleLike}>
                    {!like ? <FcLike  className='bottomIcons' /> : <AiOutlineHeart className='bottomIcons' />}
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


// const user = Users.filter((user)=>user.id === post.userId)
//     const username = user[0].username;
//     const profilePicture = user[0].profilePicture;
//     console.log(profilePicture)

