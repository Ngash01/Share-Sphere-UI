import React from 'react'
import SideBar1 from '../../components/SideBar/sideBar1';
import "./Profile.scss";
import Share from '../../components/share/Share';


const Profile = () => {
  return (
    <div className='profile'>
        <SideBar1/>
        <div className='RightSide'> 
            <img src="/assets/forest.jpeg" alt="" className='backgroundImg' />
            <div className="profileInfo">
            <img src="/assets/mikhailportrait.jpeg" className='userImg' alt="" />
               <div className="profileInfoMore">
                 <p>Christina Morillo</p>
                 <p>New York Times News Caster</p>
               </div>
            </div>
            <div className="userShareInfo">
                <div className="userShareLeft">
                    <Share/>
                </div>
                <div className="userShareRight">
                    <h2>User Information</h2>
                    <div className='location'>
                        <p className='locationHeder'>City:</p>
                        <p>New York</p>
                    </div>
                    <div className='location'>
                        <p className='locationHeder'>From:</p>
                        <p>Madrid</p>
                    </div>
                    <div className='location'>
                        <p className='locationHeder'>Relationship:</p>
                        <p>Single</p>
                    </div>
                    <h3>User friends</h3>
                    <div className='userFriends'>
                        <div className='userFriend'>
                            <img src="https://images.pexels.com/photos/1181225/pexels-photo-1181225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='userFriendImg' alt="" />
                            <p>Jane Carter</p>
                        </div>
                        <div className='userFriend'>
                            <img src="https://images.pexels.com/photos/1181286/pexels-photo-1181286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="userFriendImg" alt="" />
                            <p>James Andy</p>
                        </div>
                        <div className='userFriend'>
                            <img src="https://images.pexels.com/photos/1793305/pexels-photo-1793305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='userFriendImg' alt="" />
                            <p>Andy Wallace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;


