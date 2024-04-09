import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Dashboard</h3>
        </div>
        <ul className="components">
          {/* <li>
            <Link to="/home">Home</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
