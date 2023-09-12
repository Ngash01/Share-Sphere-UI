import React from 'react'
import "./Share.scss";
import {MdPermMedia, MdLocationPin} from "react-icons/md"
import {PiTagSimpleFill} from "react-icons/pi"
import {BiSolidHappyAlt} from "react-icons/bi"

const Share = () => {
  return (
    <div className='share'>
        <div className="wrapper">
            <div className="top">
                <img src="/assets/mikhailportrait.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="bottom">
                <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia className='standardIcons'/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <PiTagSimpleFill className='standardIcons'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdLocationPin className='standardIcons'/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <BiSolidHappyAlt className='standardIcons'/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                </div> 
                <button>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share;