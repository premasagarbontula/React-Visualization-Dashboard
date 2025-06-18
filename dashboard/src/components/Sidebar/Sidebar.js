import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { RiPieChartLine } from "react-icons/ri";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/dashboard" className="sidebar-logo">
        <h2 className="sidebar-title">Board.</h2>
      </NavLink>
      <nav>
        <NavLink to="/dashboard" end className="nav-link">
          <RiPieChartLine className="icon" />
          <span className="nav-text">Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/transactions" className="nav-link">
          <FaTags className="icon" />
          <span className="nav-text">Transactions</span>
        </NavLink>
        <NavLink to="/dashboard/schedules" className="nav-link">
          <RiCalendarScheduleLine className="icon" />
          <span className="nav-text">Schedules</span>
        </NavLink>
        <NavLink to="/dashboard/users" className="nav-link">
          <FaRegUserCircle className="icon" />
          <span className="nav-text">Users</span>
        </NavLink>
        <NavLink to="/dashboard/settings" className="nav-link">
          <IoSettingsOutline className="icon" />
          <span className="nav-text">Settings</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}
export default Sidebar;
