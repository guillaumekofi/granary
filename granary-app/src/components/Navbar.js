// import styles
import './Navbar.css'
import Logo from '../assets/logos/agriculture.svg'

// import react components
import {Link} from "react-router-dom";
import useLogout from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () => {
  const {error, isPending, logout} = useLogout();
  const { user } = useAuthContext();  // get user to handle navbar menu

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
        {!user &&
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        }
        {user &&
          <>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <p className="text-info">Logging you out...</p>}
            {error && <p>{error}</p>}
          </>
        }
      </ul>
    </div>
  );
};

export default Navbar;