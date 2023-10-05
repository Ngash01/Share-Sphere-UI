import React, { useContext, useEffect, useState } from 'react'
import SideBar1 from '../../components/SideBar/sideBar1';
import "./Profile.scss";
import Share from '../../components/share/Share';
import { Feed } from '../../components/feed/Feed';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {

    const {variable} = useContext(AuthContext)
    console.log(variable)
    const [user, setUser] = useState({})
    const params = useParams()
    const paramsUser = params.username;
    console.log("params here",params.username)
    const [userFriends, setUserFriends] = useState([])


    console.log("RightBar user data", user._id)

    useEffect(()=>{
        if(paramsUser){
            const fetchedData = async()=>{
                const res = await axios.get(`https://share-sphere.onrender.com/users/one?username=${paramsUser}`)
                setUser(res.data)
                console.log("Quavo's data",res.data)
            }
            fetchedData()
        }
    },[paramsUser])

    useEffect(()=>{
        const fetchFriends = async()=>{
            if(user?._id){
                const res = await axios.get(`https://share-sphere.onrender.com/users/friends/${user._id}`)
                console.log("userFriends",res.data)
                console.log("user Friends id", user._id)
                setUserFriends(res.data)
            }
        }
        fetchFriends()
      },[user._id])

  return (
    <div className='profile'>
        <SideBar1/>
        <div className='RightSide'> 
            <img src="/assets/forest.jpeg" alt="" className='backgroundImg' />
            <div>
            </div>
            <div className="profileInfo">
                {user?.coverPicture ? <img src={user.coverPicture} className='userImg' alt="" /> : <img src='https://as1.ftcdn.net/v2/jpg/02/32/71/62/1000_F_232716200_xTsnomMS5djsC6m9cDNQmEKtPgt11Xjo.jpg' alt=''  className='userImg' style={{fontSize:"40px"}}/>}
               <div className="profileInfoMore">
                 <p>{user.username}</p>
                 <p>{user.profession}</p>
                 <p className='lastInfo'>{user.milestone}</p>
               </div>
            </div>
            <div className="userShareInfo">
                <div className="userShareLeft">
                    <Feed username={`${paramsUser}`}/>
                </div>
                <div className="userShareRight">
                    <h2>User Information</h2>
                    <div className='location'>
                        <p className='locationHeder'>City:</p>
                        <p style={{cursor:"pointer"}}>New York</p>
                    </div>
                    <div className='location'>
                        <p className='locationHeder'>From:</p>
                        <p></p>
                    </div>
                    {/* <div className='location'>
                        <p className='locationHeder'></p>
                        <p>Single</p>
                    </div> */}
                    <h3>User friends</h3>
                    <div className='userFriends'>
                    {userFriends?.map((friend)=>{
                        return (
                            <Link to={`/profile/${friend.username}`} style={{textDecoration:"none"}}>
                            <div className='userFriend' key={friend._id}>
                                <img src={friend.profilePic} className='userFriendImg' alt="" />
                                <p>{friend.username}</p>
                            </div>
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;



//     <div className='userFriend'>
//     <img src="https://images.pexels.com/photos/1181286/pexels-photo-1181286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="userFriendImg" alt="" />
//     <p>James Andy</p>
// </div>
// <div className='userFriend'>
//     <img src="https://images.pexels.com/photos/1793305/pexels-photo-1793305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='userFriendImg' alt="" />
//     <p>Andy Wallace</p>
// </div>

