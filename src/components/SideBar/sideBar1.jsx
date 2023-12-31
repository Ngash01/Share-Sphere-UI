import './SideBar.scss'
import {MdRssFeed} from "react-icons/md"
import {BsFillChatRightTextFill} from "react-icons/bs";
import {AiFillPlayCircle, AiOutlineQuestionCircle} from "react-icons/ai";
import {MdGroupAdd} from "react-icons/md";
import {PiBookmarkSimpleFill} from "react-icons/pi";
import {MdWork} from "react-icons/md";
import {BsCalendarEvent} from "react-icons/bs";
import {FaGraduationCap} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

const SideBar1 = ()=>{
    return (
        <div className='Sidebar'>
            <div className="wrapper">
                <ul className='SidebarList'>
                    <Link to={'/follow'} style={{textDecoration: 'none'}}>
                    <li className='SideBarListItem'>
                            <BsFillPeopleFill className='standardIcons'/>
                            <span className="sidebarListItemText">People</span>
                    </li>
                    </Link>   
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                    <li className='SideBarListItem'>
                        <MdRssFeed className='standardIcons'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>  
                    </Link>                   
                    <li className='SideBarListItem'>
                        <AiFillPlayCircle className='standardIcons'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className='SideBarListItem'>
                        <MdGroupAdd className='standardIcons'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className='SideBarListItem'>
                        <PiBookmarkSimpleFill className='standardIcons'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className='SideBarListItem'>
                        <AiOutlineQuestionCircle className='standardIcons'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className='SideBarListItem'>
                        <MdWork className='standardIcons'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className='SideBarListItem'>
                        <BsCalendarEvent className='standardIcons'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className='SideBarListItem'>
                        <FaGraduationCap className='standardIcons'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li>
                        <button style={{marginTop:"1rem"}}>Show More</button>
                    </li>
                    <hr style={{margin:"20px 0", }}/>
                </ul>
                <ul className='SidebarList' style={{marginTop:"1rem"}}>
                    <li className='SideBarListItem'>
                        <img src="/assets/avatar 11.jpeg" className='avatarsidebar' alt="" />
                        <span className="sidebarListItemText">Christina Morillo</span>
                    </li>
                    <li className='SideBarListItem'>
                        <img src="/assets/postpic1.jpeg" className='avatarsidebar' alt="" />
                        <span className="sidebarListItemText">Angela Chikuza</span>
                    </li>
                    <li className='SideBarListItem'> 
                        <img src="/assets/postpic3.jpeg" className='avatarsidebar' alt="" />
                        <span className="sidebarListItemText">Juma Barassa</span>
                    </li>
                    <li className='SideBarListItem'>
                        <img src="/assets/postpic2.jpeg" className='avatarsidebar' alt="" />
                        <span className="sidebarListItemText">Mr Ikuyoze</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar1;

