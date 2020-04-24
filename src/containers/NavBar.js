import React from 'react';
import {NavLink} from 'react-router-dom'
import './Containers.css';
import styled from 'styled-components'


function NavBar(props) {
  const currentUser = props.user.username
  return (
    <NavBarDiv >
      {currentUser && <NavLinkDiv id="username" className="nav-links">Hey {currentUser}!</NavLinkDiv>}
      {currentUser && <NavLinkDiv  className="nav-links"><NavLink to="/gallery" exact>Gallery</NavLink></NavLinkDiv > }
      {currentUser && <NavLinkDiv  className="nav-links"><NavLink to="/dashboard" exact>Dashboard</NavLink></NavLinkDiv > }
      {currentUser && <NavLinkDiv  className="nav-links"><NavLink to="/dashboard/paintings" exact>Paintings</NavLink></NavLinkDiv > }
      {currentUser && <NavLinkDiv  className="nav-links"><NavLink to="/dashboard/collections" exact>Collections</NavLink></NavLinkDiv > }
      {currentUser && <LastNavLinkDiv  className="last-nav-link"><NavLink to="/" exact>{currentUser ? 'Logout' : 'LogIn' }</NavLink></LastNavLinkDiv > }
    </NavBarDiv>
  );
}

export default NavBar;

const NavBarDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-top: 10px;
    flex-direction: column; 
    border-width: 1px;
    text-align: left;
`
const NavLinkDiv = styled.div`
    display: flex;
    border-style: solid;
    border-bottom: none;
    border-width: 2px;
    padding: 10px;
`
const LastNavLinkDiv = styled.div`
    display: flex;
    border-style: solid;
    border-width: 2px;
    padding: 10px;
`
