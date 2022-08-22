// import styles
import './Sidebar.css'
import Feed from '../assets/icons/feed.svg'
import Cooperative from '../assets/icons/cooperative.svg'

// react components imports
import {Link, NavLink} from "react-router-dom";

// app internal components
import ProfilePhoto from "./ProfilePhoto";
import {useAuthContext} from "../hooks/useAuthContext";

// firebase imports
import { useUsername } from "../hooks/useUsername";

const Sidebar = () => {
  const { user } = useAuthContext();
  const {username, error} = useUsername('users', user.uid);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <ProfilePhoto imgSrc={user.photoURL} />
          <h4>Hi, { user.displayName }</h4>
          { !error && <p><Link to="/">@{ username }</Link></p>}
        </div>

        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={Feed} alt="news feed" />
                <span>News Feed</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cooperatives">
                <img src={Cooperative} alt="cooperatives" />
                <span>Cooperatives</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;