import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

function Collections (props) {

return (
    <div className="myCollections">
                    <h1>My Collections: </h1>
                    {props.userCollections.map(collection => {
                        return <div><NavLink to="/collections" exact>{collection.title}</NavLink></div>
                    })}
                </div>

// {/* <div className="nav-links"><NavLink to="/collections" exact>My Collections</NavLink></div> */}

)
}


export default Collections;