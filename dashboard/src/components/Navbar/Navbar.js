import "./Navbar.css";
import { FaBell, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/dashboard" className="navbar-logo">
        <h2 className="navbar-title">Visual Dashboard</h2>
      </NavLink>

      <div className="navbar-controls">
        <div className="search-wrapper">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <FaBell className="navbar-bell-icon" />
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEGYXJFREhoDg/profile-displayphoto-shrink_800_800/B56ZYOnUgRGsAc-/0/1744001911338?e=1755734400&v=beta&t=id5X0EJNByhCN0IFD_d3kymFZI7uIBaJGqbF-K_Gd1Y"
          className="navbar-profile"
          alt="profile-pic"
        />
        <NavLink to="/login" className="logout-link">
          <RiLogoutCircleRLine className="logout-icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
