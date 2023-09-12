import SideBar1 from "../../components/SideBar/sideBar1";
import {Feed} from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import TopBar from "../../components/topbar/TopBar";
import "./Home.css";

const Home = () => {

  return (
    <div>
        <div className="container">
            <SideBar1/>
            <Feed/>
            <RightBar/>
        </div>
    </div>
  )
}

export default Home;