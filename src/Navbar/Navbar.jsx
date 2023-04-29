import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './navbar.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

//navbar
const NavBar = () => {
  const handleBackClick = () => {
    // Add your code to handle the back button click event here
  };

  return (
    <Router>
      <div>
        <button className="back-button" onClick={handleBackClick}>
          <div className="back-icon">
            <FaArrowLeft size={20} />
            <h6>Back to dashboard</h6>
          </div>
        </button>
        <div className="nav">
          <div>
            <h1>Usage OF DOM </h1>
          </div>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/Video">
                Video
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/Description">
                Description
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/Hands-on_Lab">
                Hands-on Lab
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default NavBar;