import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-links"><NavLink to="/gallery" exact>Gallery</NavLink></div>
      <div className="nav-links"><NavLink to="/dashboard" exact>Dashboard</NavLink></div>
      <div className="nav-links"><NavLink to="/dashboard/paintings" exact>My Paintings</NavLink></div>
      <div className="nav-links"><NavLink to="/dashboard/collections" exact>My Collections</NavLink></div>
      <div className="nav-links"><NavLink to="/welcome" exact>Logout</NavLink></div>
    </div>
  );
}

export default NavBar;

