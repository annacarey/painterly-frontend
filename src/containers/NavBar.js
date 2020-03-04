import React from 'react';
import {NavLink} from 'react-router-dom'
import './Containers.css';

function NavBar(props) {
  const currentUser = props.user.username
  return (
    <div className="navbar">
      {currentUser && <div id="username" className="nav-links">Hey {currentUser}!</div>}
      {currentUser && <div className="nav-links"><NavLink to="/gallery" exact>Gallery</NavLink></div> }
      {currentUser && <div className="nav-links"><NavLink to="/dashboard" exact>Dashboard</NavLink></div> }
      {currentUser && <div className="nav-links"><NavLink to="/dashboard/paintings" exact>My Paintings</NavLink></div> }
      {currentUser && <div className="nav-links"><NavLink to="/dashboard/collections" exact>My Collections</NavLink></div> }
  {currentUser && <div className="nav-links"><NavLink to="/" exact>{currentUser ? 'Logout' : 'LogIn' }</NavLink></div> }
    </div>
  );
}

export default NavBar;

