import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'



class MainContainer extends React.Component {
  
    state = {
        paintings: []
    }
  
    render() {
        return (
        <div>
            <Gallery />
            <Dashboard />
        </div>
        )
    }
}

export default MainContainer;
