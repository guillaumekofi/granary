// import styles
import './Sidebar.css'
import Feed from '../assets/icons/feed.svg'

// react components imports
import {NavLink} from "react-router-dom";

// app internal components
import ProfilePhoto from "./ProfilePhoto";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <ProfilePhoto />
          <h4>User</h4>
          <p>@username</p>
        </div>

        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={Feed} alt="news feed" />
                <span>News Feed</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;