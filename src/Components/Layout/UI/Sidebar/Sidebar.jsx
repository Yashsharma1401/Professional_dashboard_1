import React, { useState } from "react";
import {
  FaRegCircle,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({ dashboard: false });

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const handleHover = (state) => {
    if (!isOpen) setHovered(state);
  };

  const toggleSubmenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className={`sidebar ${isOpen || hovered ? "open" : "closed"}`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h5 className="mb-0">CRMS</h5>
        {/* <FaBars className="menu-icon" onClick={toggleSidebar} /> */}
      </div>


      <ul className="list-unstyled sidebar-menu">
        <li className={`menu-item ${expandedMenus["dashboard"] ? "active" : ""}`} onClick={() => toggleSubmenu("dashboard")}>
          <div className="menu-title ">
            <FaRegCircle /> 
            <span className="d-flex">
              <span className="me-5">Dashboard</span>
              <span className="ms-5"><FaChevronDown className={`dropdown-icon ${expandedMenus["dashboard"] ? "rotated" : ""}`} /></span>
            </span>
          </div>
        </li>
        
        <ul className={`submenu ${expandedMenus["dashboard"] ? "open" : ""}`}>
          <li className="submenu-item active">
            <NavLink to="/" className="textdecorations"><FaRegCircle /> <span>Deals Dashboard</span></NavLink>
          </li>
          <li className="submenu-item">
            <NavLink to="/leaddash" className="textdecorations"><FaRegCircle /> <span>Leads Dashboard</span></NavLink>
          </li>
          <li className="submenu-item">
           <NavLink to="/projectdashboard" className="textdecorations"> <FaRegCircle /> <span>Project Dashboard</span> </NavLink>
          </li>
        </ul>
        
      </ul>
      <li className="menu-item">
          <div className="menu-title">
            <NavLink className="textdecorations" to="/Contacts"><FaRegCircle /> <span>Contacts</span></NavLink>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <NavLink className="textdecorations" to="/Activities"><FaRegCircle /> <span>Activities</span></NavLink>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
          <NavLink className="textdecorations" to="/companies"><FaRegCircle /> <span>Companies</span></NavLink>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
          <NavLink className="textdecorations" to="/pipelines"><FaRegCircle /> <span>Pipelines</span></NavLink>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Campaign</span>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Project</span>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Task</span>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Proposals</span>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Contract</span>
          </div>
      </li>
      <li className="menu-item">
          <div className="menu-title">
            <FaRegCircle /> <span>Estimation</span>
          </div>
      </li>
    </div>
  );
};

export default Sidebar;
