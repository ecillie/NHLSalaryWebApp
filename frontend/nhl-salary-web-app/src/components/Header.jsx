import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            NHL Salary Tracker
          </NavLink>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/teams" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/players" 
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Players
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 