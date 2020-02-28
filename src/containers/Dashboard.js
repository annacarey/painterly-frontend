import React from 'react';
import Canvas from './Canvas'
import './Containers.css';

class Dashboard extends React.Component {
  
   
  
    render() {
        return (
        <div id="welcome">
            <h1>Create your drawing below</h1>
            <div className="dashboard">
                <Canvas />
            </div>
        </div>
        )
    }
}

export default Dashboard;