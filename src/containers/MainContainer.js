import React from 'react';
import Gallery from './Gallery'
import Dashboard from './Dashboard'



class MainContainer extends React.Component {
  
    state = {
        paintings: []
    }
    // componentDidMount() {
    //     fetch('http://localhost:3000/paintings')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((paintings) => {
    //         console.log("all paintings:", paintings);
    //     });
    // }
  
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
