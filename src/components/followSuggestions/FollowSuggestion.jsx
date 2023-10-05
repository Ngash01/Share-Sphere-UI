import React, { useContext, useEffect, useState } from 'react'
import "./FollowSuggestion.scss"
import {BsPersonPlusFill} from "react-icons/bs"
import {BsPersonCircle} from "react-icons/bs"
import {BsPersonFillCheck} from "react-icons/bs"
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SideBar1 from '../SideBar/sideBar1'
import RightBar from '../rightbar/RightBar'

const FollowSuggestion = () => {
    const [celebFollowedCristiano, setCelebFollowedCristiano] = useState(false)
    const [celebFollowedKhloe, setCelebFollowedKhloe] = useState(false)
    const [celebFollowedQuavo, setCelebFollowedQuavo] = useState(false)

    const {user} = useContext(AuthContext)
    // console.log(user.data._id)
    const navigate = useNavigate()

        const TofollowCristiano = async()=>{
            if(!user?.data.following.includes("650d64007440b75921573e7c") && celebFollowedCristiano === false){
            try{
                const res = await axios.put("http://localhost:5000/users/650d64007440b75921573e7c/follow", {userId: user?.data._id}  )
                console.log("followed Cristiano",res)
                setCelebFollowedCristiano(true)
            }catch(err){
                console.log(err)
            }
         }
         else{
            try{
                const res = await axios.put("http://localhost:5000/users/650d64007440b75921573e7c/unfollow", {userId: user?.data._id}  )
                console.log(res.data) 
                setCelebFollowedCristiano(false)

            }catch(err){
                console.log(err)
            }
        }
        }

        const TofollowKhloe = async()=>{
            if(!user?.data.following.includes("64f0d9da64dde135d7e31295") && celebFollowedKhloe === false){
            try{
                const res = await axios.put("http://localhost:5000/users/64f0d9da64dde135d7e31295/follow", {userId: user?.data._id}  )
                console.log("followed khloe",res)
                setCelebFollowedKhloe(true)
            }catch(err){
                console.log(err)
            }
         }
         else{
            try{
                const res = await axios.put("http://localhost:5000/users/64f0d9da64dde135d7e31295/unfollow", {userId: user?.data._id}  )
                console.log(res.data)
                setCelebFollowedKhloe(false) 
            }catch(err){
                console.log(err)
            }
        }
        }

        const TofollowQuavo = async()=>{
            if(!user?.data.following.includes("64f0da31bdd55e0a42bcafd5") && celebFollowedQuavo === false){
            try{
                const res = await axios.put("http://localhost:5000/users/64f0da31bdd55e0a42bcafd5/follow", {userId: user?.data._id}  )
                console.log("followed Quavo",res)
                setCelebFollowedQuavo(true)
            }catch(err){
                console.log(err)
            }
         }
         else{
            try{
                const res = await axios.put("https://share-sphere.onrender.com/users/64f0da31bdd55e0a42bcafd5/unfollow", {userId: user?.data._id}  )
                console.log(res.data) 
                setCelebFollowedQuavo(false)
            }catch(err){
                console.log(err)
            }
        }
        }

    const handleFollow0 = ()=>{
        setCelebFollowedCristiano((curr)=>curr ? false : true)
        TofollowCristiano()

        setTimeout(()=>{
            navigate('/')
        },3000)
    }
    const handleFollow1 = ()=>{
        setCelebFollowedKhloe((curr)=>curr ? false : true)
        TofollowKhloe()

        setTimeout(()=>{
            navigate('/')
        },3000)    
    }

    const handleFollow2 = ()=>{
        setCelebFollowedQuavo((curr)=>curr ? false : true)
        TofollowQuavo()

        setTimeout(()=>{
            navigate('/')
        },3000)    
    }    


  return (
    <div className='followSuggestion'>
        <div className="sideBar">
            <SideBar1/>
        </div>
        <div className="wrapper">
        <h2>Celebrities you might want to follow</h2>

        <div className='allCelebs'>
            <div className='celebProfile'>
                <div className='celebName'>
                    {/* <BsPersonCircle style={{fontSize:"30px", cursor:"pointer"}}/> */}
                    <img src="https://www.iwmbuzz.com/wp-content/uploads/2020/03/cristiano-ronaldo-the-sportsperson-crush-across-the-globe-920x518.jpg" className='avatar' alt="" />
                    <p>Cristiano</p>
                </div>
                <div className='followCeleb' onClick={handleFollow0}>
                {celebFollowedCristiano ? <p>followed</p> :  <p>follow</p>}
                    {celebFollowedCristiano ? <BsPersonFillCheck/> : <BsPersonPlusFill/>}
                </div> 
            </div>
            <div className='celebProfile'>
                <div className='celebName'>
                    {/* <BsPersonCircle style={{fontSize:"30px", cursor:"pointer"}}/> */}
                    <img src="https://ntvb.tmsimg.com/assets/assets/521710_v9_bb.jpg?w=270&h=360" className='avatar' alt="" />
                    <p>Khloe Kardashian</p>
                </div>
                <div className='followCeleb'  onClick={handleFollow1}>
                {celebFollowedKhloe ? <p>followed</p> :  <p>follow</p>}
                    {celebFollowedKhloe ? <BsPersonFillCheck/> : <BsPersonPlusFill/>}
                </div>
            </div>
            <div className='celebProfile'>
                <div className='celebName'>
                    {/* <BsPersonCircle style={{fontSize:"30px", cursor:"pointer"}}/> */}
                    <img src="https://pyxis.nymag.com/v1/imgs/3ee/06f/c0442386d1af5db01627afd6af4d6f5640-10-quavo.1x.rsocial.w1200.jpg" className='avatar' alt="" />
                    <p>Quavo</p>
                </div>
                <div className='followCeleb'  onClick={handleFollow2}>
                    {celebFollowedQuavo ? <p>followed</p> :  <p>follow</p>}
                    {celebFollowedQuavo ? <BsPersonFillCheck/> : <BsPersonPlusFill/>}
                </div> 
            </div>
        </div>
        </div>
        <div className="rightBar">
            <RightBar/>
        </div>
    </div>
  )
}

export default FollowSuggestion