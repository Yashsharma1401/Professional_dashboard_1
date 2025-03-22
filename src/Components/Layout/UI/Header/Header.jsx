import { useState } from "react";
import { Maximize, Grid, Bell} from "lucide-react";
import { CiChat1 } from "react-icons/ci";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header() {


  return (
    <header className="header d-flex align-items-center justify-content-between text-center p-3">
      {/* Search Bar */}
      <div className=" d-flex align-items-center">
        
        <input
          type="text"
          placeholder="Search"
          className="form-control search-input"
        />
      </div>

      {/* Icons Section */}
      <div className="icons-section d-flex align-items-center gap-2">
        <button className="icon-btn max-btn">
          <Maximize size={20} />
        </button>
        <button className="icon-btn green-btn">
          <Grid size={20} />
        </button>
        <button className="icon-btn purple-btn">
          <Grid size={20} />
        </button>
        <button className="icon-btn orange-btn">
          <Grid size={20} />
        </button>
        <button className="icon-btn position-relative">
          <CiChat1 size={20} />
          <span className="notification-badge">14</span>
        </button>
        <button className="icon-btn position-relative">
          <Bell size={20} />
          <span className="notification-badge">13</span>
        </button>
        <div className="profile-container position-relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-img"
          />
          <span className="status-indicator"></span>
        </div>
      </div>
    </header>
  );
}