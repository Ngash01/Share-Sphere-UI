import React, { useContext, useEffect, useState, useRef } from 'react'
import "./Share.scss";
import {MdPermMedia, MdLocationPin} from "react-icons/md"
import {PiTagSimpleFill} from "react-icons/pi"
import {BiSolidHappyAlt} from "react-icons/bi"
import { AuthContext } from '../../context/AuthContext';
import axios from "axios"
import {BsPersonCircle} from "react-icons/bs"

const Share = () => {
    const [userInfo, setUserInfo] = useState()
    const {user} = useContext(AuthContext)
    const [file, setFile] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)


    // console.log("user data id in share", user?.info._id)

    useEffect(()=>{
        setUserInfo(user?.data)
        // console.log(user?.data)
    },[user?.data])

    const desc = useRef()
    console.log("share's userId", userInfo?._id)


    const handleSubmit = async(e)=>{

        e.preventDefault()

        const formData = new FormData()
        console.log("formData", formData)

        if(file){
            formData.append("myImg", file)
            console.log("file appended", file)
        }

        try{
        setIsDisabled(true)
        const imgUrl = await axios.post(`https://share-sphere.onrender.com/upload`, formData)
        console.log("response..", imgUrl.data)


        const newPost ={
            userId: userInfo._id,
            desc: desc.current.value,
            img: imgUrl.data
        }
    
        await axios.post("https://share-sphere.onrender.com/posts/create", newPost)
        window.location.reload()
        }
        catch(err){
            console.log(err)
        }
        finally{
            setIsDisabled(false)
        }
        

        desc.current.value = ""

    }

    const handleImgUpload = (e)=>{
        setFile(e.target.files[0])
        console.log("This is the img",file)
    }

  return (
    <div className='share' style={{height: `${file ? "190px" : "170px"}`}}>
        <div className="wrapper">
            <div className="top">
                {userInfo?.profilePic ? 
                (<img src={userInfo?.profilePic} alt="" className="shareProfileImg" />) : <BsPersonCircle style={{fontSize:"30px", cursor:"pointer"}}/> }
                <input placeholder={`When sharing include both a caption and a photo...`} 
                className="shareInput"  ref={desc} required/>
            </div>
            <hr className="shareHr" />
            <form className="bottom" onSubmit={handleSubmit}>
                <div className="shareOptions">
                        <label htmlFor='uploadFile' className="shareOption">
                            <MdPermMedia className='standardIcons'/>
                            <span className="shareOptionText">Photo or video</span>
                            <input type="file" id='uploadFile' style={{display:"none"}} onChange={handleImgUpload}/>
                        </label>
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
                <button className='shareBtn' type='submit' disabled={isDisabled}>Share</button>
            </form>
            {file ?
            <div style={{display:"flex", gap:"1.3rem", alignItems:"center"}}>
                <p>Selected file: {file.name.length > 20 ? `${file.name.substring(0,30)}...` : file.name}</p> 
                <p onClick={()=>setFile("")} style={{cursor:"pointer", color:"black", fontWeight:"700"}}>X</p> 
            </div> 
            : ""}
            
        </div>
    </div>
  )
}

export default Share;

