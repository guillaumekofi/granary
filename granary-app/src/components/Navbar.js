// import styles
import './Navbar.css'
import Logo from '../assets/logos/agriculture.svg'

// import react components
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        {/*Logo*/}
        <li className="logo">
          <Link to="/">
            <img src={Logo} alt="granary"/><br/>
            <span>Granary</span>
          </Link>
        </li>

        {/*login, signup and logout button*/}
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <button className="btn">Logout</button>

      </ul>

    </div>
  );
};

export default Navbar;