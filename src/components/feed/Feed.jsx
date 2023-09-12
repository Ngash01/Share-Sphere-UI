import React, { useEffect, useState } from 'react';
import "./feed.scss"
import Share from '../share/Share';
import Post from '../posts/Post';
import { Posts } from '../../DummyData';

 export const Feed = () => {

  useEffect(()=>{
    console.log("feed rendered")
  },[])

  return (
    <div className='feed'>
        <Share/>
        {Posts.map((post)=>{
          return (
            <Post key={post.id} post={post}/>
          )
        })}
    </div>
  )
}


