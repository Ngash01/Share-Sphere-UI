import React, { useContext, useEffect, useState } from 'react';
import "./feed.scss"
import Share from '../share/Share';
import Post from '../posts/Post';
import { Posts } from '../../DummyData';
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

 export const Feed = ({username}) => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)


  const{user} = useContext(AuthContext)
  console.log("users timeline",user?.data._id)


  useEffect(()=>{
    const fetchedData = async()=>{
      try{
      const res = username ?  await axios.get(`https://share-sphere.onrender.com/posts/profile/${username}`)
        : await axios.get(`https://share-sphere.onrender.com/posts/timeline/${user?.data._id}`)

        if (res.data.length > 0) {
          // Check if there's data, if yes, set isFetching to false
          setIsFetching(false);
        }
      setPosts(res.data.sort((p1, p2) => {
        return (
          new Date(p2.createdAt) - new Date(p1.createdAt)
        )
      }))
      setIsLoading(true)
      console.log("all posts in feed",res.data)
      console.log(res.data.length)
  }
  catch(err){
    console.log(err)
  }
}

  fetchedData()

  },[username, user?.data._id, posts])

  return (
    <div className='feed'>
        {username === user?.username &&  <Share/>}
        {/* {isFetching && <h2>Fetching...</h2>} */}

         {posts.map((post)=>{
          return <Post key={post._id} post={post} isLoading={isLoading}  />
         })}

        {/* // navigate('/follow') */}

        {/* {Posts.map((post)=>{
          return (
            <Post key={post.id} post={post}/>
          )
        })} */}
    </div>
  )
}


